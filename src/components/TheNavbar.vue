<script setup>
import data from '../../mock/mock-data'
import { ref } from 'vue'
import logo from '../assets/logo.png'
import NavbarLink from './NavbarLink.vue'
import UserInfo from './UserInfo.vue'
const { links } = data
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
<template>
  <nav>
    <div class="navbar">
      <img :src="logo" alt="BigDashboard" width="126" height="42" />
      <button @click="toggleMenu" class="hamburger">&#9776;</button>
    </div>
    <div class="navbar__menu" :class="{ 'show-menu': isMenuOpen }">
      <NavbarLink
        v-for="link in links"
        :key="link.target"
        :target="link.target"
        :label="link.label"
        :counter="link.counter"
      />
      <UserInfo name="Andrew" email='andrew_workstation@hotmail.com'/>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #eff3f6;
  color: var(--color-text);
}

.brand {
  font-size: 1.5em;
}

.hamburger {
  font-size: 1.5em;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
}

.navbar__menu {
  display: flex;
  margin: 0;
  padding: 0;
  transition: transform 0.3s ease-in-out;
}

li {
  margin: 0 1em;
}

.show-menu {
  display: flex;
  transform: translateX(0);
}

@media (max-width: 1280px) {
  nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .navbar__menu {
    padding: 20px;
    position: fixed;
    top: 72px;
    left: -100%;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 72px);
    background-color: #eff3f6;
    color: var(--color-text);
    text-align: center;
  }

  li {
    margin: 1em 0;
  }

  .show-menu {
    transform: translateX(100%);
  }
}

@media (min-width: 1280px) {
  .hamburger {
    display: none;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 239px;
    border-right: 1px solid #dce0e3;
    display: flex;
    flex-direction: column;
  }

  .navbar {
    padding: 20px 20px 35px;
  }

  .navbar__menu {
    height: 100%;
    padding: 0 20px 30px;
    flex-direction: column;
    width: 100%;
    color: var(--color-text);
    text-align: center;
  }
}
</style>
