<template>
  <div>
    <pre> {{ article }} </pre>
    <p>body: {{ body }}</p>
    <p>slug: {{ slug }}</p>
    <p>last: {{ last }}</p>
    <p>createdAt: {{ created }}</p>
    <p>dir: {{ dir }}</p>
    <p>path: {{ path }}</p>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const body = params.body;
    const slug = params.slug;
    const last = params.updatedAt;
    const created = params.createdAt;
    const dir = params.dir;
    const path = params.path;
    const article = await $content("blog/me").fetch();

    return { body, slug, last, created, dir, path, article };
  },
};
</script>
