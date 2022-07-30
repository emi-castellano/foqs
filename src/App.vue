<script setup lang="ts">
import TimeConfiguration from "./components/time-config/TimeConfiguration.vue";
import TimeRunning from "./components/time-running/TimeRunning.vue";
import { useAppStore } from "./pinia/appStore";

const appStore = useAppStore();
</script>

<template>
  <main>
    <TimeConfiguration v-if="appStore.activeStep === 'time-config'" />
    <TimeRunning v-if="appStore.activeStep === 'time-running'" />
  </main>
</template>

<style scoped></style>
