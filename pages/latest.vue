<template>
  <main>
    <div>
      <h2>Latest posts</h2>
      <div v-for="article of articles" :key="article">
        {{ article.title }}
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const queryParameters = getQueryParameters();

    let articles = $content({ deep: true });

    let whereQuery = {};
    if (queryParameters["category"]) {
      whereQuery = {
        ...whereQuery,
        categories: { $contains: queryParameters["category"] },
      };
    }
    if (queryParameters["hash-tag"]) {
      whereQuery = {
        ...whereQuery,
        "hash-tags": { $contains: queryParameters["hash-tag"] },
      };
    }

    if (Object.keys(whereQuery).length != 0) {
      articles.where(whereQuery);
    }

    articles = await articles
      .only(["title"])
      .sortBy("createdAt", "desc")
      .fetch();

    return { articles };
  },
};

function getQueryParameters() {
  let queryParameters = {};

  window.location.search
    .substring(1)
    .split("&")
    .forEach((queryParameter) => {
      const key = queryParameter.split("=")[0];
      const value = queryParameter.substring(
        key.length + 1,
        queryParameter.length
      );

      queryParameters = {
        ...queryParameters,
        [key]: value,
      };
    });

  return queryParameters;
}
</script>

<router>
    {"path":"/ostatnie"}
</router>
