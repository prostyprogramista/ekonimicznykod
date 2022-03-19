<template>
  <nav>
    <div class="navigation">
      <!-- <div class="logo">
        <NuxtLink to="/">
          <img src="/ekonomicznykod/images/logo/logo.png" alt="logo" />
        </NuxtLink>
      </div> -->
      
      <div class="logo">
        <div class="logo-icon-background">
          <div class="logo-icon-shadow"> 
            <NuxtLink to="/">
              <img class="logo-icon"/>  
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="links" v-bind:class="{ 'display': isActive }">
        <NuxtLink to="/ostatnie">Najnowsze</NuxtLink>
        <NuxtLink to="/jakis-tam-routing">Spis treści</NuxtLink>
        <NuxtLink to="/biblioteczka">Literatura</NuxtLink>
        <NuxtLink to="/">Inne</NuxtLink>
        <NuxtLink to="/kontakt">Kontakt</NuxtLink>
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
