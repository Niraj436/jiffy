import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useQuestStore = create()(
  persist(
    (set) => ({
      quests: [],
      setQuests: (value) => set({ quests: value }),
      cart: [],
      setCart: (value) => set({ cart: value }),
      selectedQuest: null,
      setSelectedQuest: (value) => set({ selectedQuest: value }),
    }),
    { name: 'quest-store', storage: createJSONStorage(() => sessionStorage) }
  )
);
