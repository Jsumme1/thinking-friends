const router = require("express").Router();
const {
  getAllThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

module.exports = router;

// Set up GET all and POST at /api/thought
router
  .route('/')
  .get(getAllThought)
  .post(addThought);


// /api/thoughts/<userId>
// router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
.route('/:userId/:thoughtId')
.put(addReaction)
.delete(removeThought);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);