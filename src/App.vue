<script setup lang="ts">
import TimeConfiguration from "./components/time-config/TimeConfiguration.vue";
import TimeRunning from "./components/time-running/TimeRunning.vue";
import { useAppStore } from "./pinia/appStore";
import { ActiveStep } from "@/pinia/types";

const appStore = useAppStore();
</script>

<template>
  <main>
    <TimeConfiguration v-if="appStore.activeStep === ActiveStep.TimeConfig" />
    <TimeRunning v-if="appStore.activeStep === ActiveStep.TimeRunning" />
  </main>
</template>

<style scoped></style>
