<template>
    <div class="c-wrap">
       <div class="c-chat">
           <Message v-for="m in messages" :key="m.text" :name="m.name" :text="m.text" owner />
       </div>
       <div class="c-form">
           <ChatForm/>
       </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Message from '@/components/Message';
import ChatForm from '@/components/ChatForm';


export default {
    components: { Message, ChatForm},
    middleware: ['chat'],
    head() {
        return {
            title: `Room ${this.user.room}`
        }
    },
    computed: mapState(['user', 'messages'])
}
</script>

<style scoped>
    .c_wrap {
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .c-form {
        position: absolute;
        top: 10px;
        left: 0;
        right: 0;
        padding: 1rem;
        bottom: 10px;
        overflow-y: auto;
    }
    .c-chat {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        height: 800px;
        background: #212121;
    }
   
</style>