<script setup>
import { onMounted } from 'vue'
import { usePanelStore } from '../stores/panel'
import PanelContent from '../components/PanelContent.vue'
import TheLoader from '../components/TheLoader.vue'
const store = usePanelStore()
onMounted(() => {
  store.getData()
})
</script>
<template>
  <PanelContent v-if="store.data" />
  <TheLoader v-else />
</template>
