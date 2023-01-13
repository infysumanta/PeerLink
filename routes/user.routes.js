const express = require("express");
const { userController } = require("./../controllers");
const { verifyAuth } = require("./../middleware/auth");

const router = express.Router();

router.use(verifyAuth);
router.get("/user", userController.getUser);

router.route("/get-user-details").get(userController.getUserDetails);
router
  .route("/get-user-details/:username")
  .get(userController.getUserDetailsByUsername);
router.route("/get-user-list-search").get(userController.getUserListBySearch);
router
  .route("/get-user-notification-list")
  .get(userController.cancelFriendRequest);
router
  .route("/get-user-friends-list/:user_id")
  .get(userController.getFriendList);
router.route("/get-about-details/:user_id").get(userController.getAboutDetails);
router.route("/send-friend-request").post(userController.sendFriendRequest);
router.route("/cancel-friend-request").post(userController.cancelFriendRequest);
router
  .route("/confirm-friend-request")
  .post(userController.confirmFriendRequest);
router.route("/update-user-details").put(userController.updateUserDetails);
router.route("/read-one-notification").post(userController.readOneNotification);
router
  .route("/marked-all-notification-as-read")
  .post(userController.readAllNotification);

module.exports = router;

getUser;
