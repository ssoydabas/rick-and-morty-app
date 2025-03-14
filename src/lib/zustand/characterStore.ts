// Please note that this store is not required for this project, but it is a good example of how to use zustand.
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CharacterType } from "@/lib/axios/types";

type CharacterState = {
  character: CharacterType | null;
  setCharacter: (character: CharacterType) => void;
};

type CharacterAction = {
  setCharacter: (character: CharacterType) => void;
};

const initialStore = {
  character: null,
};
export const useCharacterStore = create<CharacterState & CharacterAction>()(
  persist(
    (set) => ({
      ...initialStore,
      setCharacter: (character) => set({ character }),
      reset: () => set({ ...initialStore, character: null }),
    }),
    {
      name: "ZUSTAND_CHARACTER_STORE_KEY",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
