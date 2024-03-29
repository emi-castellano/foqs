<script setup lang="ts">
import { useAppStore } from "@/pinia/appStore";
import { computed, onUnmounted, ref } from "vue";
import BaseButton from "../button/BaseButton.vue";
import timeFinishedAudioFile from "../../assets/music/time-finished.wav";
import { AnimationState } from "@/pinia/types";

const appStore = useAppStore();
const time = ref(appStore.focusTime * 60);
const timer = ref(0);
const timeFinishedAudio = new Audio(timeFinishedAudioFile);

const startTimer = () => {
  if (!timer.value) {
    // @ts-ignore
    timer.value = setInterval(() => {
      if (time.value > 0) {
        time.value--;
      } else {
        stopTimer();
        if (appStore.isOnFocus) {
          appStore.showRestStep();
          time.value = appStore.focusTime * 60;
          timeFinishedAudio.play();
        } else {
          appStore.finish();
          timeFinishedAudio.play();
        }
      }
    }, 1000);
  }
};

const playingClass = computed(() => (appStore.isPlaying ? "playing" : ""));

const animationPausedClass = computed(() => {
  if (appStore.animationState === AnimationState.Paused) {
    return "paused";
  } else if (appStore.animationState === AnimationState.Default) {
    return "default";
  }

  return "";
});

const buttonText = computed(() => (appStore.isPlaying ? "Stop" : "Start"));

const timeTypeText = computed(() => {
  if (appStore.isOnFocus) {
    return "Time to focus";
  } else if (appStore.isOnRest) {
    return "Time to rest";
  }

  return "All set";
});

const timeLeftText = computed(() => {
  const minutes = Math.floor(time.value / 60);
  const seconds = time.value % 60;

  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
});

const onClick = () => {
  if (!appStore.isPlaying) {
    startTimer();
    appStore.startPlaying();
  } else {
    stopTimer();
    appStore.stopPlaying();
  }
};

const stopTimer = () => {
  appStore.stopPlaying();
  clearInterval(timer.value);
  timer.value = 0;
};

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <div class="base-timer">
    <div :class="['time-info', playingClass]">
      <span class="time-type">{{ timeTypeText }}</span>
      <h2 class="time-left">{{ timeLeftText }}</h2>
      <BaseButton size="small" @click="onClick">
        <template #text>
          {{ buttonText }}
        </template>
      </BaseButton>
    </div>
    <span :class="['wave-1', animationPausedClass]"></span>
    <span :class="['wave-2', animationPausedClass]"></span>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/colors.scss";
@import "../../assets/variables.scss";

$circleSizeBig: 23rem;
$circleSizeSmall: 14rem;

.base-timer {
  border: none;
  background: $greyLight;
  grid-column: 2 / 3;
  grid-row: 4 / 6;
  height: 100%;
  justify-self: center;
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;

  .time-info {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    width: $circleSizeSmall;
    height: $circleSizeSmall;
    display: flex;
    flex-direction: column;
    margin: 0.6rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 3.2rem;
    color: $primary;
    z-index: 300;
    background: $greyLight;
    box-shadow: $shadow;
    position: relative;
    border: none;
    transition: all 0.3s ease-in-out;

    @media (min-width: $tablet) {
      width: $circleSizeBig;
      height: $circleSizeBig;
    }

    .time-type {
      color: $greyDark2;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 300;

      @media (min-width: $tablet) {
        font-size: 20px;
      }
    }

    .time-left {
      font-size: 2.5rem;
      color: $greyDark2;
      font-weight: 500;

      @media (min-width: $tablet) {
        font-size: 4.5rem;
      }
    }
    &.playing {
      box-shadow: $innerShadow;
      transform: scale(1.2);
    }

    .play {
      position: absolute;
      transition: all 0.2s linear;
    }
    .pause {
      position: absolute;
      transition: all 0.2s linear;
    }
  }

  .wave-1,
  .wave-2 {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    width: $circleSizeSmall - 3rem;
    height: $circleSizeSmall - 3rem;
    border-radius: 50%;
    filter: blur(1px);
    z-index: 100;

    @media (min-width: $tablet) {
      width: $circleSizeBig - 3rem;
      height: $circleSizeBig - 3rem;
    }

    &.paused {
      animation-play-state: paused;
    }

    &.default {
      animation: none;
    }
  }

  .wave-1 {
    box-shadow: 0.4rem 0.4rem 0.8rem $greyLight2, -0.4rem -0.4rem 0.8rem $white;
    background: linear-gradient(to bottom right, $greyLight2 0%, $white 100%);
    animation: waves 3.5s linear infinite;
  }

  .wave-2 {
    box-shadow: 0.4rem 0.4rem 0.8rem $greyLight2, -0.4rem -0.4rem 0.8rem $white;
    animation: waves 3.5s linear 2s infinite;
  }
}
@keyframes waves {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
