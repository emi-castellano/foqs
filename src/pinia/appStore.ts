import { defineStore } from "pinia";
import type { AppState } from "./types";

export type ActiveStep = "time-config" | "time-running" | "time-finished";

export const useAppStore = defineStore("appStore", {
  state: (): AppState => ({
    focusTime: 1,
    restTime: 1,
    activeStep: "time-running",
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
    stopPlaying() {
      this.isPlaying = false;
    },
    startPlaying() {
      this.isPlaying = true;

      if (this.isReadyToStart && !this.isPlaying) {
        this.isOnFocus = true;
      }
    },
    changeActiveStep(step: ActiveStep) {
      this.activeStep = step;
    },
    showRestStep() {
      this.isOnFocus = false;
      this.isOnRest = true;
    },
  },
});
