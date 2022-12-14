const mongoose = require("mongoose");
const userSchema = mongoose.Schema({

  user_name: { 
    type: String, 
    require: true 
  },
  lastname: { 
    type: String, 
    require: true 
  },
  email: { type: String, 
    unique: true 
  },
  password: {
    type: Object,
    require: true,
  },
  role: { 
    type: String, 
    require: true 
  },
  active: { 
    type: Boolean, 
    require: true 
  },
  avatar: { 
    type: String, 
    require: true 
  },
  
  
});

module.exports = mongoose.model("User", userSchema);