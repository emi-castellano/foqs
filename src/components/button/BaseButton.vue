<script setup lang="ts">
import { computed } from "vue";
import type { ButtonSize, ButtonType } from "./types";

type Props = {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
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
  <button
    :class="['btn', typeClass, sizeClass]"
    :data-type="type"
    :data-size="size"
  >
    <slot name="text"></slot>
    <slot name="icon"></slot>
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
  font-size: 1.3rem;

  &[data-type="primary"] {
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

  &[data-type="secondary"] {
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

  &[data-size="large"] {
    font-size: 1.3rem;
    width: 10rem;
    height: 3.5rem;
  }

  &[data-size="small"] {
    width: 7rem;
    height: 2.5rem;
    font-size: 1.2rem;
  }

  &[data-size="round"] {
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
