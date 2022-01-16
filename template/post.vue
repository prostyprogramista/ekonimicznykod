<template>
  <div>
    <nuxt-content :document="article" />
    <Chat title="postTitle" id="postRoute" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const article = await $content(contentLocalization).fetch();

    return { article };
  },
};
</script>

router
