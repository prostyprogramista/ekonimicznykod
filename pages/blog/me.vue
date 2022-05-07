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
    <Chat title="My custÓóŻżŹźŁłom page" id="/jakis-tam-routing" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const article = await $content('blog/me').fetch();

    return { article };
  },
};
</script>

<router>
    {"path":"/jakis-tam-routing"}
</router>
