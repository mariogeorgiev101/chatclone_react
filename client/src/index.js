import { app, h } from 'hyperapp'

import { UserHeader } from './components/UserHeader'
import { MessageList } from './components/MessageList'
import { TypingIndicator } from './components/TypingIndicator'
import { CreateMessageForm } from './components/CreateMessageForm'
import { RoomList } from './components/RoomList'
import { RoomHeader } from './components/RoomHeader'
import { CreateRoomForm } from './components/CreateRoomForm'
import { FileInput } from './components/FileInput'

import { startup } from './chatkit'

const state = {
  user: {},
  room: {},
  rooms: [],
  message: '',
  messages: {},
  typing: [],
  online: {},
  dragging: false,
}

const merge = (a, b) => Object.assign({}, a, b)

const actions = {
  setUser: user => ({ user }),
  setRoom: room => ({ room }),
  setRooms: rooms => ({ rooms }),
  setDraggingFile: dragging => ({ dragging }),
  setMessage: message => ({ message }),
  addMessage: payload => ({ messages, room }) => ({
    messages: merge(messages, {
      [payload.room.id]: merge(messages[payload.room.id], {
        [payload.id]: payload,
      }),
    }),
  }),
  isTyping: ([user, from]) => ({ typing, room }) =>
    room.id === from.id && {
      typing: !typing.includes(user) ? [...typing, user] : typing,
    },
  notTyping: user => ({ typing }) => ({
    typing: typing.filter(x => x !== user),
  }),
  setUserPresence: ([user, status]) => ({ online }) => ({
    online: merge(online, { [user]: status }),
  }),
}

const view = (state, actions) => (
  <main>
    <aside>
      {UserHeader(state.user)}
      {RoomList(state, actions)}
      {CreateRoomForm(state, actions)}
    </aside>
    <section
      class={state.dragging && 'dragging'}
      ondragover={e => actions.setDraggingFile(true)}
      ondragleave={e => actions.setDraggingFile(false)}
      ondrop={e => actions.setDraggingFile(false)}
    >
      {RoomHeader(state.room)}
      {MessageList(state)}
      {TypingIndicator(state)}
      {CreateMessageForm(state, actions)}
      {state.dragging && FileInput(state, actions)}
    </section>
  </main>
)

startup(app(state, actions, view, document.body))
