import strictTransportSecurity from 'helmet/dist/middlewares/strict-transport-security';
import {Schema,model} from 'mongoose';

const tweetSchema = Schema({
    name:String,
    category:String,
    price:Number,
    imgURL:String    
},{
    timestamps:true,
    versionKey:false
})

export default model('Tweet',tweetSchema);