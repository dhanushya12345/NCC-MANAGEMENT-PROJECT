const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    name: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      default: "admin",
     
    },
    password: { type: String, required: true },

    
   
    
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("admin", adminSchema);
