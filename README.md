# QuackChat

[Quack.today](http://www.quack.today) is a web application for users to efficiently collaborate. QuackChat lets users create single and multi person direct messages, subscribe to publicly available channels, and communicate in real time.

QuackChat, a Slack clone, is a personal project by Chase Armstrong.

## Features

- Secure user authentication

![Direct Message View](/docs/screenshots/authentication.png)

- Real time channel and direct message creation

- Real time messaging

![Instant Messaging View](/docs/screenshots/instant_messaging.png)

- Single and multi person direct messages

![Direct Message View](/docs/screenshots/direct_message_creation.png)

- Smart scrolling for a clean user experience

- Preview channels before subscribing

![Direct Message View](/docs/screenshots/subscribe_to_channel.png)

## Technology

The front end is build with React/Redux and the backend is built with Rails. The app quickly handles user interaction, only changing the bare minimum number of HTML nodes as determined by React's diffing algorithm.

The back end is a Rails app. The most exciting components of this particular Rails app is the Action Cable implementation which allows for real time messaging, channel creation, and direct message subscription.

## Project Design and Development

QuackChat was designed and built in two weeks. Before drilling into the app implementation, I spent a day designing the [database schema](/docs/schema.md), creating the initial project [wireframes](/docs/wireframes), and mapping out my [API endpoints](/docs/api-endpoints.md).

After the plan was complete, I began developing the site in slices. With each slice, I created static components that helped me visualize the data structure I would need when making AJAX requests. Next, I would move into the backend, testing my endpoints to ensure the data would be easily consumed in my React views. After the backend for a given slice was finished, I began my redux cycle implementation. I would work from my AJAX request to my actions and finally into the reducers, testing after each piece. And finally, I would make my static components dynamic, creating container components where necessary.
