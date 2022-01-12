<template>
  <div>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const article = await $content(path).fetch();

    return { article };
  },
};
</script>
