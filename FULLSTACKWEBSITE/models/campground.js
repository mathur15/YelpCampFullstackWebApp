var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   author:{
      id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
      },
      username:String
      
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,//by reference
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Campground", campgroundSchema);