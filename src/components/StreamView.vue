<template>
  <div id="main">
    <div id="stream-section" :style="flexStyle">
      <stream-template v-for="name in streamerNames" :key="name" :streamer-name="name" :style="growStyle"></stream-template>
    </div>

    <div id="chat-section">
      <ul id="chat-nav">
        <li v-for="name in streamerNames" :key="name" @click.prevent="chatSelected(name)">
          {{name}}
        </li>
      </ul>

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
      streamerNames: getStreamers(),
      streamCanGrow: false
    }
  },
  methods: {
    //loops through chat elements and applies/removes the hidden class based on which button is pressed
    chatSelected(name) {
      var chats = document.getElementsByClassName("chat");
      for (let i = 0; i < chats.length; i++) {
        let chat = chats[i];

        if (chat.outerHTML.includes(name))
          chat.classList.remove("hide")
        else
          chat.classList.add("hide")
      }
    },
  },
  computed: {
    //Changes the stream layout based on how many streams are being watched 
    flexStyle: function() {
      var style = {
        justifyContent: "center",
        display: "flex"
      }

      //2 or less streams
      if (this.streamerNames.length <= 2) {
        style.flexFlow = "column";
        style.flexWrap = "none";
        this.streamCanGrow = true;
      }
      //more than 2 streams
      else {
        style.flexFlow = "initial"
        style.flexWrap = "wrap"
        this.streamCanGrow = false;
      }

      return style;
    },
    //allows the flexbox to grow so it fills up empty space when there's not may streams on the screen
    growStyle: function() {
      return {
        flexGrow: (this.streamCanGrow) ? 1 : 0
      }
    },
    streamerNames: function() {
      var pattern = /(?:https?:\/\/.+?\/)([^\s]+)/gi;
      var url = window.location.href.split(pattern);

      //remove empty entries
      for (let i = 0; i < url.length; i++) {
        let element = url[i];
        if (!element)
          url.splice(i, 1);
      }

      var streamers = url[0].split("/");
      return streamers;
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

#stream-section iframe {
  /* make scroll with page */
  min-height: 300px;
  min-width: 45%;
  margin: 1px;
}

#chat-section {
  display: grid;
  grid-template-rows: 3vh 90vh 3vh;
  grid-template-areas: "top" "middle" "bottom";
  z-index: 1;
  padding: 10px;
}

#chat-nav,
#options-nav {
  display: inline-flex;
  flex-wrap: wrap;
  overflow: auto;
  background: #101010;
}

#chat-nav li,
#options-nav li {
  background: #6441a4;
  border: 1px groove #6441a4;
  align-self: center;
  color: white;
  margin: 1px;
  padding: 2px 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 70%;
  cursor: pointer;
}

#chat-nav li:hover,
#options-nav li:hover {
  background: #211637;
}

#chat-nav {
  grid-area: top;
}

#options-nav {
  grid-area: bottom;
}

.chat {
  align-self: stretch;
  width: 100%;
  min-width: 300px;
  margin: 5px 0;
  grid-area: middle;
}
</style>
