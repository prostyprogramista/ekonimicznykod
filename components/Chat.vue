<template>
  <div>
    <p>{{title}}</p>
    <div id="disqus_thread"></div>
  </div>
</template>

<script>
export default {
  props: [ 'id', 'title' ],
  beforeCreate() {
  },
  created() {
    const props = { id: this.id, title: this.title }

    window.disqus_config = function () {
      this.page.identifier = props.id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      this.page.title = props.title;
    };

    const doc = document;
    const s = doc.createElement("script");
    s.src = "https://ekonomicznykod.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (doc.head || doc.body).appendChild(s);
  }
};
</script>
