import mongoose, {Schema as schema} from "mongoose";

const cartSchema = new schema({
    product_id: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Product" 
    }],
    quantity: {
        type: Number,
        required: true,
        default: 1,
    }
});