import { defineStore } from "pinia";
import type { Planet } from "@/interfaces/planet.interface";

export const usePlanetsStore = defineStore("planets", {
  state: () => ({
    planets: [] as Planet[]
  }),
  getters: {
    getPlanets(state: any) {
      return state.planets;
    },
    getPlanetsByIds(state: any) {
      return (ids: string[]) => {
        return state.planets.filter((planet: Planet) => {
          return ids.includes(planet.id);
        });
      };
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
