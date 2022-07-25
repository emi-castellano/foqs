<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "../input/BaseInput.vue";
const focusTime = ref(null);
const restTime = ref(null);
</script>

<template>
  <section class="time-config">
    <h1>
      <strong>Before starting</strong>, please set your focus and rest time.
    </h1>
    <div class="time-values">
      <div class="time-column">
        <BaseButton size="round" icon="fa-solid fa-chevron-up" />
        <label for="focus-time">Focus time</label>
        <BaseInput
          size="square-big"
          v-model="focusTime"
          :min="2"
          :max="2"
          placeholder="00"
        />
        <BaseButton size="round" />
      </div>
      <div class="time-column">
        <label for="focus-time">Rest time</label>
        <BaseInput
          size="square-big"
          v-model="restTime"
          :min="2"
          :max="2"
          placeholder="00"
        />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.time-config {
  .time-values {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 2rem;
    .time-column {
      display: flex;
      text-align: center;
      flex-direction: column;
    }
  }
}
</style>
