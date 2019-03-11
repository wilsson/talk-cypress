const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();
const uuidv1 = require('uuid/v1');

const createProduct = (product) => {
    const newProduct = {
        id: uuidv1(),
        name: product.name,
        picture: product.picture
    };

    if (!fs.existsSync(__dirname + '/db.json')) {
        fs.writeFileSync(__dirname + '/db.json', JSON.stringify({ products: [newProduct] }, null, 4));
        return newProduct;
    }
    const data = fs.readFileSync(__dirname + '/db.json', 'utf8');
    const dataparse = JSON.parse(data);
    fs.writeFileSync(__dirname + '/db.json', JSON.stringify({ products: [...dataparse.products, newProduct] }, null, 4));
    return newProduct;
};

app.use(express.static(__dirname + '/uploads'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
});

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/create', (req, res) => {
    const data = req.body;
    console.log('req create', data);
    const product = createProduct(data);
    res.send({ data: product });
});

app.post('/upload', upload.single('file'), (req, res) => {
    console.log('req upload', req.file.filename);
    res.send({
        data: {
            name: req.file.filename
        }
    })
});

app.get('/list', (req, res) => {
    let data = {};
    try {
        const products = fs.readFileSync(__dirname + '/db.json', 'utf8');
        console.log('products', JSON.parse(products).products);
        data = JSON.parse(products).products;
    } catch (e) {
        data = []
    }
    res.send({ data });
});

app.get('/product/:id', (req, res) => {
    console.log('req.params', req.params);
    let data = {};
    try {
        const products = fs.readFileSync(__dirname + '/db.json', 'utf8');
        console.log('products', JSON.parse(products).products);
        const product = JSON.parse(products).products.filter((product) => {
            return product.id === req.params.id
        });
        data = product;
        console.log('find product:', data);
    } catch (e) {
        data = {}
    }
    res.send({ data });
})

app.listen(3000, () => {
    console.log('ready in http://localhost:3000');
});