import client from "./client";

const Login=(regimentNo,password)=>client.post("/login",{regimentNo,password});

export default{Login};