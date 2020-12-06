<template>
    <div class="c-wrap">
       <div class="c-chat">
           <Message v-for="m in messages" :key="m.text" :name="m.name" :text="m.text" :owner="m.id == user.id" />
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
    .c-chat {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        bottom: 90px;
        overflow-y: auto;
    }
    .c-form {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        height: 100px;
        background: #212121;
    }  
</style>