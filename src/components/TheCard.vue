<script setup>
const props = defineProps({ title: String, subTitle: String, heading: String })
</script>
<template>
  <article class="card">
    <p v-if='props.title'>{{ props.title }}</p>
    <p v-if='props.subTitle'>{{ props.subTitle }}</p>
    <p v-if='props.heading'>{{ props.heading }}</p>
  </article>
</template>
<style lang="scss" scoped>
.card {
  width: 100%;
  &::before {
    content: '';
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 591.44px / 1127.34px * 100%;
  }
  &::after {
    content: '';
    display: table;
    clear: both;
  }
  padding: 18px 12px;
  margin-bottom: 24px;
  border-radius: 24px;
  background-color: #d9d9d9;
  p {
    margin-bottom: 8px;
    width: max-content;
    color: #070707;
    padding: 6px 16px;
    border-radius: 24px;
    background-color: #ffffff;
    font-size: 0.75rem;
  }
}
</style>