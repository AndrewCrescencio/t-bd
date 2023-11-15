<script setup>
import TheNavbar from '../src/components/TheNavbar.vue'
import TheSidebar from '../src/components/TheSidebar.vue'
</script>
<template>
  <TheNavbar />
  <main>
    <slot></slot>
  </main>
  <TheSidebar />
</template>
<style>
main {
  width: 100%;
  padding: 96px 14px;
  position: relative;
  @media (min-width: 1280px) {
    padding: 80px 60px;
    margin-left: 239px;
    margin-right: 338px;
  }
}
</style>
