<template>
    <div class="base-container">
        <NavigationBar />
        <Nuxt/>
        <Footer/>
      <div v-for="article of articles" :key="article">
        {{ article.title }}
      </div>
    </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content({ deep: true })
      .only(["title"])
      .sortBy("createdAt", "desc")
      .fetch();

      console.log(articles)

    return { articles };
  },
};
</script>
