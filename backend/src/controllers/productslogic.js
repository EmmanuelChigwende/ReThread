async function GetProduct(req,res) {
    res.json("hie im get product")
}


async function GetProductById(req,res) {
    res.json("hie im get product by id")
}


export {GetProduct,GetProductById}