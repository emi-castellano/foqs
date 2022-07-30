<script setup lang="ts">
import BaseInput from "../input/BaseInput.vue";
import BaseButton from "../button/BaseButton.vue";
import { useAppStore } from "@/pinia/appStore";
import { ref } from "vue";

const appStore = useAppStore();

const focusTime = ref(null);
const restTime = ref(null);
const showError = ref(false);

const onClick = () => {
  if (focusTime.value && restTime.value) {
    appStore.setTimeValues(Number(focusTime.value), Number(restTime.value));
    appStore.changeActiveStep("time-running");
  } else {
    showError.value = true;
  }
};
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
        <div class="input-wrapper">
          <BaseInput
            type="number"
            size="square-big"
            v-model="focusTime"
            :max-length="2"
            :min="20"
            :max="60"
            placeholder="00"
          />
          <span class="time-unit">minutes</span>
        </div>
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
        <div class="input-wrapper">
          <BaseInput
            type="number"
            size="square-big"
            v-model="restTime"
            :max-length="2"
            :min="5"
            :max="15"
            placeholder="00"
          />
          <span class="time-unit">minutes</span>
        </div>
        <BaseButton
          size="round"
          icon="fa-solid fa-chevron-down"
          type="secondary"
        />
      </div>
    </div>
    <div class="error-wrapper">
      <span class="" v-if="showError"
        >Focus and rest time values must be set before starting.</span
      >
    </div>
    <BaseButton text="Start" type="primary" @click="onClick" />
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
      gap: 1.6rem;

      .input-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        .time-unit {
          margin-top: 10px;
          font-size: 0.8rem;
        }
      }
      .time-label {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
  }

  .error-wrapper {
    min-height: 1.5rem;

    span {
      color: red;
    }
  }
}
</style>
