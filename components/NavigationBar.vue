<template>
  <nav class="nav">
    <div class="logo">
      <NuxtLink to="/">
        <img src="/ekonomicznykod/images/logo/logo.png" alt="logo" />
      </NuxtLink>
    </div>

    <ul class="nav-links" v-bind:class="{ 'nav-active': isActive }">
      <NuxtLink to="/about/me">Strona główna</NuxtLink>
      <NuxtLink to="/about/me">Spis treści</NuxtLink>
      <NuxtLink to="/about/me">Literatura</NuxtLink>
      <NuxtLink to="/post2">Inne</NuxtLink>
      <NuxtLink to="/post">Kontakt</NuxtLink>
    </ul>

    <div
      v-on:click="handleNavigationBar"
      class="burger"
      v-bind:class="{ toggle: isActive }"
    >
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      isActive: false,
    };
  },
  methods: {
    handleNavigationBar: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>
