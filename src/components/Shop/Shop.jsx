import { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('products.json')
			.then(res => res.json())
			.then(data => setProducts(data))
	}, [])

	useEffect(() => {
		const storedCart = getShoppingCart();
		const savedCart = [];

		// step-1 get id
		for (const id in storedCart) {
			// step-2 get the product using id
			const addedProduct = products.find(product => product.id === id);

			// step-3 get quantity in the product
			if (addedProduct) {
				const quantity = storedCart[id];
				addedProduct.quantity = quantity;

				// step-4 add the addedProduct to the saved cart
				savedCart.push(addedProduct);
			}

		}
		// step-5 set the cart
		setCart(savedCart);

	}, [products])

	const handleAddToCart = (product) => {
		let newCart = [];
		const exists = cart.find(pd => pd.id === product.id);
		if (!exists) {
			product.quantity = 1;
			newCart=[...cart,product]
		}
		else {
			exists.quantity = exists.quantity + 1;
			const remaining = cart.filter(pd.id !== product.id);
			newCart = [...remaining, exists];
		}
		
		// const newCart = [...cart, product];

		// if product doesn't exist in the cart, then set quantity=1 and if exist update the quantity by 1

		setCart(newCart);
		addToDb(product.id);
	}

	return (
		<div className='shop-container'>
			<div className='products-container'>
				{
					products.map(product => <Product
						key={product.id}
						product={product}
						handleAddToCart={handleAddToCart}
					></Product>)
				}


			</div>

			<div className="cart-container">
				<Cart
					cart={cart}
				></Cart>
			</div>
		</div>
	);
};

export default Shop;