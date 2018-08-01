<template>
  <v-list-tile avatar @click="console.log('')">
    <v-badge left overlap>
      <span slot="badge">{{message.unreadMessageCount}}</span>
      <v-list-tile-avatar>
        <img :src="message.avatar">
      </v-list-tile-avatar>
    </v-badge>
    <v-list-tile-content>
      <v-list-tile-title>{{message.content}}</v-list-tile-title>
      <v-list-tile-sub-title v-html="message.meta"></v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>



export default {
  name: 'ChatPreview',
  props: {
    message: Object
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
