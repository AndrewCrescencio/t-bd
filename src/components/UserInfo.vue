<script setup>
const props = defineProps({ name: String, email: String, photo: String })
</script>
<template>
  <div class="user-info">
    <img v-if="props.photo" src="" alt="" />
    <span v-else class="avatar-placeholder"></span>
    <p>{{ props.name }}</p>
    <p>{{ props.email }}</p>
  </div>
</template>
<style lang="scss" scoped>
.user-info {
  margin-top: auto;
  text-align: center;
  font-size: 0.75rem;
  p {
    text-wrap: balance;
  }
}

.avatar-placeholder {
  width: 32px;
  height: 32px;
  display: inline-block;
  border-radius: 100%;
  background-color: #c4c4c4;
}
</style>
