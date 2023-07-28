function filterProductsByCategory(products){
    return function(category) {
        return products.filter(function(product){
            return product.category === category;
        });
        
    };
}
// Array of products
var products = [
    { name: 'Product 1', category: 'Electronics'},
    { name: 'Product 2', category: 'Clothing'},
    { name: 'product 3', category: 'teaching'},
    { name: 'product 4', category: 'system'},
]
    // Create a filter function for 'Electronics' category

    var electronicsFilter = filterProductsByCategory(products)('Electronics');
    console.log(electronicsFilter);
    
    // Output: [{ name: 'Product 1', category: 'Electronics'},{name:'Product 3', category: 'Electronics'}]
