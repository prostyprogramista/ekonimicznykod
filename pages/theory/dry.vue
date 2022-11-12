<template>
  <main>
    <Header
      :title="article.title"
      :description="article.description"
      :imageSrc="article.img"
    />
    <article>
      <nuxt-content :document="article" />
    </article>
    <!-- <Chat title="Zasada DRY" id="/theory/dry" /> -->
  </main>
</template>

<script>
import { wrapLiElements, buildMultipleCodeBlock, buildPanels } from '@/scripts/modify.pages.js';

export default {
  async asyncData({ $content }) {
    const article = await $content('theory/dry').fetch();

    return { article };
  },
  mounted() {
    wrapLiElements()
    buildPanels()
    buildMultipleCodeBlock()
  },
};
</script>

<router>
    {"path":"/theory/dry"}
</router>
