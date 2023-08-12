import { defineStore } from "pinia";
import type { ActiveStep, AppState } from "./types";

export const useAppStore = defineStore("appStore", {
  state: (): AppState => ({
    focusTime: 0,
    restTime: 0,
    repeatCount: 0,
    activeStep: "time-config",
    isPlaying: false,
    isOnFocus: false,
    isOnRest: false,
    animationState: "default",
    hasFinished: false,
  }),
  getters: {
    isReadyToStart: (state) =>
      !state.isPlaying && !state.isOnFocus && !state.isOnRest,
  },
  actions: {
    setTimeValues(focusTime: number, restTime: number) {
      this.focusTime = focusTime;
      this.restTime = restTime;
    },
    stopPlaying() {
      this.isPlaying = false;
      this.animationState = "paused";
    },
    startPlaying() {
      if (this.isReadyToStart && !this.isPlaying) {
        this.isOnFocus = true;
        this.increaseRepeatCount();
      }
      this.animationState = "playing";
      this.isPlaying = true;
    },
    increaseRepeatCount() {
      this.repeatCount++;
    },
    changeActiveStep(step: ActiveStep) {
      this.activeStep = step;
    },
    showRestStep() {
      this.isOnFocus = false;
      this.animationState = "default";
      this.isOnRest = true;
      console.log("=> this.animationState", this.animationState);
    },
    finish() {
      this.isOnRest = false;
      this.isOnFocus = false;
      this.animationState = "default";
      this.hasFinished = true;
      this.focusTime = 0;
      this.restTime = 0;
      this.repeatCount = 0;
    },
  },
});
