export enum ActiveStep {
  TimeConfig = "time-config",
  TimeRunning = "time-running",
  TimeFinished = "time-finished",
}
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

export enum AnimationState {
  Default = "default",
  Playing = "playing",
  Paused = "paused",
}
