<template>
    <iframe class="stream" :src="embedLink" scrolling="no" allowfullscreen="true"></iframe>
</template>

<script>
export default {
    name: "stream-template",
    props: ["streamerName"],
    computed: {
        embedLink: function() {
            return `https://player.twitch.tv/?channel=${this.streamerName}&muted=false&autoplay=false`;
        }
    }
}
</script>

<style scoped>
.stream {
    border: 1px solid #6441a4;   
    padding: 0 1px 0 0 ;
}
</style>
