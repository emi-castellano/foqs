<script setup lang="ts">
import { computed, ref } from "vue";

const playing = ref(false);
const shadowClass = computed(() => (playing.value ? "shadow" : ""));
const animationPausedClass = computed(() => (!playing.value ? "paused" : ""));

const onClick = () => {
  playing.value = !playing.value;
};
</script>

<template>
  <button :class="['play-button']" @click="onClick">
    <span :class="['icons', shadowClass]">
      <font-awesome-icon v-if="!playing" class="play" icon="fa-solid fa-play" />
      <font-awesome-icon v-else class="pause" icon="fa-solid fa-pause" />
    </span>
    <span :class="['wave-1', animationPausedClass]"></span>
    <span :class="['wave-2', animationPausedClass]"></span>
  </button>
</template>

<style scoped lang="scss">
@import "../../assets/colors.scss";
.play-button {
  border: none;
  background: $greyLight;
  grid-column: 2 / 3;
  grid-row: 4 / 6;
  width: 9rem;
  height: 100%;
  justify-self: center;
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  .icons {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    width: 6rem;
    height: 6rem;
    display: flex;
    margin: 0.6rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 3.2rem;
    color: $primary;
    z-index: 300;
    background: $greyLight;
    box-shadow: $shadow;
    cursor: pointer;
    position: relative;
    border: none;
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
    width: 6rem;
    height: 6rem;
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
