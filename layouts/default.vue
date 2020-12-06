<template>
  <v-app app dark>
  <v-navigation-drawer app v-model="drawer"> 
     <v-list subheader>
      <v-subheader>Recent chat</v-subheader>

      <v-list-item
        v-for="u in users"
        :key="u.id"
        @click.prevent
      >
        <!-- <v-list-item-avatar>
          <v-img
            :alt="`${chat.title} avatar`"
            :src="chat.avatar"
          ></v-img>
        </v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item-title v-text="u.name"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon :color="u.id == user.id ? 'primary' : 'grey'">
            mdi-message-outline
          </v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar app>
     <v-app-bar-nav-icon medium @click="drawer = !drawer"></v-app-bar-nav-icon>
     <v-btn icon @click="exit">
       <v-icon>
          mdi-arrow-left
        </v-icon>
     </v-btn>
     <dir><h3> Chat room {{user.room}}</h3></dir>
  </v-app-bar>
  <!-- Sizes your content based upon application components -->
  <v-main>
    <div style="height: 100%">
      <nuxt/>
    </div>
  </v-main>
</v-app>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  computed: mapState(['user', 'users']), 
  data: () => ({
    drawer: true, 
  }),
  methods: {
    ...mapMutations(['clearData']),
    exit() {
      this.$socket.client.emit('userLeaved', this.user.id, () => {
      this.$router.push('/?message=leavedChat');
      this.clearData();
      })
    }
  }
}
</script>
