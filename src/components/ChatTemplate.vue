<template>
    <iframe class="chat hide" :src="embedLink" data-a-target="chat-theme-dark"></iframe>
</template>

<script>
export default {
    name: "chat-template",
    props: ["streamerName"],
    computed: {
        embedLink: function() {
            return `https://www.twitch.tv/embed/${this.streamerName}/chat?darkpopout`
        }
    }
}
</script>

<style scoped>
.hide {
    display: none;
}
</style>
