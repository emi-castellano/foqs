<script setup lang="ts">
import { computed } from "vue";
import type { ButtonSize, ButtonType } from "./types";

type Props = {
  text: string;
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  icon?: string;
};

const props = withDefaults(defineProps<Props>(), {
  text: "",
  type: "primary",
  size: "large",
  disabled: false,
  icon: "",
});

const typeClass = computed(() => `btn--${props.type}`);
const sizeClass = computed(() => `btn--${props.size}`);
</script>

<template>
  <button :class="['btn', typeClass, sizeClass]">
    <span class="btn-text">{{ text }}</span>
    <font-awesome-icon v-if="icon" :icon="props.icon" />
  </button>
</template>

<style scoped lang="scss">
@import "../../assets/colors.scss";
.btn {
  width: 15rem;
  height: 4rem;
  border-radius: 0.5rem;
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

  .btn-text {
    font-size: 1.6rem;
  }

  &--large {
    font-size: 1rem;
    width: 10rem;
    height: 3.5rem;
  }

  &--small {
    width: 7rem;
    height: 2.5rem;

    .btn-text {
      font-size: 1.2rem;
    }
  }

  &--round {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    .svg-inline--fa {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
}
</style>
