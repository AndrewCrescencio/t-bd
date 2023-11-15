<script setup>
import data from '../../mock/mock-data'
import Thecard from './TheCard.vue';
</script>
<template>
  <aside>
    <p class='title'>Tarefas de hoje</p>
    <div class="tasks">
      <Thecard v-for="task in data.tasks" :key="task.title" :title="task.title" />
    </div>
    <p class='title'>Projeto recente</p>
    <Thecard :title='"Lorem..."'/>
  </aside>
</template>
<style lang="scss" scoped>
.title {
  font-size: 24px;
  margin-bottom: 32px;
}
aside {
  padding: 14px;
}

@media (min-width: 1280px) {
  aside {
    position: fixed;
    top: 0;
    right: 0;
    padding: 64px 24px 0;
    max-width: 338px;  
    width: 100%;
    height: 100vh;
    border-left: 1px solid #dce0e3;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
}

.tasks {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
