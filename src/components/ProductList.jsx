export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 1, inStock: true },
  { id: 2, name: 'Milk', category: 'Dairy', price: 2.5, inStock: false },
]

const ProductList = ({ selectedCategory, addToCart }) => {
  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === selectedCategory
        )

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 && (
        <p>No products available</p>
      )}

      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className={`card ${!product.inStock ? 'outOfStock' : ''}`}
        >
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
          <button
            data-testid={`product-${product.id}`}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
