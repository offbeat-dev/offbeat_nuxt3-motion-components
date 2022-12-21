<script setup lang="ts">
import { timeline, animate, stagger } from 'motion';
import SplitType from 'split-type';
const link = ref(null);
let splitText;

onMounted(() => {
  splitText = new SplitType(link.value, { types: 'chars' });
});

function animateHover() {
  const sequence = [];
  sequence.push(
    [
      splitText.chars,
      { transform: 'translate(0, 100%)' },
      { duration: 0.25, delay: stagger(0.05) },
    ],
    [
      splitText.chars,
      { transform: 'translate(0, -100%)' },
      { duration: 0.0000000001 },
    ],
    [
      splitText.chars,
      { transform: 'translate(0, 0)' },
      { duration: 0.25, delay: stagger(0.05) },
    ]
  );
  timeline(sequence);
}

function animateExit() {
  const sequence = [];
  sequence.push(
    [
      splitText.chars,
      { transform: 'translate(0, -100%)' },
      { duration: 0.25, delay: stagger(0.05) },
    ],
    [
      splitText.chars,
      { transform: 'translate(0, 100%)' },
      { duration: 0.0000000001 },
    ],
    [
      splitText.chars,
      { transform: 'translate(0, 0)' },
      { duration: 0.25, delay: stagger(0.05) },
    ]
  );
  timeline(sequence);
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
.link {
  display: block;
  position: relative;
  overflow: hidden;
}
</style>
