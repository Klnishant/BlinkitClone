import mongoose, {Schema as schema} from "mongoose";

const productSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount:{
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
        required: true,
    },
    expiry:{
        type: Date,
        required: true
    },

},
{
    timestamps: true,
}
);

export const Product = mongoose.model("Product", productSchema);