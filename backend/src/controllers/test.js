// test.js
import { sendMsg } from "./src/controllers/msgController.js";

// mock "protectedRoute" output
const fakeUser = { _id: "12345", username: "testUser" };

const req = {
  params: { id: "67890" }, // receiver id
  user: fakeUser, //  simulate logged-in user
};

const res = {
  status(code) {
    this.statusCode = code;
    return this;
  },
  json(data) {
    console.log("Response:", data);
  },
};

await sendMsg(req, res);
