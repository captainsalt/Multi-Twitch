<template>
    <iframe class="stream" :src="embedLink" scrolling="no" allowfullscreen="true"></iframe>
</template>

<script>
export default {
    name: "stream-template",
    props: ["streamerName"],
    data() {
        return {
            streamerName
        }
    },
    computed: {
        embedLink: function() {
            return `http://player.twitch.tv/?channel=${this.streamerName}&muted=true&autoplay=false`
        }
    }
}
</script>

<style scoped>
.stream {
    border: 1px groove #6441a4;    
}
</style>
