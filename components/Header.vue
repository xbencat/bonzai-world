<script setup lang="ts">
const links = [{
  label: 'Docs',
  icon: 'i-heroicons-book-open',
  to: '/docs',
}, {
  label: 'Roadmap',
  icon: 'i-heroicons-map',
  to: '/roadmap',
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://github.com/xbencat/bonzai-world/releases',
  target: '_blank',
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-8" />
    </template>

    <template #right>
      <UColorModeButton />
      <UButton icon="i-simple-icons-github" to="https://github.com/xbencat/bonzai-world" target="_blank" color="gray" variant="ghost" />
      <UButton label="Sign in" color="gray" to="/login" />
      <UButton label="Sign up" icon="i-heroicons-arrow-right-20-solid" trailing color="black" to="/signup" class="hidden lg:flex" />
    </template>
  </UHeader>
</template>

<style scoped>

</style>
