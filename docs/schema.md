Table: users

Columns: id (integer), username (string), password_digest (string), session_token (string)

Additional Notes: Add in uniqueness constraints on session_token and password_digest. Add in presence validations on username, password_digest, and session_token. Use a length validation on the user's input password to ensure the password they provide is long enough.

Table: groups

Columns: id (integer), name (string), channel (bool)

Additional Notes: I plan on storing channels and direct_messages under the same groups table. To me this makes the most sense because the only difference between the two is how they are organized on the chat sidebar component. Other than that, the functionality is pretty much the same.

In terms of validations, I'll include presence validations for the name and channel as well as uniqueness validations for the name/channel combination. Adding in this validation will ensure that I can have a channel and a group that are named the same thing because the uniqueness constraint will be on the combination name and channel.

Table: subscriptions

Columns: id (integer), user_id (integer), group_id (integer)

Additional Notes: This table will serve as a joins table so that I know which users are subscribed to which channels. By default, every user that signs in will be subscribed to the General Channel (I can take care of this inside the UsersController). Both user_id and group_id will need presence validations and I should probably add a uniqueness constraint on the combination of user_id and group_id so that a user isn't shown as subscribing to the same group more than once.

Table: messages

Columns: id (integer), user_id (integer), group_id (integer), body (text)

Additional Notes: This table will house all of the messages that are created. Each message will be linked to both a group (the group that the message was posted in) as well as a user (the user that created the message). Presence validations will be enforces on all the fields.

A side note here is that the created_at datetime will be important for this particular piece as I'll want to ensure all the messages are listed in the correct order.
