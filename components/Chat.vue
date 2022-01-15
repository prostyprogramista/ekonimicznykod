    <template>
    <div>
    <NavigationBar />
    <Header />
    <Footer />
    <div id="disqus_thread"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const d = document;
    const s = d.createElement("script");
    s.src = "https://ekonomicznykod.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  }
};
</script>
