import client from "./client";

const Register=(userInfo)=>client.post("/user", userInfo);

export default{Register};