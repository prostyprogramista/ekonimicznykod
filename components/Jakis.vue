<template>
    <nuxt-content :document="article" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog/me').fetch();

    return { article };
  },
};
</script>
