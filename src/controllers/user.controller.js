import User from "../models/User";

export const createUser = (req,res)=>{
    res.status(200).json({message:"creating user"})

}

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(201).json(users);
};