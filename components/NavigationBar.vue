<template>
  <nav>
    <div class="navigation">
      <div class="logo">
        <div class="logo-icon-background">
          <div class="logo-icon-shadow">
            <NuxtLink to="/">
              <img class="logo-icon" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="links" v-bind:class="{ display: isActive }">
        <NuxtLink v-on:click.native="handleNavigationBar" to="/ostatnie">Najnowsze</NuxtLink>
        <NuxtLink v-on:click.native="handleNavigationBar" to="/spis-tresci">Spis treści</NuxtLink>
        <NuxtLink v-on:click.native="handleNavigationBar" to="/o-mnie">O mnie</NuxtLink>
        <NuxtLink v-on:click.native="handleNavigationBar" to="/o-blogu">O blogu</NuxtLink>
        <NuxtLink v-on:click.native="handleNavigationBar" to="/kontakt">Kontakt</NuxtLink>
      </div>

      <div
        v-on:click="handleNavigationBar"
        class="burger"
        v-bind:class="{ toggle: isActive }"
      >
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
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
