<template>
  <div class="spin-overlay">
    <div class="spin-pokemon"></div>
  </div>

</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.spin {
  &-overlay {
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.93);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
  }

  &-pokemon {
    position: absolute;
    height: 60px;
    width: 60px;
    background: linear-gradient(to bottom, rgb(254, 0, 1) 50%, white 50%);
    border-radius: 50%;
    border: 4px solid black;
    animation: spin 1s linear infinite;

    &:before {
      content: '';
      position: absolute;
      height: 4px;
      width: 55px;
      background: black;
      top: 50%;
      transform: translateY(-50%);
    }

    &::after {
      content: '';
      position: absolute;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: white;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: inset 0 0 0 8px black, inset 0 0 0 10px white, inset 0 0 0 12px black;
    }
  }
}

/* Spin Animation */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
