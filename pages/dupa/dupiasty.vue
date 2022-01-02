<template>
    <div>
        <nuxt-content :document="page" />
    <img src="~assets/indeks.jpg" />
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
