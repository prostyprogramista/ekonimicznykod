<template>
  <div>
    <div id="disqus_thread"></div>
  </div>
</template>

<script>
export default {
  props: [ 'id', 'title' ],
  created() {
    const props = { id: this.id, title: this.title };

    window.disqus_config = function () {
      this.page.identifier = props.id;
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
