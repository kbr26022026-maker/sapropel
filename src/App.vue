<template>
  <AppBackground />
  <AppNavbar />
  <RouterView />
  <AppFooter />
</template>

<script setup>
import AppBackground from '@/components/AppBackground.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style>
body.eo-nav-lock {
  overflow: hidden;
  touch-action: none;
}
body.eo-doc-modal-lock {
  overflow: hidden;
}
</style>
