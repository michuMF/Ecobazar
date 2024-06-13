import bannerSale from "../../assets/main/Banner-sales.png"
import Button from "../../UI/Button"
const SaleColumn = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${bannerSale})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
			className='rounded-xl w-full'>
			<div className='w-1/2 px-8 mt-12'>
				<h2 className=' text-sm text-gray-9 '>
					SUMMER SALE
					<span className='text-4xl font-semibold   '> 75% OFF</span>
				</h2>
				<p className='text-xs text-gray-6 mt-3 mb-6'>Only Fruit & Vegetables</p>

				<Button text='text-primary' className='flex-center gap-2   ' />
			</div>
		</div>
	)
}

export default SaleColumn
