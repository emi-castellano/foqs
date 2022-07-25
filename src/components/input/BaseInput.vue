<script setup lang="ts">
import { computed } from "vue";
import type { InputSize } from "./types";

type Props = {
  modelValue: string | number | null;
  min: number | null;
  max: number | null;
  disabled: boolean;
  size: InputSize;
};

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<Props>(), {
  value: "",
  min: null,
  max: null,
  disabled: false,
});

const sizeClass = computed(() => `base-input--${props.size}`);
</script>
<template>
  <input
    type="text"
    placeholder="Type anything"
    :value="props.modelValue"
    :class="['base-input', sizeClass]"
    @input="(event) => emit('update:modelValue', (event.target as HTMLInputElement)?.value)"
  />
</template>
<style scoped lang="scss">
@import "../../assets/colors.scss";
.base-input {
  width: 150px;
  height: 60px;
  border: none;
  border-radius: 0.5rem;
  padding: 0 1rem;
  box-shadow: $innerShadow;
  background: none;
  font-family: inherit;
  color: $greyDark;

  &::placeholder {
    color: $greyLight3;
  }

  &:focus {
    outline: none;
    box-shadow: $shadow;
  }

  &--square-big {
    width: 150px;
    height: 150px;
    font-size: 6rem;
  }
}
</style>
