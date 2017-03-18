export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  });
};

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user}
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  });
};

export const requestGroups = () => {
  return $.ajax({
    method: "GET",
    url: 'api/groups/'
  });
};

export const requestSubscribedGroups = () => {
  return $.ajax({
    method: "GET",
    url: 'api/subscriptions'
  });
};

export const requestNewSubscription = subscription => {
  return $.ajax({
    method: "POST",
    url: 'api/subscriptions',
    data: { subscription }
  });
};

export const requestMessages = groupName => {
  return $.ajax({
    method: "GET",
    url: 'api/messages',
    data: { groupName }
  });
};

export const requestMessageCreation = message => {
  return $.ajax({
    method: "POST",
    url: 'api/messages',
    data: { message }
  });
};

export const requestGroupCreation = group => {
  return $.ajax({
    method: "POST",
    url: 'api/groups',
    data: { group }
  });
};
