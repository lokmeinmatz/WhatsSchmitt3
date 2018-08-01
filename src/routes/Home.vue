<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap align-center justify-center>
        <v-flex sm12 md6>
          <v-card>
            <v-card-title primary-title class="pb-0">
              <div class="headline">Neue Nachrichten</div>
            </v-card-title>
            <v-card-text>
              <v-list two-line>
                <v-list-group v-for="day in days" :key="day.header">
                  <v-list-tile slot="activator">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ day.header }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <template v-for="msg in day.chats">

                    <ChatPreview :key="msg.content" :message="msg"></ChatPreview>
                    <v-divider :key="msg.content + 'd'"></v-divider>
                  </template>
                </v-list-group>
                
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
      days: [
        {header: 'Heute',
        chats: [
          {avatar: require('../assets/empty.png'), content: 'Heute ist Freitagstreff!!!', meta: '<span class="text--primary">Freitagstreff</span> &mdash; Sebastian 12:13', unreadMessageCount: 1},
          {avatar: require('../assets/empty.png'), content: 'Heute 13 Uhr!', meta: '<span class="text--primary">Alle Teamer</span> &mdash; Sebastian 12:14', unreadMessageCount: 3},
          {avatar: require('../assets/empty.png'), content: 'Will jemand Pizza?', meta: '<span class="text--primary">Teamer HB</span> &mdash; Sebastian 12:21', unreadMessageCount: 21},
          {avatar: require('../assets/empty.png'), content: 'Will jemand Eis?', meta: '<span class="text--primary">Teamer APG</span> &mdash; Sebastian 12:22', unreadMessageCount: 5},
          {avatar: require('../assets/empty.png'), content: 'Ich kauf beides', meta: '<span class="text--primary">Schmitt3 RJR</span> &mdash; Sebastian 12:25', unreadMessageCount: 7},
        ]},
        
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.v-list__group__items {
  max-height: 50vh;
  overflow-y: auto;
}
</style>
