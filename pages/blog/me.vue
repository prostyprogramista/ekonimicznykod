<template>
  <main>
    <Header
      :title="article.title"
      :description="article.description"
      :imageSrc="article.img"
    />
    <article>
      <nuxt-content :document="article" />
    </article>
    <!-- <Chat title="My custÓóŻżŹźŁłom page" id="/jakis-tam-routing" /> -->
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const article = await $content("blog/me").fetch();

    return { article };
  },
  mounted() {
    let codeElements = document.body.getElementsByClassName(
      "nuxt-content-highlight"
    );
    let codeElementAmount = codeElements.length;
    let codeBlocks = [[]];

    for (let i = 0, numberOfCodeBlock = 0; i < codeElementAmount; i++) {
      const element = codeElements[i];
      let nextElement = element.nextElementSibling;

      codeBlocks[numberOfCodeBlock].push({
        element: element,
        elementButton: document.createElement("button"),
        elementHeight: element.clientHeight,
      });

      if (
        i + 1 < codeElementAmount &&
        !nextElement.classList.contains("nuxt-content-highlight")
      ) {
        numberOfCodeBlock++;

        codeBlocks.push([]);
      }
    }

    codeBlocks.forEach((codeBlock) => {
      let codeWrapper = document.createElement("div");
      let codeContentSection = document.createElement("div");
      let codeButtonSection = document.createElement("div");

      codeWrapper.classList.add("code-block");
      codeButtonSection.classList.add("code-button-section");
      codeContentSection.classList.add("code-content");

      for (let i = 0; i < codeBlock.length; i++) {
        const { element, elementButton, elementHeight } = codeBlock[i];
        const parent = element.parentNode;

        elementButton.classList.add("code-button");
        elementButton.innerHTML = element.firstChild.classList.value
          .substring(
            element.firstChild.classList.value.indexOf("language-") + 9
          )
          .toUpperCase();
        elementButton.onclick = () => {
          if (!element.classList.contains("show-code")) {
            codeContentSection.style.height = elementHeight + "px";

            codeBlock.forEach((it) => {
              if (it.element.classList.contains("show-code")) {
                it.element.classList.toggle("hide-code");
                it.element.classList.toggle("show-code");
                it.elementButton.classList.toggle("active-code-button");
              }
            });

            element.classList.toggle("hide-code");
            element.classList.toggle("show-code");
            elementButton.classList.toggle("active-code-button");
          }
        };

        if (i == 0) {
          parent.replaceChild(codeWrapper, element);

          codeContentSection.style.height = elementHeight + "px";
          codeWrapper.appendChild(codeButtonSection);
          codeWrapper.appendChild(codeContentSection);

          elementButton.classList.add("active-code-button");
          element.classList.add("show-code");
        } else {
          parent.removeChild(element);

          element.classList.add("hide-code");
        }

        codeButtonSection.appendChild(elementButton);
        codeContentSection.appendChild(element);
      }
    });
  },
};
</script>

<router>
    {"path":"/jakis-tam-routing"}
</router>
