<script setup lang="ts">
import { ref, computed } from "vue";
import BaseButton from "../button/BaseButton.vue";

const playing = ref(false);
const shadowClass = computed(() => (playing.value ? "shadow" : ""));
const animationPausedClass = computed(() => (!playing.value ? "paused" : ""));
const buttonText = computed(() => (playing.value ? "Stop" : "Start"));

const onClick = () => {
  playing.value = !playing.value;
};
</script>

<template>
  <div class="base-timer">
    <div :class="['time-info', shadowClass]">
      <span class="time-left">00:00</span>
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

    .time-left {
      font-size: 4.5rem;
      color: $greyDark2;
      font-weight: 500;
    }
    &.shadow {
      box-shadow: $innerShadow;
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
    width: $circleSize - 50;
    height: $circleSize - 50;
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
