<script setup lang="ts">
import BaseTimer from "../timer/BaseTimer.vue";
import PlayButton from "../play-button/PlayButton.vue";
</script>

<template>
  <section class="time-running">
    <h1>Are you ready to be <strong>productive</strong>?</h1>
    <div class="timer-wrapper">
      <!-- <BaseTimer /> -->
      <PlayButton />
    </div>
  </section>
</template>

<stype scoped lang="scss">
.time-running {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}
</stype>
