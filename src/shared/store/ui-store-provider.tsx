"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { useStore } from "zustand";
import {
  createUiStore,
  type UiStore,
  type UiStoreApi,
  type UiStoreState,
} from "./ui-store";

const UiStoreContext = createContext<UiStoreApi | null>(null);

export function UiStoreProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: Partial<UiStoreState>;
}) {
  const [store] = useState(() => createUiStore(initialState));

  return (
    <UiStoreContext.Provider value={store}>
      {children}
    </UiStoreContext.Provider>
  );
}

export function useUiStore<T>(selector: (store: UiStore) => T) {
  const store = useContext(UiStoreContext);

  if (!store) {
    throw new Error("useUiStore must be used within UiStoreProvider.");
  }

  return useStore(store, selector);
}
