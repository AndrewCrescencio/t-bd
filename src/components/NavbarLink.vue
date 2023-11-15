<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({ target: String, label: String, counter: Number })
const counterCssContent = computed(() => {
  return props.counter ? `"${props.counter}"` : ''
})
</script>
<template>
  <RouterLink :to="props.target">{{ props.label }}</RouterLink>
</template>
<style lang="scss" scoped>
a.router-link-exact-active {
  color: #FFF;
  background-color: #535353;
}

a.router-link-exact-active:hover {
  background-color: #D9D9D9;
  color: var(--color-text);
}

a {
  border-radius: 24px;
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 24px;
  &:hover {
    background-color: #535353;
    color: white;
  }
  &::after {
    content: v-bind(counterCssContent);
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: grid;
    place-content: center;
    background-color: var(--success-background-green);
    color: var(--success-text-green);
  }
}
</style>
