const { Router } = require("express");
const router = Router();

const productsRouter = require('./productsRouter')
const chatRouter = require('./chatRouter') //lo manejo desde app.js porque me da error
const fakerRouter = require('./fakerRouter')
const sessionRouter = require('./sessionRouter')
const desafio14Router = require('./desafio14Router')

router.use('/productos', productsRouter)
router.use('/chat', chatRouter)
router.use('/', fakerRouter)
router.use('/', sessionRouter)
router.use('/', desafio14Router)

module.exports = router;