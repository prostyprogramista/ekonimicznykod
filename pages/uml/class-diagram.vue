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
    <!-- <Chat title="UML - Diagram klas" id="/uml/diagram-klas" /> -->
  </main>
</template>

<script>
import { wrapLiElements, buildMultipleCodeBlock, buildPanels } from '@/scripts/modify.pages.js';

export default {
  async asyncData({ $content }) {
    const article = await $content('uml/class-diagram').fetch();

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
    {"path":"/uml/diagram-klas"}
</router>
