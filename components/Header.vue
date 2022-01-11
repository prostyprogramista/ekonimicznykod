<template>
  <header class="header">
    <div class="hero-img" v-bind:style="{ 'background-image': imageSrc }">
      <div class="header-arrow">
        <img src="~/assets/images/icons/chevrons-down.svg" />
      </div>
      <div class="hero-shadow"></div>
      <div class="hero-text">
        <h1><br />{{title}}</h1>
        <p>{{content}}</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["title", "content", "imageSrc"]
};
</script>
