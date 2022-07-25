<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "../input/BaseInput.vue";
import BaseButton from "../button/BaseButton.vue";

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
        <label class="time-label" for="focus-time">Focus time</label>
        <BaseButton
          size="round"
          icon="fa-solid fa-chevron-up"
          type="secondary"
        />
        <BaseInput
          type="number"
          size="square-big"
          v-model="focusTime"
          :min="2"
          :max="2"
          placeholder="00"
        />
        <BaseButton
          size="round"
          icon="fa-solid fa-chevron-down"
          type="secondary"
        />
      </div>
      <div class="time-column">
        <label class="time-label" for="focus-time">Rest time</label>
        <BaseButton
          size="round"
          icon="fa-solid fa-chevron-up"
          type="secondary"
        />
        <BaseInput
          type="number"
          size="square-big"
          v-model="restTime"
          :min="2"
          :max="2"
          placeholder="00"
        />
        <BaseButton
          size="round"
          icon="fa-solid fa-chevron-down"
          type="secondary"
        />
      </div>
    </div>
    <BaseButton text="Start" type="primary" />
  </section>
</template>
<style scoped lang="scss">
@import "../../assets/colors.scss";
.time-config {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  .time-values {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 6rem;
    .time-column {
      display: flex;
      align-items: center;
      text-align: center;
      flex-direction: column;
      gap: 2rem;

      .time-label {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
  }
}
</style>
