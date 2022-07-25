<script setup lang="ts">
import { computed } from "vue";
import type { ButtonSize, ButtonType } from "./types";

type Props = {
  text: string;
  type: ButtonType;
  size: ButtonSize;
  disabled: boolean;
  isLoading: boolean;
  icon: string;
};

const props = withDefaults(defineProps<Props>(), {
  text: "",
  type: "primary",
  size: "large",
  disabled: false,
  isLoading: false,
  icon: "",
});

const typeClass = computed(() => `btn--${props.type}`);
</script>

<template>
  <button :class="['btn', typeClass]">
    <span>{{ text }}</span>
    <font-awesome-icon v-if="icon" :icon="props.icon" />
  </button>
</template>

<style scoped lang="scss">
@import "../../assets/colors.scss";
.btn {
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  box-shadow: $shadow;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
  border: none;

  &--primary {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    background: $primary;
    box-shadow: inset 0.2rem 0.2rem 1rem $primaryLight,
      inset -0.2rem -0.2rem 1rem $primaryDark, $shadow;
    color: $greyLight;

    &:hover {
      color: $white;
    }
    &:active {
      box-shadow: inset 0.2rem 0.2rem 1rem $primaryDark,
        inset -0.2rem -0.2rem 1rem $primaryLight;
    }
  }

  &--secondary {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
    color: $greyDark;
    background-color: $greyLight;

    &:hover {
      color: $primary;
    }
    &:active {
      box-shadow: $innerShadow;
    }
  }

  span {
    font-size: 1.6rem;
  }
}
</style>