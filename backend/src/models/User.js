import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    firstName : {
        type : String ,
        required: true ,
        trim : true ,
        minlength : 3 ,
        maxlength : 50 
    } ,
    lastName : {
        type : String ,
        required : true ,
        trim : true ,
        minlength : 3 ,
        maxlength : 50
    } ,
    email : {
        type : String ,
        required : true ,
        trim : true ,
    } ,
    password : {
        type : String ,
        trim : true ,
        required : true
    } ,
    role : {
        type : String ,
        enum : ["customer" , "admin"] ,
        default : "customer"
    }
} , {
    timestamps : true
})

userSchema.pre("save" , async function(next){
    if(!this.isModified("password")){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt); 
})

userSchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword , this.password);
}

export default mongoose.model("User" , userSchema);
