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
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {
      streamCanGrow: false
    }
  },
  mounted() {
    this.$nextTick(function() {
      let chat = document.getElementsByClassName("chat")[0];
      chat.classList.remove("hide");
    });
  },
  methods: {
    //loops through chat elements and applies/removes the hidden class based on which button is pressed
    chatSelected(name) {
      var chats = document.getElementsByClassName("chat");
      for (let i = 0; i < chats.length; i++) {
        let chat = chats[i];

        if (chat.outerHTML.includes(name))
          chat.classList.remove("hide");
        else
          chat.classList.add("hide");
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
        style.flexFlow = "initial";
        style.flexWrap = "wrap";
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

      //if the user didn't add any streamers to the url
      if (window.location.origin === window.location.href.replace(/\/$/, "")) {
        console.log("Insert some links");
        return;
      }

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
  min-height: 300px;
  min-width: 45%;
  margin: 5px;
}

#chat-section {
  display: grid;
  grid-template-rows: 8vh 92vh;
  grid-template-areas: "top" "bottom";
  z-index: 1;
}

#chat-nav {
  display: inline-flex;
  flex-wrap: wrap;
  overflow: auto;
  background: #101010;
  grid-area: top;
}

#chat-nav li {
  background: #6441a4;
  border: 1px groove #6441a4;
  text-align: center;
  align-self: center;
  color: white;
  margin: 1px;
  padding: 2px 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 70%;
  cursor: pointer;
  padding: 6px;
  min-width: 60px;
}

#chat-nav li:hover {
  background: #432c6d;
}

#chat-nav li:active {
  background: #2c1d49;
}

.chat {
  align-self: stretch;
  justify-self: start;
  width: 99%;
  min-width: 300px;
  margin: 5px 0;
  grid-area: bottom;
}

@media only screen and (max-width: 905px) {
  #chat-section {
    display: none;
  }
  #stream-section iframe {
    margin: 0px;
    border: none;
  }
  #main {
    display: block;
    /* grid-template-columns: 1fr; */
  }
}
</style>
