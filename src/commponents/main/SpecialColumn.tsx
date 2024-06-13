import bannerSpecial from "../../assets/main/banner-special.png"
import Button from "../../UI/Button"
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

			<Button text='text-primary' className='mt-6 ' />
		</div>
	)
}

export default SpecialColumn
