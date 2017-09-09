<template>
    <iframe class="chat hide" :src="embedLink"></iframe>
</template>

<script>
export default {
    name: "chat-template",
    props: ["streamerName"],
    computed: {
        embedLink: function() {
            return `https://www.twitch.tv/${this.streamerName}/chat`
        }
    }
}
</script>

<style scoped>
.hide {
    display: none;
}
</style>
