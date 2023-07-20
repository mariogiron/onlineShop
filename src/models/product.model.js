const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    department: String,
    available: Boolean
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

productSchema.virtual('priceTaxes').get(function () {
    return this.price * 1.21;
});

productSchema.statics.sameDepartment = function (dept) {
    return model('product').find({ department: dept });
};

module.exports = model('product', productSchema);