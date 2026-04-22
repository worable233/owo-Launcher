<script setup lang="ts">
import { ref } from "vue";

const Title = ref("");
const name = ref("username");

Title.value = "Hello, " + name.value;
</script>

<template>
  <main>
    <div class="title">
      <h1>OWO LAUNCHER</h1>
    </div>
    <div class="container">
    <img src="./assets/vue.svg" alt="OWO LAUNCHER" class="avatar high-light">
    <p>{{ name }}</p>
    <p>点击下方按钮开始使用</p>

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
  /* 纯白基底 */
  background-color: var(--bg);
  /* 每个重复单元 32px x 32px，中心放置一个半径为2px的柔灰圆点 */
  background-image: radial-gradient(circle at 50% 50%, #c9c9c9 2px, transparent 2px);
  background-size: 30px 30px;

  min-height: 100vh;
  
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  color: var(--normal);
  padding: 2rem 1rem;
}
.container {
  display: flex;
  height: 70vh;  
}
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
.title h1{
  margin: 0;
  font-size: var(--font-size-3);
}

@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}

</style>