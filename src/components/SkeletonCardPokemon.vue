<template>
  <div class="card">
    <div class="card-list">
      <div class="card-item skeleton" v-for="i in 10" :key="i">
        <div class="skeleton-image"></div>
        <div class="skeleton-content">
          <p class="skeleton-tag"></p>
          <h4 class="skeleton-title"></h4>
          <span class="skeleton-text"></span>
        </div>
        <button class="btn btn-detail skeleton-button"></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.card {
  padding: 2rem 0;
}

.skeleton {
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: shimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  position: relative;

  &-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  &-image {
    width: 100%;
    height: 110px;
    border-radius: 6px;
    background-color: #bdbdbd;
  }

  &-title {
    width: 40%;
    height: 20px;
    border-radius: 6px;
    background-color: #bdbdbd;
  }

  &-tag {
    width: 80%;
    height: 20px;
    border-radius: 6px;
    background-color: #bdbdbd;

  }

  &-text {
    width: 80%;
    height: 20px;
    border-radius: 6px;
    background-color: #bdbdbd;
  }

  &-button {
    width: 100%;
    height: 40px;
    background-color: #bdbdbd;
  }
}

@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
