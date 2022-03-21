import FileContainer from '../../containers/FileContainer.js'
// import FileContainer22 from './data/products.txt'

class ProductDAOFile extends FileContainer {
    constructor() {
         super('./data/products.txt', 'utf-8')
    }
}

export default ProductDAOFile