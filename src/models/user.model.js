import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"  //for password encryption

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
            index:true   //for enabling searching feild
        },
        email:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String,  //use cloudinary url
            required:true
        },
        coverImage:{
            type:String,
        },
        watchHistory:[    //using array to store the video id for history
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type:String,
            required:[true,'Password is required']
        },
        refreshToken:{
            type:String
        }


    },
    {
        timestamps:true
    }
);

//use pre hook for encrypting password just before saving data
//next is used for middle ware
userSchema.pre("save", async function (next) {
    if(!this.isModified("password"))return next();  //agar password field modify nhi hua to next

                                //(kisko,kitne round encrypt)
    this.password= bcrypt.hash(this.password,10)
    next()  
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
    jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken=function(){
    jwt.sign(
        {
            _id:this._id,
           
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)

//jwt is a bearer token(jiske pass ye token hai usko mai data bhej skta hu)