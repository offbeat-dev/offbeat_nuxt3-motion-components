<script setup>
const props = defineProps({
  projects: {
    type: Array,
    default(rawProps) {
      return [
        {
          src: 'https://images.unsplash.com/photo-1670600642066-6f0c6ced009d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MTgyMzAyNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
          alt: 'project alt',
          title: 'Project 1',
        },
        {
          src: 'https://images.unsplash.com/photo-1670600642066-6f0c6ced009d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MTgyMzAyNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
          alt: 'project alt',
          title: 'Project 2',
        },
        {
          src: 'https://images.unsplash.com/photo-1670600642066-6f0c6ced009d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MTgyMzAyNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
          alt: 'project alt',
          title: 'Project 3',
        },
      ];
    },
  },
});
</script>
<template>
  <div>
    <ul class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 flex flex-col">
      <li v-for="project in projects">
        <ProjectCard :title="project.title" />
      </li>
    </ul>
  </div>
</template>
