const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
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
      default: "student",
      enum: ["student", "admin"],
    },
    mobileNo: {
      type: Number,
      required: true,
      unique: true,
    },
    batch:{ 
      type:String,
      required:true
    },
    dateOfEnroll:{ 
      type:String,
      required:true
    },
    EnrollingOfficer:{ 
      type:String,
      required:true
    },
    regimentNo:{ 
      type:String,
      required:true
    },
    rank:{ 
      type:String,
      required:true
    },
    incharge:{ 
      type:String,
      required:true
    },
    dob:{ 
      type:String,
      required:true
    },
    bg:{ 
      type:String,
      required:true
    },
    vegOrNonveg:{ 
      type:String,
      required:true,
      enum: ["Veg", "Nonveg"],
    },
     adharNo:{ 
      type:Number,
      required:true
    },
    password: { type: String, required: true },
     holdername:{
       type:String,
       required:true
     },
     bankName:{
      type:String,
      required:true
     },
     accNo:{
      type:Number ,
      required:true
     },
     branch:{
       type:String,
       required:true
     },
     ifscCode:{
       type:String,
       required:true
     },
     panNo:{ 
      type:Number,
      required:true
    },
    dept: { type: String, required: false },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
