<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})
</script>

<template>
  <div v-if="page">
    <ULandingHero :title="page.hero.title" :description="page.hero.description">
      <template #title>
        Welcome to <span class="text-primary block lg:inline-block">Bonzai-World</span> a company management app.
      </template>
    </ULandingHero>

    <ULandingSection title="Set up your war roster, manage members" align="left" />

    <ULandingSection title="View vods and stats, all in one place" align="right" />

    <ULandingSection class="!pt-0">
      <Placeholder />
    </ULandingSection>

    <ULandingSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :align="section.align"
      :features="section.features"
    >
      <Placeholder />
    </ULandingSection>
  </div>
</template>
