<script setup>
const color = useColorMode();
const colors = ['system', 'light', 'dark', 'sepia'];
function test(c) {
  console.log('test', c);
  color.value = c;
}
watch(color, (newColor, oldColor) => {
  console.log(newColor, oldColor);
});
</script>
<template>
  <div class="w-full relative bg-red-500 dark:bg-blue-800">
    <li v-for="color of colors" :key="color" @click="test(color)">
      {{ color }}
    </li>

    <ActionToggles />
    <AnimatedLink />
    <ProjectGrid />
  </div>
</template>
