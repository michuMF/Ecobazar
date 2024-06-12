import heart from "../../assets/header/heart.svg"
import basket from "../../assets/header/basket.svg"
const Icons = () => {
	return (
		<div className='flex-center gap-4 h-full '>
			<img width={25} src={heart} alt='heart icon' />
			<div className='w-[1px]  h-[20px] bg-slate-300'></div>
			<img width={25} src={basket} alt='basket icon' />
			<div>
				<p className='text-[11px]'>Shopping cart:</p>
				<p className='text-sm font-semibold'>$57.00</p>
			</div>
		</div>
	)
}

export default Icons
