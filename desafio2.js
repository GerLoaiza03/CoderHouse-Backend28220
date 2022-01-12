const Container = require("./class/container");

const container = new Container();

container
.save({
    title: "Domine Javascript",
    price: 74000.00,
    thumbnail:
    "https://http2.mlstatic.com/D_NQ_NP_850241-MCO47683531430_092021-O.webp"
})
.then((result) => console.log(result.message));

container.getById(2).then((product) => console.log(product));
container.getAll();
// container.deleteById(3);
//container.deleteAll();