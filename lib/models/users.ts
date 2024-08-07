import {model,models, Schema} from 'mongoose'



const userSchema = new Schema({
    email:{type:'string',unique:true,require},
    username:{type:'string',unique:true,require},
    password:{type:'string',require}
},
{
    timestamps:true
}
)

const User = models.User || model('User',userSchema)

export default User;