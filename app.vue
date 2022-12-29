<script setup>
const color = useColorMode();
const colors = ['light', 'dark'];
function test(c) {
  color.value = c;
}
</script>
<template>
  <div class="w-full relative bg-white dark:bg-black transition duration-500">
    <li
      v-for="color of colors"
      :key="color"
      @click="test(color)"
      class="dark:text-white"
    >
      {{ color }}
    </li>

    <ActionToggles />
    <AnimatedLink />
    <ProjectGrid />
  </div>
</template>
