<script setup lang="ts">
import BaseInput from "../input/BaseInput.vue";
import BaseButton from "../button/BaseButton.vue";
import { useAppStore } from "@/pinia/appStore";
import { ref } from "vue";
import { ActiveStep } from "@/pinia/types";

const appStore = useAppStore();

const focusTime = ref(0);
const restTime = ref(0);
const errorText = ref("");

const onClick = () => {
  if (focusTime.value && restTime.value) {
    if (restTime.value > focusTime.value) {
      errorText.value = "Rest time must be less than focus time.";
    } else {
      appStore.setTimeValues(Number(focusTime.value), Number(restTime.value));
      appStore.changeActiveStep(ActiveStep.TimeRunning);
      errorText.value = "";
    }
  } else {
    errorText.value = "Focus and rest time must be set before starting.";
  }
};

const increaseFocusTime = () => focusTime.value++;
const decreaseFocusTime = () => {
  if (focusTime.value === 0) return;

  focusTime.value--;
};

const increaseRestTime = () => restTime.value++;
const decreaseRestTime = () => {
  if (restTime.value === 0) return;

  restTime.value--;
};

const onFocusTimeChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  if (value) {
    const number = Number(value);

    if (number <= 60) {
      focusTime.value = number;
      errorText.value = "";
    } else {
      errorText.value = "Focus time must be less than 60.";
    }
  }
};

const onRestTimeChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  if (value) {
    const number = Number(value);

    if (number <= 15) {
      restTime.value = number;
      errorText.value = "";
    } else {
      errorText.value = "Rest time must be less than 15.";
    }
  }
};
</script>

<template>
  <section class="time-config">
    <h1>Before starting, please set your focus and rest time.</h1>
    <div class="time-values">
      <div class="time-column">
        <label class="time-label" for="focus-time">Focus time</label>
        <BaseButton size="round" type="secondary" @click="increaseFocusTime">
          <template #icon>
            <font-awesome-icon icon="fa-solid fa-chevron-up" />
          </template>
        </BaseButton>
        <div class="input-wrapper">
          <BaseInput
            type="number"
            size="square-big"
            v-model="focusTime"
            :max-length="2"
            :min="20"
            :max="60"
            @input="onFocusTimeChange"
            placeholder="0"
          />
          <span class="time-unit">minutes</span>
        </div>
        <BaseButton size="round" type="secondary" @click="decreaseFocusTime">
          <template #icon>
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </template>
        </BaseButton>
      </div>
      <div class="time-column">
        <label class="time-label" for="focus-time">Rest time</label>
        <BaseButton size="round" type="secondary" @click="increaseRestTime">
          <template #icon>
            <font-awesome-icon icon="fa-solid fa-chevron-up" />
          </template>
        </BaseButton>
        <div class="input-wrapper">
          <BaseInput
            type="number"
            size="square-big"
            v-model="restTime"
            :max-length="2"
            :min="5"
            :max="15"
            placeholder="0"
            @input="onRestTimeChange"
          />
          <span class="time-unit">minutes</span>
        </div>
        <BaseButton size="round" type="secondary" @click="decreaseRestTime">
          <template #icon>
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </template>
        </BaseButton>
      </div>
    </div>
    <div class="error-wrapper">
      <span class="" v-if="errorText">{{ errorText }}</span>
    </div>
    <BaseButton type="primary" @click="onClick">
      <template #text>Start</template>
    </BaseButton>
  </section>
</template>

<style scoped lang="scss">
@import "../../assets/colors.scss";
@import "../../assets/variables.scss";
.time-config {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  h1 {
    text-align: center;
  }
  .time-values {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 3rem;

    @media (min-width: $tablet) {
      gap: 6rem;
    }

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
