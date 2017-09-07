<template>
  <div id="main">
    <div id="stream-section">
      <!-- <stream-template v-for="name in streamerNames" :key="name" :streamer-name="name"></stream-template> -->
    </div>

    <div id="chat-section">
      <ul id="chat-nav">
        <li v-for="name in streamerNames" :key="name" @click.prevent="chatSelected(name)">
          <a href="">{{name}}</a>
        </li>
      </ul>
      <!-- <iframe scrolling="yes" class="chat" src="http://www.twitch.tv/hebo/chat"></iframe> -->
      <chat-template v-for="name in streamerNames" :key="name" :streamer-name="name"></chat-template>

      <ul id="options-nav">
        <li>Add Stream</li>
        <li>Remove stream</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {
      streamerNames: [
        "captainsalt",
        "vn4mock",
        "mew2king",
        "nairomk",
        "zero",
      ]
    }
  },
  methods: {
    chatSelected(name) {
      console.log(name);
    }
  }
}
</script>

<style scoped>
#main {
  display: grid;
  grid-template-columns: 65vw auto;
  height: 100vh;
}

#stream-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row-reverse;
}

#stream-section iframe {
  /* make scroll with page */
  min-height: 300px;
  min-width: 45%;
  margin: 1px;
}

#chat-section {
  display: grid;
  grid-template-rows: 3vh 90vh 3vh;
  z-index: 1;
  padding: 10px;
}

#chat-nav,
#options-nav {
  display: inline-flex;
  overflow: auto;
  background: black;
}

#chat-nav li,
#options-nav li {
  background: #6441a4;
  border: 1px solid #6441a4;
  border-radius: 5px;
  color: white;
  margin: 0 1px;
  padding: 0 5px;
}

.chat {
  align-self: stretch;
  width: 100%;
  min-width: 300px;
  margin: 5px 0;
}
</style>
