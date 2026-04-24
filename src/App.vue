<script setup lang="ts">
import { ref } from "vue";
import Head from "./components/Head.vue";
import Home from "./views/Home.vue";
const Title = ref("");
const name = ref("username");

Title.value = "Hello, " + name.value;
</script>

<template>
    <main>
        <Head />
        <Home />
    </main>
</template>

<style scoped>
</style>