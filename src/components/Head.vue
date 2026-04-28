<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { getCurrentWindow } from '@tauri-apps/api/window';

// 获取当前窗口实例
const appWindow = getCurrentWindow();

// 窗口控制方法
const minimizeWindow = () => appWindow.minimize();
const toggleMaximize = () => appWindow.toggleMaximize();
const closeWindow = () => appWindow.close();

// 深浅色模式
const currentTheme = ref('light')

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') {
    currentTheme.value = savedTheme
  } else {
    currentTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
  applyTheme(currentTheme.value)
})

function toggleTheme() {
  currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
  applyTheme(currentTheme.value)
  localStorage.setItem('theme', currentTheme.value)
}

function applyTheme(theme: string) {
  document.documentElement.setAttribute('data-theme', theme)
  document.body.setAttribute('data-theme', theme)
  document.documentElement.style.colorScheme = theme
}
</script>

<template>
    <div class="head" data-tauri-drag-region>
        <div class="titlebar-left">
            <p>owo-Launcher</p>
        </div>
        <div class="titlebar-center"><a
            id="theme-toggle"
            class=""
            @click="toggleTheme"
            :aria-label="currentTheme === 'dark' ? '切换到浅色模式' : '切换到深色模式'"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="icon-light"
              :style="{ display: currentTheme === 'dark' ? 'none' : 'block' }"
              role="img"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="icon-dark"
              :style="{ display: currentTheme === 'dark' ? 'block' : 'none' }"
              role="img"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </a></div>
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