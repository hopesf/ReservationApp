import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const getUser = async (userUid) => await api.post("/getUser", { userUid });
const createUser = async (user) => await api.post("/createUser", user);
const updateUserUid = async (user) => await api.post("/updateUserUid", user);

export { api, getUser, createUser, updateUserUid };
