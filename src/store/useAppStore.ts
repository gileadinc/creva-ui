'use client';
import { create } from 'zustand';

const DEFAULT_AGENT_ID = 'agent-ben-id';

interface IAppStore {
  // modal form
  isModalOpen: boolean;
  modalContext: 'redirectToLive' | 'tryLive' | null;
  openModal: (context?: 'redirectToLive' | 'tryLive') => void;
  closeModal: () => void;

  //  cta-dialog-popup
  isCtaDialogOpen: boolean;
  openCtaDialog: () => void;
  closeCtaDialog: () => void;
  // agent ai ..
  selectedAgentId: string | null;
  setSelectedAgentId: (id: string) => void;

  // live demo
  isTryLiveOn: boolean;
  setIsTryLiveOn: (isOn: boolean) => void;

  tryLiveModalCount: number;
  setTryLiveModalCount: (count: number) => void;

  isTryLiveModalFirstOpen: boolean;
  setIsTryLiveModalFirstOpen: (isOpen: boolean) => void;

  isAgentTalking: boolean;
  setIsAgentTalking: (isTalking: boolean) => void;
}

export const useAppStore = create<IAppStore>((set, get) => ({
  // modal form
  isModalOpen: false,
  modalContext: null,
  openModal: (context = 'redirectToLive') =>
    set({
      isModalOpen: true,
      selectedAgentId: get().selectedAgentId
        ? get().selectedAgentId
        : DEFAULT_AGENT_ID,
      modalContext: context,
    }),

  closeModal: () => set({ isModalOpen: false, modalContext: null }),

  // cta-dialog-popup
  isCtaDialogOpen: false,
  openCtaDialog: () => set({ isCtaDialogOpen: true }),
  closeCtaDialog: () => set({ isCtaDialogOpen: false }),

  // agent ai
  selectedAgentId: null,
  setSelectedAgentId: (id) => set({ selectedAgentId: id }),

  // trylivemodedemo
  isTryLiveOn: false,
  setIsTryLiveOn: (isOn) => set({ isTryLiveOn: isOn }),

  isTryLiveModalFirstOpen: false,
  setIsTryLiveModalFirstOpen: (isOpen) =>
    set({ isTryLiveModalFirstOpen: isOpen }),

  tryLiveModalCount: 0,
  setTryLiveModalCount: (count) => set({ tryLiveModalCount: count }),

  // agent talking
  isAgentTalking: false,
  setIsAgentTalking: (isTalking) => set({ isAgentTalking: isTalking }),
}));
