export type ActiveStep = "time-config" | "time-running" | "time-finished";

export interface AppState {
  focusTime: number;
  restTime: number;
  repeatCount: number;
  activeStep: ActiveStep;
  isPlaying: boolean;
  isOnFocus: boolean;
  isOnRest: boolean;
  animationState: AnimationState;
  hasFinished: boolean;
}

export type AnimationState = "default" | "playing" | "paused";
