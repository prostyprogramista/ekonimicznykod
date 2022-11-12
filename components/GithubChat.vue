<template>
    <div class="chat" id="github_chat"></div>
</template>

<script>
import axios from 'axios';


export default {
  props: ["id", "name", "uri"],
  async created() {
    await new Promise(resolve => setTimeout(resolve, 2000))

    await axios.post('http://localhost:8080/chat/articles', {
        'uri': this.uri, 
        'articleHook': this.id,
        'name': this.name
    }).then((response) => {
      const chat = document.body.getElementsByClassName(
        'chat'
    );
    axios.post(`http://localhost:8080/chat/articles/${this.id}/visits`)

    chat[0].innerHTML += response.data
    }).catch(e => {
      console.log(e)
    })
  },
};
</script>
