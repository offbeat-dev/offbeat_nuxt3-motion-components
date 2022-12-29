<script setup>
const color = useColorMode();
color.value = "dark";
function toggleColorMode() {
  color.value = color.value === "dark" ? "light" : "dark";
}
</script>
<template>
  <button @click="toggleColorMode">
    <Transition name="fade">
      <Icon
        class="dark:text-white"
        :name="$colorMode.value === 'dark' ? 'ri:moon-fill' : 'ri:sun-fill'"
      />
    </Transition>
  </button>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
