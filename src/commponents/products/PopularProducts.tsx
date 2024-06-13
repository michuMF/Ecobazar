import Product from "./Product"
import { popularProducts } from "./products"

const PopularProducts = () => {
	return (
		<section
			id='popular-products'
			aria-label='popular-products'
			className='container mx-auto mt-12  '>
			<h2 className='text-3xl font-semibold'>Popular Products</h2>
			<div className='grid grid-cols-5 '>
				{popularProducts.map(item => (
					<Product key={item.name} {...item} />
				))}
			</div>
		</section>
	)
}

export default PopularProducts
