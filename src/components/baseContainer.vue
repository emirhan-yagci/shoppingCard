<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  isStories: {
    default: false,
  },
});
</script>

<template>
  <section class="w-full">
    <div class="w-4/5 mx-auto" :class="{ 'bg-black': isStories }">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped></style>
