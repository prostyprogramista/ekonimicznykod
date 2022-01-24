<template>
  <main>
    <article>
      <nuxt-content :document="article" />
    </article>
    <Chat title="My custom page" id="/jakis-tam-routing" />
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
