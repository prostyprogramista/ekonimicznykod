<template>
<div>
    <nuxt-content :document="page" />
</div>
</template>

<script>
export default {
  async asyncData ({ $content, props }) {
      console.log('To jest ścieżka' + props.path)
    const page = await $content(props.path).fetch()

    return {
      page
    }
  }
}
</script>