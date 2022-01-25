const rescue = require('express-rescue');
const router = require('express').Router({ mergeParams: true });
const {
  readAllProducts,
  readProductsByTerm,
  readProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers');

router.get('/', rescue(readAllProducts));
router.get('/search', rescue(readProductsByTerm));
router.get('/:id', rescue(readProductById));
router.post('/', rescue(createProduct));
router.put('/:id', rescue(updateProduct));
router.delete('/:id', rescue(deleteProduct));

module.exports = router;