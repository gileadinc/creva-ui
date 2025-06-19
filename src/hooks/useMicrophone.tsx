'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
export type MicPermissionState = 'granted' | 'denied' | 'prompt';

interface UseMicrophoneOptions {
  enableRecording?: boolean;
  onPermissionDenied?: (error: string) => void;
}

interface UseMicrophoneResult {
  mediaStream: MediaStream | null;
  mediaRecorder: MediaRecorder | null;
  micStatus: MicPermissionState;
  startMicrophone: () => Promise<{
    stream: MediaStream;
    mediaRecorder: MediaRecorder | null;
  } | null>;
  stopMicrophone: () => void;
  isMicLoading: boolean;
  micError: string | null;
  isRecording: boolean;
}

export const useMicrophone = (
  options: UseMicrophoneOptions = {},
): UseMicrophoneResult => {
  const { enableRecording = true, onPermissionDenied } = options;

  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const [isRecording, setIsRecording] = useState(false);
  const [micStatus, setMicStatus] = useState<MicPermissionState>('prompt');
  const [isMicLoading, setIsMicLoading] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);

  // Check initial mic permission & watch for changes
  useEffect(() => {
    let permissionStatus: PermissionStatus;

    const checkPermission = async () => {
      try {
        permissionStatus = await navigator.permissions.query({
          name: 'microphone' as PermissionName,
        });

        setMicStatus(permissionStatus.state as MicPermissionState);

        permissionStatus.onchange = () => {
          setMicStatus(permissionStatus.state as MicPermissionState);
        };
      } catch (error) {
        console.warn('Permissions API not supported or error:', error);
        setMicStatus('prompt'); // fallback when Permissions API is not available
        setMicError('Permissions API not supported or error occurred.');
      }
    };

    checkPermission();

    return () => {
      if (permissionStatus) {
        permissionStatus.onchange = null;
      }
    };
  }, []);

  // Start microphone and MediaRecorder
  // This function handles both starting the microphone and setting up the MediaRecorder if enabled
  // It returns the MediaStream if successful, or null if there was an error
  const startMicrophone = useCallback(async () => {
    setIsMicLoading(true);
    setMicError(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      if (enableRecording) {
        const recorder = new MediaRecorder(stream, {
          mimeType: 'audio/webm',
        });
        recorder.addEventListener('start', () => {
          setIsRecording(true);
        });
        recorder.addEventListener('stop', () => {
          setIsRecording(false);
        });
        mediaRecorderRef.current = recorder;
      }

      setIsMicLoading(false);
      setMicStatus('granted');
      return { stream, mediaRecorder: mediaRecorderRef.current };
    } catch (err) {
      console.error('Microphone error:', err);
      setIsMicLoading(false);

      let errorMsg = 'Unable to access microphone.';
      if (err instanceof DOMException && err.name === 'NotAllowedError') {
        errorMsg = 'Microphone permission denied.';
        setMicStatus('denied');
      } else if (err instanceof DOMException && err.name === 'NotFoundError') {
        errorMsg = 'No microphone found.';
        setMicStatus('denied');
      }

      setMicError(errorMsg);
      if (onPermissionDenied) onPermissionDenied(errorMsg);

      return null;
    }
  }, [enableRecording, onPermissionDenied]);

  // Stop the microphone and MediaRecorder
  // This function stops all tracks in the MediaStream and resets the state
  // It does not return anything, but updates the state accordingly
  const stopMicrophone = useCallback(() => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    if (mediaRecorderRef && mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    mediaRecorderRef.current = null;
    setIsRecording(false);
  }, []);

  useEffect(() => {
    return () => {
      stopMicrophone();
    };
  }, [stopMicrophone]);

  return {
    mediaStream: mediaStreamRef.current,
    mediaRecorder: mediaRecorderRef.current,
    micStatus,
    startMicrophone,
    stopMicrophone,
    isMicLoading,
    isRecording,
    micError,
  };
};
