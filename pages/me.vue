<router> path: '/cas'</router>

<template>
  <div>
    <pre> {{ article }} </pre>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const article = await $content("blog/me").fetch();

    return { article };
  },
};
</script>

