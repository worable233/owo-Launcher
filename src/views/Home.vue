<script setup lang="ts">
import { ref } from "vue";
import SteveAvatar from "../assets/Steve.png";
const player = ref([
  {
    name: "Steve",
    avatar: SteveAvatar,
  },{
    name: "Steve",
    avatar: SteveAvatar,
  }
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
      <!-- 玩家添加 -->
       <div class="nav-container">
       <div class="nav-item add-player">
        <p style="margin: 0;">
          +
        </p>
       </div>
       </div>
      <!-- 玩家选择 -->
      <div class="nav-container" v-for="item in player" :key="item.name">
        <div class="nav-item">
      <img :src="item.avatar" :alt="item.name" class="avatar">
      <p>{{ item.name }}</p>  
        </div>
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
  justify-content: flex-end; /* 水平靠右 */
  align-items: flex-end; /* 垂直靠下 */
  height: 88vh;
  width: 100%;
  padding: 0.5rem;
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
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
}
.nav-container {
  background-color: var(--normal);
  border-radius: var(--border-radius);
  padding: 2px;
}
.nav-item {
  background-color: var(--bg);
  border-radius: var(--border-radius);
  border: 2px solid var(--normal);
  padding: 2px;
  display: flex;
  flex-direction: row;  /* 图标在左，文字在右 */
  align-items: center;
  text-decoration: none;
  color: var(--normal-text);
  font-size: var(--font-size-4);
  transition: transform var(--duration) var(--eout-back), box-shadow var(--duration) var(--eout-back);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  transform: translateY(0) scale(1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left var(--duration) var(--eout-back);
}
.nav-item p {
  color: var(--normal-text);
  text-align: center;
  text-shadow: 0 0px 6px rgba(0, 0, 0, 0.5);
  margin: 4px 6px;
  transition: transform var(--duration) var(--eout-back);
}
.nav-item:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
}
.nav-item:hover::before {
  left: 100%;
}
.nav-item:hover p {
  transform: scale(1.1);
}
.nav-item:active {
  /* 点击时缩放 */
  transform: scale(0.98);
  /* 点击时上移 */
  transform: translateY(-2px);
  transition: transform 0.1s ease;
}
.nav-item .avatar {
  /* 图标过渡 */
  transition: transform var(--animation-time) var(--easy), border-color var(--animation-time) var(--easy);
}
.nav-item:hover .avatar {
  /* 图标旋转 */
   transform: rotate(5deg) scale(1.1);
  /* 边框颜色 */
  border-color: var(--primary);
}
.add-player {
  padding: 7px 11px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar {
  border-radius: var(--border-radius);
  border: 2px solid var(--normal);
  width: 30px;
  height: 30px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}
.title h1{
  margin: 0;
  font-size: var(--font-size-3);
}

@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}

</style>