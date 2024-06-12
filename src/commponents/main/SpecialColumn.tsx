import { GoArrowRight } from "react-icons/go"
import bannerSpecial from "../../assets/main/banner-special.png"
const SpecialColumn = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${bannerSpecial})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
			className='rounded-xl text-white flex-center justify-center flex-col gap-3 text-center px-10'>
			<p>BEST DEAL</p>
			<h2 className='text-4xl font-semibold'>
				Special Products Deal of the Month
			</h2>
			<button className='flex-center gap-2  font-semibold  text-primary mt-6'>
				Shop Now <GoArrowRight className='text-2xl' />
			</button>
		</div>
	)
}

export default SpecialColumn
