<script setup lang="ts">
import { useAppStore } from "@/pinia/appStore";
import { computed } from "vue";
import BaseTimer from "../timer/BaseTimer.vue";

const appStore = useAppStore();

const titleText = computed(() => {
  if (appStore.isReadyToStart) {
    return "Are you ready to be productive?";
  } else if (appStore.isOnFocus) {
    return "Time to focus, hope you can make good progress!";
  } else if (appStore.isOnRest) {
    return "Time to rest, take a break!";
  } else {
    return "";
  }
});
</script>

<template>
  <section class="time-running">
    <h1>{{ titleText }}</h1>
    <div class="timer-wrapper">
      <BaseTimer v-if="!appStore.hasFinished" />
      <span v-else>FINISHED</span>
    </div>
    <div class="music-wrapper">
      <!-- <span>Listening - Bioneuronal song</span> -->
    </div>
  </section>
</template>

<stype scoped lang="scss">
.time-running {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;

  .timer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
}
</stype>
