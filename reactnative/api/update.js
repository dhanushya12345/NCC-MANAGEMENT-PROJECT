import client from "./client";

const Update=(userInfo)=>client.post("/updateUser", userInfo);

export default{Update};