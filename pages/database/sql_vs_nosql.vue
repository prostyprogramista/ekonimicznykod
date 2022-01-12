<template>
  <div>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const article = await $content('database/sql_vs_nosql').fetch();

    return { article };
  },
};
</script>
