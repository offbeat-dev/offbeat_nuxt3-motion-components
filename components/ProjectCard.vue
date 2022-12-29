<script setup>
const props = defineProps({
  image: {
    type: Object,
    default(rawProps) {
      return {
        src: 'https://images.unsplash.com/photo-1670600642066-6f0c6ced009d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MTgyMzAyNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        alt: 'project alt',
      };
    },
  },
  title: {
    type: String,
    default: 'Default Project Title',
  },
});
</script>
<template>
  <div
    class="
      relative
      p-4
      rounded-lg
      shadow-lg
      bg-gray-500
      text-white
      relative
      w-auto
      aspect-video
      overflow-hidden
      cursor-pointer
    "
  >
    <h3 class="text-white absolute z-1">{{ title }}</h3>
    <img
      alt="Lomepal - Tee - Raphaël Bourdin"
      class="
        w-full
        h-full
        absolute
        inset-0
        object-cover
        hover:scale-110
        transform
        duration-500
        aspect-video
      "
      :src="image.src"
    />
  </div>
</template>
