## MVP description:

1. New account creation, login, and guest/demo login
2. Hosting on Heroku

Feature 1: Channels

Smooth, bug free navigation
Adequate and appropriate seeds to demonstrate the feature

Feature 2: Live chat

Feature 3: Direct Message

Feature 4: Teams or multi-person DM

## Design Docs
* [View Wireframes](wireframes/)
* [React Components](component-hierarchy.png)
* [API Endpoints](api-endpoints.md)
* [DB Schema](schema.md)
* [Sample State](sample-state.md)

## Development Timeline:

Phase 1: Front End Authentication To Limit Chat Page View To Logged In Users (1 day)

Objective: Full authentication with bare bones splash page (just html)

Phase 2: Component Layout And Styling For Splash Page (1 day)

Objective: Take the bare bones splash page and add in relevant styling and component structure to ensure the page looks nice and works as expected (/sign-in, /sign-up, and guest login work as expected)

Phase 3: Functioning Chat Sidebar (2 days)

Objective: Create model for groups. Generate relevant api endpoints to get group information. Use jbuilder to return relevant slice of state (groups) that has the channels and the direct messages partitioned. Implement a bare bones sidebar for this page. Also implement the redux cycle.

Phase 4: Functioning Message Panel (2 days)

Objective: Create the model for your groups. Generate the relevant api endpoints to get the correct message information when AJAX requests are made. Implement a bare bones version of the messages container (minimal css to help with layout). Implement the redux cycle for this piece.

Phase 5: Figure Out Action Cable (1 day)

Objective: Implement action cable to ensure the app is real time.

Phase 6: Pixel Perfect Styling (3 days)

Objective: Make my project (at least the chat page) look exactly like the current ui for slack.
