<template>
  <div>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const article = await $content('blog/blog').fetch();

    return { article };
  },
};
</script>


