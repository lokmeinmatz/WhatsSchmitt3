<template>
  <v-app>
    <v-navigation-drawer v-model="navDrawer" clipped enable-resize-watcher app>
      
      <v-list class="pa-0">
        <v-list-tile avatar to="/me">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{$store.getters.user.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar to="/">
          <v-list-tile-avatar>
            <v-icon>home</v-icon>
          </v-list-tile-avatar>
          

          <v-list-tile-content>
            <v-list-tile-title>Startseite</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <ChatPreview v-for="chat in chats" :key="chat.chatName + chat.meta" :chat="chat"></ChatPreview>
        <v-list-tile v-if="chats.length <= 0">Keine Chats</v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed clipped-left dark color="primary" app>
      <v-toolbar-side-icon @click="navDrawer = !navDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>WhatsSchmitt3</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="http://www.schmitt3.de">Schmitt3 Homepage</v-btn>
        
      </v-toolbar-items>
    </v-toolbar>
    
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    
    
  </v-app>
</template>

<script>
import ChatPreview from './components/ChatPreview.vue'


export default {
  name: "App",
  components: {ChatPreview},
  data() {
    return {
      navDrawer: false,
    };
  },
  computed: {
    chats() {
      return this.$store.getters.chats
    }
  },

  mounted() {
    this.$store.dispatch('fetchChatData')
  }
};
</script>
