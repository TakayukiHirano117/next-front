import { createStore } from "zustand/vanilla";

export type UiStoreState = {
  isPasswordVisible: boolean;
};

export type UiStoreActions = {
  togglePasswordVisibility: () => void;
};

export type UiStore = UiStoreState & UiStoreActions;

export function createUiStore(initialState?: Partial<UiStoreState>) {
  return createStore<UiStore>()((set) => ({
    isPasswordVisible: initialState?.isPasswordVisible ?? false,
    togglePasswordVisibility: () =>
      set((state) => ({
        isPasswordVisible: !state.isPasswordVisible,
      })),
  }));
}

export type UiStoreApi = ReturnType<typeof createUiStore>;
