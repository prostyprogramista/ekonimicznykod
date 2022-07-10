<template>
  <main>
    <div class="latest-posts">
      <h1>Ostatnie</h1>
      <div v-for="article of articles" :key="article">
        <div class="panel">
          <div class="image">
            <img v-if="article.img" :src="article.img" />
            <img v-else src="~/static/images/header/empty.jpg" />
          </div>
          <div class="content">
            <h2 class="title">{{ article.title }}</h2>
            <p class="description">{{ article.description }}</p>
            <div class="details">
              <div class="specification">
                <div class="left">
                  <div v-if="article.created_at">
                    <img
                      src="~/static/icons/latest/note-plus-outline.svg"
                      title="Dodano"
                    />
                    <p>{{ article.created_at }}</p>
                  </div>
                  <div v-if="article.modified_at">
                    <img
                      src="~/static/icons/latest/note-edit-outline.svg"
                      title="Edytowano"
                    />
                    <p>{{ article.modified_at }}</p>
                  </div>
                </div>
                <div class="right">
                  <div>
                    <p>3341</p>
                    <img
                      src="~/static/icons/latest/eye-refresh-outline.svg"
                      title="Wyświetlono"
                    />
                  </div>
                  <div>
                    <p>341</p>
                    <img
                      src="~/static/icons/latest/message-processing-outline.svg"
                      title="Skomentowano"
                    />
                  </div>
                </div>
              </div>
              <div class="classification">
                <div class="categories">
                  <a
                    class="category"
                    v-for="category of article.categories"
                    :key="category"
                    :href="'/ostatnie?category=' + category"
                  >
                    {{ category }}
                  </a>
                </div>
                <div class="tags">
                  <a
                    class="tag"
                    v-for="tag of article.tags"
                    :key="tag"
                    :href="'/ostatnie?tag=' + tag"
                  >
                    <i>#</i>{{ tag }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    if (queryParameters["tag"]) {
      whereQuery = {
        ...whereQuery,
        tags: { $contains: queryParameters["tag"] },
      };
    }

    if (Object.keys(whereQuery).length != 0) {
      articles.where(whereQuery);
    }

    articles = await articles.sortBy("createdAt", "desc").fetch();

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
