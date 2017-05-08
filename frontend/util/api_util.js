import axios from 'axios';
window.axios = axios;

export const signup = user => {
  return axios({
    method: 'POST',
    url: 'api/users',
    data: {user}
  });
};

export const login = user => {
  return axios({
    method: 'POST',
    url: 'api/session',
    data: {user}
  });
};

export const logout = () => {
  return axios({
    method: 'DELETE',
    url: 'api/session'
  });
};

export const requestGroups = () => {
  return axios({
    method: "GET",
    url: 'api/groups/'
  });
};

export const requestSubscribedGroups = () => {
  return axios({
    method: "GET",
    url: 'api/subscriptions'
  });
};

export const requestNewSubscription = subscription => {
  return axios({
    method: "POST",
    url: 'api/subscriptions',
    data: { subscription }
  });
};

export const requestMessages = groupName => {
  return axios({
    method: "GET",
    url: 'api/messages',
    data: { groupName }
  });
};

export const requestMessageCreation = message => {
  return axios({
    method: "POST",
    url: 'api/messages',
    data: { message }
  });
};

export const requestGroupCreation = group => {
  return axios({
    method: "POST",
    url: 'api/groups',
    data: { group }
  });
};

export const getUsers = () => (
  axios({
    method: "GET",
    url: "api/users"
  })
);

export const requestDirectMessageCreation = group => (
  axios({
    method: "POST",
    url: "api/groups",
    data: { group }
  })
);
