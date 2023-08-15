<script setup lang="ts">
import TimeConfiguration from "./components/time-config/TimeConfiguration.vue";
import TimeRunning from "./components/time-running/TimeRunning.vue";
import { useAppStore } from "./pinia/appStore";
import { ActiveStep } from "@/pinia/types";

const appStore = useAppStore();
</script>

<template>
  <main class="main-content">
    <TimeConfiguration v-if="appStore.activeStep === ActiveStep.TimeConfig" />
    <TimeRunning v-if="appStore.activeStep === ActiveStep.TimeRunning" />
  </main>
  <footer>
    <span>Made with ❤️ by Emi</span>
    <span
      >Credits to
      <a href="https://codepen.io/myacode" target="_blank">Maria Marin</a> for
      the
      <a href="https://codepen.io/myacode/pen/PoqQQNM" target="_blank"
        >Neumorphic Elements</a
      ></span
    >
  </footer>
</template>

<style scoped lang="scss">
@import "./assets/variables.scss";

.main-content {
  padding: 0 1.5rem;
  position: relative;

  @media (min-width: $tablet) {
    padding: 0;
  }
}

footer {
  position: absolute;
  bottom: 20px;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
