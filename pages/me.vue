<router> { path: '/jest-se-moj-widok' } </router>

<template>
  <div>

    <pre> {{ article }} </pre>
    <h1> To jest SLUG: {{ slug }} </h1>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug
    const article = await $content("blog/me").fetch();
    const sciezka = '/jest-se-moj-widok'

    return { sciezka, slug, article };
  },
};
</script>

