<template>
  <div class="base-timer">
    <div class="time-info">
      <span class="time-left">00:00</span>
      <span class="time-status">All ready!</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/colors.scss";
.base-timer {
  border-radius: 50%;
  width: 450px;
  height: 450px;
  box-shadow: $shadow;
  display: flex;
  justify-content: center;
  align-items: center;

  .time-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .time-left {
      font-size: 7rem;
    }

    .time-status {
      font-size: 1.5rem;
    }
  }
}
</style>
