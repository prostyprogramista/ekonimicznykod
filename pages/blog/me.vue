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

      codeBlocks[numberOfCodeBlock].push(element);

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

      codeWrapper.classList.add("code-block");

      for (let i = 0; i < codeBlock.length; i++) {
        if (i == 0) {
          const firstElement = codeBlock[i];
          const parent = firstElement.parentNode;
          const newButton = document.createElement("button");

          newButton.innerHTML = firstElement.firstChild.classList.value
            .substring(
              firstElement.firstChild.classList.value.indexOf("language-") + 9
            )
            .toUpperCase();
          newButton.onclick = () => {
            firstElement.classList.add("hide");
          };

          parent.replaceChild(codeWrapper, firstElement);

          codeWrapper.appendChild(newButton);
          codeWrapper.appendChild(firstElement);
        }


      }
    });

    // let newButton = document.createElement("button");
    // let firstElement = codeBlocks[0];
    // let parent = firstElement.parentNode;

    // newButton.innerHTML = firstElement.firstChild.classList.value
    //   .substring(
    //     firstElement.firstChild.classList.value.indexOf("language-") + 9
    //   )
    //   .toUpperCase();
    // newButton.onclick = () => {
    //   firstElement.classList.add("hide");
    // };

    // codeWrapper.classList.add("code-block");

    // parent.replaceChild(codeWrapper, firstElement);
    // codeWrapper.appendChild(newButton);
    // codeWrapper.appendChild(firstElement);

    debugger;
  },
};
</script>

<router>
    {"path":"/jakis-tam-routing"}
</router>
