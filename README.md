# React Chat app

> Slack clone powered by [Chatkit](https://pusher.com/chatkit). See it in action here https://github.com/mariogeorgiev101/chatclone_react.git

![demo](https://user-images.githubusercontent.com/1457604/35891289-687ad6ec-0b9b-11e8-99cc-ffbad31a017e.gif)

This is a static, single page web app bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app) for ease of setup, distribution and development. It is a thin UI wrapper around the [pusher-chatkit-client](https://github.com/pusher/chatkit-client-js) library to demonstrate how different features can work together to form a compelling real-time chat client with various potential product applications.

## Features

The Chatkit SDK allows you to implement features you would expect from a chat client. These include:

* 📝 Public and private chat rooms
* 📡 Realtime sending and receiving of messages
* 📦 Rich media attachments (drag and drop)
* 💬 Typing and presence indicators
* 📚 Read message cursors

## Components

The demo attempts to be feature complete according to documentation [here](https://docs.pusher.com/chatkit/reference/javascript). Feature requests should be made via issues or pull requests to this repository.

* CreateMessageForm - to send a message with a textual body and trigger typing indicators.
* CreateRoomForm - to create a new room and join it upon creation.
* FileInput - to send a message with a rich media attachment.
* Message - to render out a message that potentially includes an attachment.
* MessageList - to render a list of messages from a key value store.
* RoomHeader - to display useful information about a given room.
* RoomList - to render a list of rooms which can be subscribed to by the current user.
* TypingIndicator - to signify to the user that another user is typing in a given room.
* UserHeader - to display useful information about a given user.

## Usage

To run the application locally; clone the repo, install dependencies and run the app.

```
$ git clone https://github.com/mariogeorgiev101/chatclone_react.git
$ cd react-slack-clone
$ yarn && yarn start
```

The app starts in development mode and opens a browser window on `http://localhost:3000`. The project rebuilds and the browser reloads automatically when source files are changed. Any build or runtime errors are propagated and displayed in the browser.


