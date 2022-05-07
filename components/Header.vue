<template>
  <header>
    <div class="hero-text">
      <h1 id="dsadasda">{{title}}</h1>
      <pre>{{description}}</pre>
      <img class="header-arrow" src="~/static/icons/chevrons-down.svg" />
    </div>
    <img class="background" v-if="imageSrc" :src="imageSrc" />
    <img class="background" v-else src="~/static/images/header/empty.jpg" />
  </header>
</template>

<script>
export default {
  props: ["title", "description", "imageSrc"]
};
</script>
