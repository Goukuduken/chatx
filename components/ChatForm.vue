<template>
    <v-flex xs-12>
        <v-text-field
                v-model="text"
                filled
                label="Write your message"
                clearable
                @keydown.enter="send"
                >

        </v-text-field>
    </v-flex>
</template>

<script>
export default {
    data: () => ({
        text: '',
    }),
    methods: {
        send() {
            this.$socket.client.emit('createMessage', {
                text: this.text, 
                id: this.$store.state.user.id
            }, data => {
                if (typeof data == 'string') {
                    console.error(data);
                }
                else {
                    this.text = "";
                }
            }) 
        }
    }  
}
</script>