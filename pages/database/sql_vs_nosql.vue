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
    const article = await $content('database/sql_vs_nosql').fetch();

    return { slug, article };
  },
};
</script>
