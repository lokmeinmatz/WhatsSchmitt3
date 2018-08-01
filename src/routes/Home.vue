<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap align-center>
        <v-flex xs12 sm6>
          <v-card>
            <v-card-title primary-title class="pb-0">
              <div class="headline">Neue Nachrichten</div>
            </v-card-title>
            <v-card-text>
              <v-list two-line>
                <template v-for="item in items">
                  <v-subheader v-if="item.header" :key="item.header">
                    {{ item.header }}
                  </v-subheader>

                  <ChatPreview v-else :key="item.message" :item="item"></ChatPreview>
                  <v-divider :key="item.message + 'd'"></v-divider>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import ChatPreview from '../components/ChatPreview.vue'


export default {
  name: 'Home',
  components: {ChatPreview},
  data: function(){
    return {
      items: [
        {header: 'Heute'},
        {message: 'Heute ist wieder Freitagstreff!', meta: '<span class="text--primary">Freitagstreff</span> &mdash; Sebastian 12:13'}
      ]
    }
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
