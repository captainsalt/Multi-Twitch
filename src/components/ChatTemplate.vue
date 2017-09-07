<template>
    <iframe class="chat hide" :src="embedLink"></iframe>
</template>

<script>
export default {
    name: "chat-template",
    props: ["streamerName"],
    data() {
        return {
            streamerName
        }
    },
    computed: {
        embedLink: function() {
            return `http://www.twitch.tv/${this.streamerName}/chat`
        }
    }
}
</script>

<style scoped>
.hide {
    display: none;
}
</style>
