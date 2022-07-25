<script setup lang="ts">
import { ref } from "vue";
import TimeConfiguration from "./components/time-config/TimeConfiguration.vue";
import TimeRunning from "./components/time-running/TimeRunning.vue";

type ActiveStep = "time-config" | "time-running" | "time-finished";

const activeStep = ref<ActiveStep>("time-running");
</script>

<template>
  <main>
    <TimeConfiguration v-if="activeStep === 'time-config'" />
    <TimeRunning v-if="activeStep === 'time-running'" />
  </main>
</template>

<style scoped></style>
