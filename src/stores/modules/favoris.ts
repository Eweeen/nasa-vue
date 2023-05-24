import { defineStore } from "pinia";

export const useFavorisStore = defineStore("favoris", {
  state: () => ({
    favoris: [] as string[]
  }),
  getters: {
    getFavoris(state: any) {
      return state.favoris;
    },
    getFavorisByIds(state: any) {
      return (ids: string[]) => {
        return state.favoris.filter((favoris: string) => {
          return ids.includes(favoris);
        });
      };
    },
    getFavorisById(state: any) {
      return (id: string) => {
        return state.favoris.find((favoris: string) => {
          return favoris === id;
        });
      };
    }
  },
  actions: {
    setFavoris(favoris: any) {
      this.favoris = favoris;
    },
    addFavoris(favoris: any) {
      this.favoris.push(favoris);
    },
    removeFavoris(favoris: any) {
      this.favoris.splice(this.favoris.indexOf(favoris), 1);
    }
  }
});
