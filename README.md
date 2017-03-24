# QuackChat

[Quack.today][www.quack.today] is a web application for users to efficiently collaborate. QuackChat lets users create single and multi person direct messages, subscribe to publicly available channels, and communicate in real time.

Quack is a personal project by Chase Armstrong.

## Features

- Real time messaging

- Real time channel and direct message creation

- Single and multi person direct messages

- Smart scrolling for a clean user experience

## Technology

The front end is build with React/Redux and the backend is built with Rails. It's really fast because of React as the page only renders when something changes. Also the pieces of the page can be reused allowing for quick development.

The backend is built with Rails. There's not a lot to talk about here besides Action Cable which is really cool. It creates an open connection between the server and the browser to make messaging instantaneous.

## Project Design

QuackChat was designed and built in two weeks.

Before starting the project, I spent a day designing the database schema ( Link to schema ), creating the initial project wireframes ( Link to schema ), and mapping out my API endpoints ( Link to API endpoints ). From there, I spent time creating static components that gave me the framework for the site. I believe it's better to visualize the page first so that you can understand what information you're going to need from your backend. After building out static views, I built out my backend working in slices. Then I would start at the api, working through the redux-cycle back to my components. The last step was to make the components dynamic.
