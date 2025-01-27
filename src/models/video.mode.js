import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videoFile:{
            type:String,  //cloudinary url
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        Owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)   
//aggregation pipeline is udeful for saving the history

//bcrypt for password managing and jwt(jsonwebtoken)fot tokens

export const Video= mongoose.model("Video",videoSchema)