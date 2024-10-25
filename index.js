const express = require("express")
const app = express()
const PORT = 5000
app.use(express.json())

// initialize server
app.listen(PORT, () => {
    console.log("Server running at port", PORT)
})

// endpoint for total price all products
app.post('/api/products-total', (req, res) => {

    try {
        const products = req.body;

        if (!Array.isArray(products)) {
            return res.status(400).json({ message: 'Invalid input: products should be an array' });
        }

        let totalValue = 0;

        products.forEach(product => {
            if (product.price && typeof(product.price === 'number')) {
                totalValue += product.price;
            }
        });

        return res.status(200).json({ totalValue });
    }
    catch (error) {
        return res.status(500).json({ message: `Products total error ${error.message}` })
    }
    
});

