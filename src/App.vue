<template>
  <v-app>
    <v-navigation-drawer v-model="navDrawer" clipped enable-resize-watcher app>
      
      <v-list class="pa-0">
        <v-list-tile avatar to="/me">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Hans Peter</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <!--<v-icon v-html="item.icon"></v-icon>-->
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed clipped-left dark color="primary" app>
      <v-toolbar-side-icon @click="navDrawer = !navDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>WhatsSchmitt3</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: "App",
  data() {
    return {
      navDrawer: false,
      title: "Vuetify.js",
      items: [{title:'Hello world'}]
    };
  }
};
</script>
