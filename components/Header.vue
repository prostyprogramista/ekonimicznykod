<template>
  <header class="test">
  
    <div>
      {{title}} </br>
      {{description}}  </br>
      {{imageSrc}} </br>
    </div>
    <img :src="imageSrc" />
  </header>
</template>

<script>
export default {
  props: ["title", "description", "imageSrc"]
};
</script>
