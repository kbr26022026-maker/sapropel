<template>
  <main>
    <HeroSection />
    <TrustSection />
    <FeaturesSection />
    <AboutSection />
    <ApplicationsSection />
    <VideosSection />
    <ArticleTeaserSection />
    <ResourcesSection />
    <ContactSection />
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import HeroSection from '@/components/sections/HeroSection.vue'
import TrustSection from '@/components/sections/TrustSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ApplicationsSection from '@/components/sections/ApplicationsSection.vue'
import VideosSection from '@/components/sections/VideosSection.vue'
import ArticleTeaserSection from '@/components/sections/ArticleTeaserSection.vue'
import ResourcesSection from '@/components/sections/ResourcesSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useReveal } from '@/composables/useReveal.js'

const route = useRoute()
const { refresh } = useReveal()

onMounted(async () => {
  await nextTick()
  refresh()
  if (route.hash) {
    const id = route.hash.slice(1)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 200)
  }
})
</script>
