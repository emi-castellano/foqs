import { defineStore } from "pinia";
import type { AppState } from "./types";

export type ActiveStep = "time-config" | "time-running" | "time-finished";

export const useAppStore = defineStore("appStore", {
  state: (): AppState => ({
    focusTime: 2,
    restTime: 0,
    activeStep: "time-config",
    isPlaying: false,
    isOnFocus: false,
    isOnRest: false,
  }),
  getters: {
    isReadyToStart: (state) =>
      !state.isPlaying && !state.isOnFocus && !state.isOnRest,
    isFocusTimeRunning: (state) => state.isOnFocus && state.isPlaying,
    isRestTimeRunning: (state) => state.isOnRest && state.isPlaying,
  },
  actions: {
    setTimeValues(focusTime: number, restTime: number) {
      this.focusTime = focusTime;
      this.restTime = restTime;
    },
    toggleIsPlaying() {
      // First time starting the timer
      if (this.isReadyToStart && !this.isPlaying) {
        this.isOnFocus = true;
      }

      // Pausing focus time
      if (this.isOnFocus && this.isPlaying) {
        this.isOnFocus = false;
        this.isOnRest = true;
      }

      // Pausing rest time
      if (this.isOnRest && this.isPlaying) {
        this.isOnRest = false;
        this.isOnFocus = true;
      }

      this.isPlaying = !this.isPlaying;
    },
    changeActiveStep(step: ActiveStep) {
      this.activeStep = step;
    },
  },
});
