import axios from "axios";

export const api = axios.create({
  baseURL: '/api/v1/users' ,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});

/*API calls for User */
export const getUsers = () => {
  return api.get("");
};
export const createUser = (data) => {
  return api.post("", data);
};
export const getUserById = (id) => {
  return api.get(`/${id}`);
};
export const updateUserById = (data) => {
  return api.patch(`/${data.id}`, data);
};
export const deleteUserById = (id) => {
  return api.delete(`/${id}`);
};
