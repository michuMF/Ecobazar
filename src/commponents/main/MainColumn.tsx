import Button from "../../UI/Button"
import bannerBig from "../../assets/main/Bannar Big.png"

const MainColumn = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${bannerBig})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
			className=' col-span-2 row-span-2 rounded-xl  text-white flex items-center  px-16  '>
			<div className=' w-1/2'>
				<h1 className='text-5xl font-semibold'>Fresh & Healthy Organic Food</h1>
				<div className='my-8 border-l-2 border-softPrimary px-2  '>
					<h3 className='text-xl mb-2'>
						Sale up to{" "}
						<span className='bg-warning font-semibold py-1 px-2 rounded-sm'>
							30% OFF
						</span>
					</h3>
					<p className='text-xs font-thin'>Free shipping an all your order</p>
				</div>
				<Button text='text-primary' background='bg-white' padding='px-7 py-3' />
			</div>
		</div>
	)
}

export default MainColumn
