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
    // let emptySpan = document.createTextNode("\n")

    // codeElements[1].firstChild.firstChild.appendChild(emptySpan)
    // debugger;
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
      let codeContent = document.createElement("div");
      let codeButton = document.createElement("div");

      codeWrapper.classList.add("code-block");
      codeButton.classList.add("code-button");
      codeContent.classList.add("code-content");
      codeContent.style.height = '600px';

      for (let i = 0; i < codeBlock.length; i++) {
        const element = codeBlock[i];
        const parent = element.parentNode;
        const newButton = document.createElement("button");

        newButton.innerHTML = element.firstChild.classList.value
          .substring(
            element.firstChild.classList.value.indexOf("language-") + 9
          )
          .toUpperCase();
        newButton.onclick = () => {
          element.classList.add("hide");
          
          setTimeout(() => {
            
      codeContent.style.height = '300px';
      // codeContent.classList.add("small");
          }, 1000);
          setTimeout(() => {
            
            element.classList.add("hide2");
      codeContent.style.height = '300px';
      // codeContent.classList.add("small");
      
            element.classList.add("hide2");
          }, 1000);
        };

        if (i == 0) {
          parent.replaceChild(codeWrapper, element);

          codeWrapper.appendChild(codeButton);
          codeWrapper.appendChild(codeContent);
        } else {
          parent.removeChild(element);
        }

        codeButton.appendChild(newButton);
        codeContent.appendChild(element);
      }
    });
  },
};
</script>

<router>
    {"path":"/jakis-tam-routing"}
</router>
