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
    <GithubChat :id="article.id" :name="article.title" :uri="article.route.path" />
  </main>
</template>

<script>
import { wrapLiElements, buildMultipleCodeBlock, buildPanels } from '@/scripts/modify.pages.js';

export default {
  props: ["id", "title", "route.path"],  
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
