import {
  START_EXIT_MODAL, 
  END_EXIT_MODAL
} from '../types/modal';

export const startExitModal = () => ({
  type: START_EXIT_MODAL
});

export const endExitModal = () => ({
  type: END_EXIT_MODAL
});