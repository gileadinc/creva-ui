// stores/useDemoStore.ts
'use client';
import { create } from 'zustand';

const DEFAULT_AGENT_ID = '1';

interface DemoState {
  isModalOpen: boolean;
  selectedAgentId: string | null;
  isCharacterTalking: boolean;
  isCtaDialogOpen: boolean;
  modalContext: 'agentInteraction' | 'tryLive' | null;
  isTryLiveOn: boolean;
}

interface DemoActions {
  openModal: (context?: 'agentInteraction' | 'tryLive') => void;
  closeModal: () => void;
  setSelectedAgentId: (id: string) => void;
  openCtaDialog: () => void;
  closeCtaDialog: () => void;

  //
  setIsCharacterTalking: (isTalking: boolean) => void;
  setIsTryLiveOn: (isOn: boolean) => void;
}

export const useAppStore = create<DemoState & DemoActions>((set, get) => ({
  // Initial State
  isModalOpen: false,
  selectedAgentId: null,
  isCharacterTalking: false,
  isTryLiveOn: false,
  isCtaDialogOpen: false,
  modalContext: null,

  // Actions
  openModal: (context = 'agentInteraction') => {
    set({
      isModalOpen: true,
      selectedAgentId: get().selectedAgentId
        ? get().selectedAgentId
        : DEFAULT_AGENT_ID,
      modalContext: context,
    });
  },
  closeModal: () => {
    set({ isModalOpen: false, modalContext: null });
  },
  setSelectedAgentId: (id) => set({ selectedAgentId: id }),

  openCtaDialog: () => set({ isCtaDialogOpen: true }),
  closeCtaDialog: () => set({ isCtaDialogOpen: false }),

  setIsCharacterTalking: (isTalking) => set({ isCharacterTalking: isTalking }),
  setIsTryLiveOn: (isOn) => set({ isTryLiveOn: isOn }),
}));
