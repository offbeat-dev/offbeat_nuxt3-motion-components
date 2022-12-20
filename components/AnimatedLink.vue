<script setup lang="ts">
import { animate, stagger } from 'motion';
import SplitType from 'split-type';
const link = ref(null);
let splitText;

onMounted(() => {
  splitText = new SplitType(link.value, { types: 'chars' });
});

function animateHover() {
  animate(
    splitText.chars,
    { y: '10px' },
    { duration: 1, delay: stagger(0.05) }
  );
}

function animateExit() {
  animate(splitText.chars, { y: 0 }, { duration: 1, delay: stagger(0.05) });
}
</script>
<template>
  <a
    ref="link"
    class="link"
    @mouseover="
      {
        animateHover();
      }
    "
    @mouseleave="
      {
        animateExit();
      }
    "
    href="/"
    >Link</a
  >
</template>
<style>
.link:focus {
  outline: 2px solid #000;
}
</style>
