<script setup lang="ts">
import { useAppStore } from "@/pinia/appStore";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref, toRefs } from "vue";
import BaseButton from "../button/BaseButton.vue";

const appStore = useAppStore();
const time = ref(appStore.focusTime * 60);
const timer = ref(0);

const playingClass = computed(() => (appStore.isPlaying ? "playing" : ""));
const animationPausedClass = computed(() =>
  !appStore.isPlaying ? "paused" : ""
);
const buttonText = computed(() => (appStore.isPlaying ? "Stop" : "Start"));
const timeTypeText = computed(() => {
  if (appStore.isOnFocus) {
    return "Time to focus";
  } else if (appStore.isOnRest) {
    return "Time to rest";
  } else {
    return "All set";
  }
});

const timeLeftText = computed(() => {
  const minutes = Math.floor(time.value / 60);
  const seconds = time.value % 60;

  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
});

const onClick = () => {
  appStore.toggleIsPlaying();
  if (appStore.isPlaying) {
    startTimer();
  } else {
    stopTimer();
  }
};

const startTimer = () => {
  if (!timer.value) {
    timer.value = setInterval(() => {
      if (time.value > 0) {
        time.value--;
      } else {
        clearInterval(timer.value);
      }
    }, 1000);
  }
};

const stopTimer = () => {
  clearInterval(timer.value);
  timer.value = 0;
};
</script>

<template>
  <div class="base-timer">
    <div :class="['time-info', playingClass]">
      <span class="time-type">{{ timeTypeText }}</span>
      <h2 class="time-left">{{ timeLeftText }}</h2>
      <BaseButton size="small" :text="buttonText" @click="onClick" />
    </div>
    <span :class="['wave-1', animationPausedClass]"></span>
    <span :class="['wave-2', animationPausedClass]"></span>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/colors.scss";

$circleSize: 350px;
.base-timer {
  border: none;
  background: $greyLight;
  grid-column: 2 / 3;
  grid-row: 4 / 6;
  width: $circleSize;
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
    width: $circleSize;
    height: $circleSize;
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

    .time-type {
      color: $greyDark2;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }

    .time-left {
      font-size: 4.5rem;
      color: $greyDark2;
      font-weight: 500;
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
    width: $circleSize - 50px;
    height: $circleSize - 50px;
    border-radius: 50%;
    filter: blur(1px);
    z-index: 100;

    &.paused {
      animation-play-state: paused;
    }
  }

  .wave-1 {
    box-shadow: 0.4rem 0.4rem 0.8rem $greyLight2, -0.4rem -0.4rem 0.8rem $white;
    background: linear-gradient(to bottom right, $greyLight2 0%, $white 100%);
    animation: waves 4s linear infinite;
  }

  .wave-2 {
    box-shadow: 0.4rem 0.4rem 0.8rem $greyLight2, -0.4rem -0.4rem 0.8rem $white;
    animation: waves 4s linear 2s infinite;
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
