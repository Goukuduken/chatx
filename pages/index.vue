<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card min-width='600'>
        <v-card-title> <h1>Chat by Plotnikov. T. D</h1></v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="15"
            :rules="nameRules"
            label="Your nickname"
            required
          ></v-text-field>

          <v-text-field
            v-model="room"
            :rules="roomRules"
            label="Write a room"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="submit"
          >
            Log In
          </v-btn>

        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    layout:'empty', 
    head: {
      title:'Welcome to my chat!'
      },
    sockets: {
    connect: function () {
      console.log("socket connected");
    },
  },
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Write your nickname here',
        v => (v && v.length <= 15) || 'Nickname must be less than 10 characters',
      ],
      room: '',
      roomRules: [
        v => !!v || 'Write a room here',
        //v => /.+@.+\..+/.test(v) || 'Room must be valid',
      ]
    }),

    methods: {
      ...mapMutations(['setUser']),
      submit () {
        if (this.$refs.form.validate()) {
            const user = {
              name: this.name, 
              room: this.room
            }

             this.setUser(user);
             this.$router.push('/chat');
        }
      }
    },
  }
</script>
