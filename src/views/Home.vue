<script setup lang="ts">
import { ref } from "vue";

const player = ref([
  {
    name: "Steve",
    avatar: "../assets/Steve.png",
  },
]);
</script>

<template>
  <main>
    <div class="container">
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
    <div class="bottom-nav">
      <div class="nav-item" v-for="item in player" :key="item.name">
      <img :src="item.avatar" :alt="item.name" class="avatar high-light">
      <p>{{ item.name }}</p>  
      </div>
    </div>
  </main>

  <svg style="position: absolute; width: 0; height: 0; pointer-events: none;">
  <defs>
    <filter id="text-sticker-stroke" x="-20%" y="-20%" width="140%" height="140%">
      <!-- 1. 提取文字 Alpha 通道，向外扩张 2px 作为描边基底 -->
      <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="expanded" />
      
      <!-- 2. 给扩张的基底填充白色 -->
      <feFlood flood-color="white" flood-opacity="1" result="whiteColor" />
      <feComposite in="whiteColor" in2="expanded" operator="in" result="whiteStroke" />
      
      <!-- 3. 将原始文字叠加在白色描边之上 -->
      <feMerge>
        <feMergeNode in="whiteStroke" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
</svg>

</template>

<style scoped>

main {
  min-height: 100vh;           /* 撑满视口高度 */
  background-color: var(--bg);
  background-image: radial-gradient(circle at 50% 50%, #c9c9c9 2px, transparent 2px);
  background-size: 30px 30px;
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  color: var(--normal);
  box-sizing: border-box;      /* 让 padding 计入高度，避免溢出 */
}

/* 内容容器 */
.container {
  
  display: flex;
  height: 70vh;  
}
/* 按钮容器 */
.button-container {
  margin-top: 2rem;
  width: 45%;
  display: flex;
  justify-content: flex-end; /* 水平靠右 */
  flex-direction: column;
  gap: 5px;
}
.w-100 {
  width: 100%;
}
.button-row {
  display: flex;
  flex-direction: row;
  gap: 5px; 
  padding: 0;
}
/* 底部菜单 */
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.bottom-nav p {
  color: var(--normal-text);
  text-align: center;
}
.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;  /* 图标在上，文字在下 */
  align-items: center;
  text-decoration: none;
  color: #8e8e93;          /* 未激活颜色 */
  font-size: 12px;
  transition: color 0.2s ease;
}
.title h1{
  margin: 0;
  font-size: var(--font-size-3);
}

@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}

</style>