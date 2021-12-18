const router = require("express").Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/comment-controller");

module.exports = router;

// /api/comments/<userId>
router.route('/:userId').post(addThought);

// /api/comments/<userId>/<thoughtId>
router
.route('/:userId/:thoughtId')
.put(addReaction)
.delete(removeThought);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);