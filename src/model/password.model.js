import mongoose from 'mongoose';

const passwordSchema = new mongoose.Schema({
    password: String,
});


const PasswordModel = mongoose.models.Password || mongoose.model("Password", passwordSchema);
export { PasswordModel };