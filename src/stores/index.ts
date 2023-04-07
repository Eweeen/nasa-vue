import type { Planet } from "@/interfaces/planet.interface";
import { defineStore } from "pinia";

export const usePlanetsStore = defineStore("planets", {
  state: () => ({
    planets: [] as Planet[]
  }),
  getters: {
    getPlanets(state: any) {
      return state.planets;
    },
    getSolarSystem(state: any) {
      return state.planets.filter((planet: Planet) => {
        return planet.isPlanet;
      });
    },
    getPlanetById(state: any) {
      return (id: string) => {
        return state.planets.find((planet: Planet) => {
          return planet.id === id;
        });
      };
    }
  },
  actions: {
    setPlanets(planets: any) {
      this.planets = planets;
    }
  }
});
