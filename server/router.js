import { Router } from "express";
// import { Auth1 } from "../src/middleware/auth.js";
import * as rh from "./request-handler.js"
import uploader from "./middlewares/multer.js";
import { Auth } from "./middlewares/auth.js";

const productUploader = uploader([
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 10 },
  ]);

const router=Router();
router.route("/").get(rh.test);
router.route("/register").post(rh.register);
router.route("/login").post(rh.login);
router.route("/profile").get(Auth,rh.profile);

export default router