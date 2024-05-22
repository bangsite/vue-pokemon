<template>
  <div class="progress">
    <div class="progress-bar" :style="{width: `calc(${calculatePercentage(data,max)}% - 4px)`}">

    </div>
    <span class="progress-number">
         {{ data }}
      </span>
  </div>
</template>

<script setup lang="ts">

defineProps({
  data: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 0,
  }
});

const calculatePercentage = (value: number, max: number) => {
  return (value / max) * 100;
}
</script>

<style scoped lang="scss">
.progress {
  position: relative;
  height: 20px;
  width: 100%;
  border: 2px solid #f4a261;
  border-radius: 10px;

  &-bar {
    background: linear-gradient(to right, #f4a261, #e76f51);
    border-radius: 8px;
    position: absolute;
    width: 0;
    height: 15px;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
  }

  &-number {
    font-weight: bold;
    font-size: 13px;
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
