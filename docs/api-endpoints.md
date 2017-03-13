# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - creates a user (signup)

### Session

- `POST /api/session` - creates a new session (login)
- `DELETE /api/session` - destroys a session (logout)

### Groups

- `GET /api/groups` - get all the groups for a particular user
- `POST /api/groups` - create a new group

### Messages

- `GET /api/messages` - get all the messages for a particular
group
- `POST /api/messages` - create a new message for a particular
group
- `UPDATE /api/messages/:id` - update a particular message
- `DELETE /api/messages/:id` - delete a particular message
