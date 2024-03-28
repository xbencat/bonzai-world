<script setup lang="ts">

</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © 2024-{{ new Date().getFullYear() }} xbencat - <NuxtLink class="hover:underline" to="https://github.com/xbencat/bonzai-world/blob/main/LICENSE" target="_blank">
          MIT License
        </NuxtLink>
      </p>
    </template>

    <template #right>
      <UButton to="https://x.com/nuxt_js" target="_blank" icon="i-simple-icons-x" color="gray" variant="ghost" />
      <UButton to="https://discord.com/invite/ps2h6QT" target="_blank" icon="i-simple-icons-discord" color="gray" variant="ghost" />
      <UButton to="https://github.com/nuxt/nuxt" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>
  </UFooter>
</template>

<style scoped>

</style>
