const Container = require("./class/container");

const container = new Container();

async function test(){
    await container
    .save({
        title: "Domine Javascript",
        price: 74000.00,
        thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_850241-MCO47683531430_092021-O.webp"
    })
    .then((result) => console.log(result.message));

    await container.getById(1).then((result) => console.log(result));

    await container.getAll();

    await container.getProductoRandom().then((result) => console.log(result.payload));
    
    // await container.deleteById(3);

    // await container.deleteAll()
}  

test();