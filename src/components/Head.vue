<script setup lang="ts">
</script>

<template>
    <div class="head">
        <div class="title">
            <p>owo-Launcher</p>
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