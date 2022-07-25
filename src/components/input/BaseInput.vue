<script setup lang="ts">
import { computed } from "vue";
import type { InputSize, InputType } from "./types";

type Props = {
  modelValue: string | number | null;
  min?: number;
  max?: number;
  maxLength: number | undefined;
  disabled: boolean;
  size: InputSize;
  type: InputType;
};

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<Props>(), {
  value: "",
  maxLength: undefined,
  disabled: false,
});

const sizeClass = computed(() => `base-input--${props.size}`);
const typeClass = computed(() => `base-input--${props.type}`);
</script>

<template>
  <input
    :type="props.type"
    :inputmode="props.type === 'number' ? 'numeric' : 'text'"
    placeholder="Type anything"
    :value="props.modelValue"
    :class="['base-input', sizeClass, typeClass]"
    :min="props.min"
    :max="props.max"
    :maxlength="props.maxLength"
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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &--square-big {
    text-align: center;
    width: 160px;
    height: 160px;
    font-size: 6rem;
  }
}
</style>
