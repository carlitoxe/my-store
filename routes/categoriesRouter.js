const express = require('express');
const CategoriesService = require('./../services/categoriesService')
const service = new CategoriesService();

const router = express.Router();

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id);
  res.json(category);
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
/*     name: 'Product 2',
    price: 2000 */
})
})

module.exports = router;
