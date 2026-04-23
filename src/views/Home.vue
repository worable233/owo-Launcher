<script setup lang="ts">
import { ref } from "vue";
import SteveAvatar from "../assets/Steve.png";
const player = ref([
  {
    name: "Steve111111111111",
    avatar: SteveAvatar,
  },{
    name: "Steve",
    avatar: SteveAvatar,
  }
]);
</script>

<template>
    <div class="body">
      <!-- 按钮容器 -->
      <div class="button-container">
        <a href="#" class="button high-light w-100">
          <span>
            启动
          </span>
          <p>
            Minecraft
          </p>
        </a>
        <div class="button-row">
        <a href="#" class="button w-100">
          <span>
            版本选择
          </span>
        </a>
        <a href="#" class="button w-100">
          <span>
            版本设置
          </span>
        </a>
        </div>
      </div>
    </div>
    <!-- 底部菜单 -->
    <div class="bottom">
      <!-- 玩家添加 -->
       <div class="bottom-nav">
        <div class="bottom-nav-item bottom-nav-add-player">
        <p class="m-0">
          +
        </p>
       </div>
       </div>
      <!-- 玩家选择 -->
      <div class="bottom-nav" v-for="item in player" :key="item.name">
        <div class="bottom-nav-item">
      <img :src="item.avatar" :alt="item.name" class="bottom-nav-item-avatar">
      <p>{{ item.name }}</p>  
        </div>
      </div>
    </div>

</template>

<style scoped>



@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}

</style>