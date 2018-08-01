<template>
  <v-slide-y-transition mode="out-in">
    <div class="aboutme">
      <v-container fluid grid-list-lg >
      <v-layout wrap>
        <v-flex xs12 sm4 xl2 class="pl-0" align-content-center justify-space-around>
          <v-avatar size="96">
            <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="Avatar">
          </v-avatar>
        </v-flex>
        <v-flex xs12 sm8>
          <div class="headline pt-3 pl-1">
            Hans Peter
          </div>
          <v-text-field solo label="Regular"></v-text-field> 
          
        </v-flex>
      </v-layout>
    </v-container>
    </div>
  </v-slide-y-transition>
</template>

<script>
import ChatPreview from '../components/ChatPreview.vue'


export default {
  name: 'Me',
  components: {ChatPreview},
  data: function(){
    return {
      days: [
        {header: 'Heute',
        newMessages: [
          {avatar: require('../assets/empty.png'), content: 'Heute ist Freitagstreff!!!', meta: '<span class="text--primary">Freitagstreff</span> &mdash; Sebastian 12:13', unreadMessageCount: 1},
          {avatar: require('../assets/empty.png'), content: 'Heute 13 Uhr!', meta: '<span class="text--primary">Alle Teamer</span> &mdash; Sebastian 12:14', unreadMessageCount: 3},
          {avatar: require('../assets/empty.png'), content: 'Will jemand Pizza?', meta: '<span class="text--primary">Teamer HB</span> &mdash; Sebastian 12:21', unreadMessageCount: 21},
          {avatar: require('../assets/empty.png'), content: 'Will jemand Eis?', meta: '<span class="text--primary">Teamer APG</span> &mdash; Sebastian 12:22', unreadMessageCount: 5},
          {avatar: require('../assets/empty.png'), content: 'Ich kauf beides', meta: '<span class="text--primary">Schmitt3 RJR</span> &mdash; Sebastian 12:25', unreadMessageCount: 7},
        ]}],
        last: [
          {avatar: require('../assets/empty.png'), content: 'Ich kauf beides', meta: '<span class="text--primary">Schmitt3 RJR</span> &mdash; Sebastian 12:25', unreadMessageCount: 7},
          {avatar: require('../assets/empty.png'), content: 'Will jemand Eis?', meta: '<span class="text--primary">Teamer APG</span> &mdash; Sebastian 12:22', unreadMessageCount: 5},
          {avatar: require('../assets/empty.png'), content: 'Will jemand Pizza?', meta: '<span class="text--primary">Teamer HB</span> &mdash; Sebastian 12:21', unreadMessageCount: 21},
          {avatar: require('../assets/empty.png'), content: 'Heute 13 Uhr!', meta: '<span class="text--primary">Alle Teamer</span> &mdash; Sebastian 12:14', unreadMessageCount: 3},
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aboutme {
  max-width: 700px;
}

.v-avatar {

}
</style>
