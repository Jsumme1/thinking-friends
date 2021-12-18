const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "User name is required!",
      trim: true,
    },

    email: {
      type: String,
      required: "A valid email address is required",
      match: [/.+\@.+\..+/, "Please enter a valid email address!"],
      unique: true,
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total count of friends on retrieval
UserSchema.virtual("friendCount").get(function () {
  return this.friends.reduce(
    (total, friends) => total + friends.length + 1,
    0
  );
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;