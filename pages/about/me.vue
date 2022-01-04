<template>
<div>
    <p>tekst</p>
    <nuxt-content :document="page" />
</div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('about/me').fetch()

    return {
      page
    }
  }
}
</script>