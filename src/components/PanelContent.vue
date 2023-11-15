<script setup>
import { usePanelStore } from '../stores/panel'
import { Icon } from '@iconify/vue'
import Thecard from './TheCard.vue'
const store = usePanelStore()
</script>
<template>
  <div class="panel-content">
    <div class="panel-content__header">
      <div class="panel-content__heading">
        <h1>{{ store.data.title }}</h1>
        <h2>{{ store.data.heading }}</h2>
      </div>
      <div class="panel-content__buttons">
        <button class="panel-content__button">
          <Icon icon="fa6-solid:magnifying-glass" />
        </button>
        <button class="panel-content__button">
          <Icon icon="mdi:bookmark-outline" font-size="16px" />
        </button>
      </div>
    </div>

    <div class="panel-content__cards">
      <Thecard
        v-for="card in store.data.cards"
        :key="card.title"
        :title="card.title"
        :sub-title="card.sub_title"
        :heading="card.heading"
      />
    </div>
    <ul class="panel-content__list">
      <li class="panel-content__list__item" v-for="item in store.data.list" :key="item">
        {{ item }}
      </li>
    </ul>
    <Thecard
      :title="store.data.article.title"
      :sub-title="store.data.article.sub_title"
      :heading="store.data.article.heading"
    />
  </div>
</template>
<style lang="scss" scoped>
.panel-content {
  &__header {
    display: flex;
    align-items: last baseline;
    justify-content: space-between;
  }
  &__heading {
    margin-bottom: 44px;
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }
    h2 {
      font-size: 1rem;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__button {
    cursor: pointer;
    width: 32px;
    height: 32px;
    border: 1px solid #c3c7ca;
    border-radius: 8px;
    display: grid;
    place-content: center;
    background-color: transparent;
    color: var(--color-text);
  }
  &__cards {
    margin-bottom: 24px;
    width: 100%;
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
  }

  &__list {
    margin-bottom: 24px;
    padding: 18px 12px;
    border-radius: 8px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    background-color: #d9d9d9;
    &__item {
      padding: 4px 16px;
      background-color: white;
      border-radius: 24px;
      font-size: 0.75rem;
    }
  }

  &__article {
    padding: 18px 12px;
    border-radius: 8px;
    background-color: #d9d9d9;
    height: auto;
    aspect-ratio: 16/9;

    p {
      margin-bottom: 8px;
      width: max-content;
      padding: 4px 16px;
      background-color: white;
      border-radius: 14px;
      font-size: 0.75rem;
    }
  }
}
</style>
