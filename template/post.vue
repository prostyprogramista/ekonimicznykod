<template>
  <main>
    <article>
      <nuxt-content :document="article" />
    </article>
    <Chat title="postTitle" id="postRoute" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const article = await $content(contentLocalization).fetch();

    return { article };
  },
};
</script>

router
