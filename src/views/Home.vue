<script setup lang="ts">
import Lenis from 'lenis';
import { onMounted, onUnmounted, ref } from "vue";
import SteveAvatar from "../assets/Steve.png";
const player = ref([
  {
    name: "Steve111111111111",
    avatar: SteveAvatar,
  },{
    name: "Steve",
    avatar: SteveAvatar,
  },{
    name: "Steve",
    avatar: SteveAvatar,
  },{
    name: "Steve",
    avatar: SteveAvatar,
  },{
    name: "Steve",
    avatar: SteveAvatar,
  },{
    name: "Steve",
    avatar: SteveAvatar,
  },{
    name: "Steve",
    avatar: SteveAvatar,
  }
]);
const version = ref("1.20.2");
// 横向滚动容器 ref
const scrollContainer = ref<HTMLElement | null>(null);
let lenis: Lenis | null = null;
let rafId: number | null = null;

onMounted(() => {
  setTimeout(() => {
    if (!scrollContainer.value) return;
    const content = scrollContainer.value.querySelector('.scroll-content') as HTMLElement;
    if (!content) return;
      lenis = new Lenis({
    wrapper: scrollContainer.value,   // 滚动视口容器
    content: content,                 // 实际滚动的内容
    orientation: 'horizontal',        // 横向滚动
    smoothWheel: true,                // 启用滚轮平滑
    gestureOrientation: 'vertical',   // 将垂直滚轮映射到水平滚动（重要！）
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
    function raf(time: number) { lenis?.raf(time); rafId = requestAnimationFrame(raf); }
    rafId = requestAnimationFrame(raf);
  }, 100);
});
</script>

<template>
    <div class="body">
      <div class="version-container">
        <p>版本号</p>
        <p class="version">{{ version }}</p>
      </div> 
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
      <div class="bottom-divider"></div>
      <!-- 玩家选择 -->
<div class="scroll-outer">
  <div ref="scrollContainer" class="bottom-nav scroll-wrapper">
    <div class="scroll-content">
      <div v-for="item in player" :key="item.name" class="bottom-nav-item">
        <img :src="item.avatar" :alt="item.name" class="bottom-nav-item-avatar" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<style scoped>

</style>