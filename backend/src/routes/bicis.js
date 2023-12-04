const {Router} = require('express');
const router = Router();
const {getBicis, createBici, getBici, deleteBici, updateBici} = require("../controllers/bicis.controller");
router.route('/')
    .get(getBicis)
    .post(createBici);

router.route('/:id')
    .get(getBici)
    .put(updateBici)
    .delete(deleteBici);
module.exports = router; 