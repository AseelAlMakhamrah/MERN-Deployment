const { request, response } = require('express');
const {Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "there is an product"
    });
}
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
// module.exports.findpro = (request, response) => {
//     Product.find()
//         .then(product => response.json(product))
//         .catch(err => response.json(err));
// }
module.exports.getAllProduct =( request,response) =>{
    Product.find({})
    .then(products => response.json(products))
    .catch(err => response.json(err));
}
module.exports.getProduct =( request,response) =>{
    Product.findOne({_id:request.params.id})
    .then(product => response.json(product))
    .catch(err => response.json(err));
}

module.exports.updateProduct =( request,response) =>{
    Product.findOne({_id:request.params.id}, request,body ,{new:true})
    .then(product => response.json(product))
    .catch(err => response.json(err));
}
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({_id: request.params.id})
    .then(product => request.json(product))
    .catch(err => request.json(err));
}