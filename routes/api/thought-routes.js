const router = require("express").Router();
const thoughtController = require("../../controllers/thought-controller");
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,

} = require("../../controllers/thought-controller");

module.exports = router;

// Set up GET all and POST at /api/thought
router
  .route('/')
  .get(getAllThought)
  .post(addThought)

  
// Set up GET one, PUT, and DELETE at /api/thought/:id
router.route("/:thoughtId").get(getThoughtById).put(updateThought).delete(removeThought);


  // /api/thoughts/<userId>/<thoughtId> - reactions

router
.route('/:thoughtId/reactions')
.post(addReaction)


router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(removeReaction);


