<template>
  <div>
    <p>{{ path }}</p>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  props: ["path"],
  data: function () {
    return {
      page: null,
    };
  },
  async fetch() {
    this.page = await this.$content(this.path).fetch();
  },
};
</script>