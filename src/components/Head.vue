<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window';

// 获取当前窗口实例
const appWindow = getCurrentWindow();

// 窗口控制方法
const minimizeWindow = () => appWindow.minimize();
const toggleMaximize = () => appWindow.toggleMaximize();
const closeWindow = () => appWindow.close();

// 5⃣️ 防止拖拽区域内的按钮被当作拖拽区域，导致按钮点击失效
const handleButtonMouseDown = (e: MouseEvent) => {
  e.stopPropagation();
};
</script>

<template>
    <div class="head" data-tauri-drag-region>
        <div class="titlebar-left">
            <p>owo-Launcher</p>
        </div>
        <div class="titlebar-center"></div>
        <!-- titlebar -->
        <div class="titlebar-right">
        <button @click="minimizeWindow" class="titlebar-button" id="minimize">&#xE921;</button>
        <button @click="toggleMaximize" class="titlebar-button" id="maximize">&#xE922;</button>
        <button @click="closeWindow" class="titlebar-button titlebar-button-close" id="close">&#xE8BB;</button>
    </div>
    </div>
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
</style>