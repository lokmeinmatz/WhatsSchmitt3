<template>
  <v-list-tile avatar @click="console.log('')">
    <v-badge left overlap>
      <span slot="badge">{{chat.messages.length}}</span>
      <v-list-tile-avatar>
        <img :src="chat.messages[0].avatar">
      </v-list-tile-avatar>
    </v-badge>
    <v-list-tile-content>
      <v-list-tile-title v-html="message.meta"></v-list-tile-title>
      <v-list-tile-sub-title>{{message.content}}</v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>

import {Chat} from '../classDefs.js'

export default {
  name: 'ChatPreview',
  props: {
    chat: Chat
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
