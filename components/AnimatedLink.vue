<script setup lang="ts">
import { TimelineSegment } from "@motionone/dom/types/timeline/types";
import { timeline, animate, stagger } from "motion";
import SplitType from "split-type";
const link = ref(null);
let splitText: SplitType;
onMounted(() => {
  if (!link.value) return;
  splitText = new SplitType(link.value, { types: "chars" });
});

function animateHover() {
  const sequence: TimelineSegment[] = [];
  if (!splitText.chars) return;
  sequence.push(
    [
      splitText.chars,
      { transform: "translate(0, 100%)" },
      { duration: 0.25, delay: stagger(0.05) },
    ],
    [
      splitText.chars,
      { transform: "translate(0, -100%)" },
      { duration: 0.0000000001 },
    ],
    [
      splitText.chars,
      { transform: "translate(0, 0)" },
      { duration: 0.25, delay: stagger(0.05) },
    ]
  );
  timeline(sequence);
}

function animateExit() {
  const sequence: TimelineSegment[] = [];
  if (!splitText.chars) return;
  sequence.push(
    [
      splitText.chars,
      { transform: "translate(0, -100%)" },
      { duration: 0.25, delay: stagger(0.05) },
    ],
    [
      splitText.chars,
      { transform: "translate(0, 100%)" },
      { duration: 0.0000000001 },
    ],
    [
      splitText.chars,
      { transform: "translate(0, 0)" },
      { duration: 0.25, delay: stagger(0.05) },
    ]
  );
  timeline(sequence);
}
</script>
<template>
  <a
    ref="link"
    class="inline-block relative overflow-hidden focus:outline-solid-black w-auto dark:text-white"
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
