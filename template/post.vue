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
    <!-- <Chat title="postTitle" id="postRoute" /> -->
  </main>
</template>

<script>
import { wrapLiElements, buildMultipleCodeBlock, buildPanels } from '@/scripts/modify.pages.js';

export default {
  async asyncData({ $content }) {
    const article = await $content(contentLocalization).fetch();

    return { article };
  },
  mounted() {
    wrapLiElements()
    buildPanels()
    buildMultipleCodeBlock()
  },
};
</script>

router
