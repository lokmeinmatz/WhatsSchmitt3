<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img :src="item.avatar">
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>{{item.message}}</v-list-tile-title>
      <v-list-tile-sub-title v-html="item.meta"></v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>



export default {
  name: 'ChatPreview',
  props: {
    item: Object
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
