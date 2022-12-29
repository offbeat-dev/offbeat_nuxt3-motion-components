<script setup>
const loading = ref(true);
onMounted(() => {
  console.log("mounted");
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
useHead({
  title: "My Nuxt Blah",
  bodyAttrs: {
    class: "dark:bg-black transition duration-1000",
  },
});
</script>
<template>
  <div
    class="w-full relative opacity-0 transition duration-1000"
    :class="{ 'opacity-100': !loading }"
  >
    <Header />
    <ProjectGrid />
  </div>
</template>
