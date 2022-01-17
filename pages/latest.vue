<template>
  <div>
      <h2>Latest posts</h2>
        <div v-for="article of articles" :key="article">
            {{article.title}}
        </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content({deep: true})
    .only(['title'])
    .sortBy('createdAt', 'desc')
    .fetch();

    return { articles };
  },
};
</script>

<router>
    {"path":"/ostatnie"}
</router>
