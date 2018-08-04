import {Message, Chat} from './classDefs'



export const testChats = [
  new Chat('Freitagstreff'),
]

testChats[0].messages = [
  new Message('asdada', Date.now(), 'Dööner')
]