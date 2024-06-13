import { PopularProductsType } from "./products"
import basket from "../../assets/header/basket.svg"
import { RiStarSFill, RiStarSLine } from "react-icons/ri"
const Product = ({
	name,
	icon,
	price,
	rating,
	discount,
}: PopularProductsType) => {
	const starArray = new Array(5).fill(0)
	const ratingArray = new Array(rating).fill(0)

	return (
		<div className='flex flex-col gap-2 items-center border relative hover:border-primary cursor-pointer hover:shadow hover:shadow-primary group '>
			{discount ? (
				<div className='absolute bg-danger text-white left-3 top-3 px-3 py-[3px] rounded-md text-sm'>
					Sale {(((discount - price) / discount) * 100).toFixed(0)}%
				</div>
			) : null}
			<img width={300} src={icon} alt={name} className='w-full ' />
			<div className='flex items-center justify-between  w-full px-3 mt-3 mb-[30px] '>
				<div className='relative'>
					<p className='text-gray-7 group-hover:text-primary'>{name}</p>
					<div className='flex-center gap-2 '>
						<p className='text-gray-9 font-medium text-lg'>${price}</p>
						{discount ? (
							<p className='text-gray-4 line-through text-lg'>${discount}</p>
						) : null}
					</div>

					<div className='absolute left-0 -bottom-4 flex text-gray-3'>
						{starArray.map(() => (
							<RiStarSLine />
						))}
					</div>
					<div className='absolute left-0 -bottom-4 flex text-warning'>
						{ratingArray.map(() => (
							<RiStarSFill />
						))}
					</div>
				</div>

				<button className='bg-gray-0 p-4 rounded-full group-hover:bg-primary group-hover:text-white'>
					<svg
						className='stroke-black group-hover:stroke-white'
						width='20'
						height='19'
						viewBox='0 0 28 27'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M8.33333 10.6667H4.08333L1.25 26.25H26.75L23.9167 10.6667H19.6667M8.33333 10.6667V6.41667C8.33333 3.28705 10.8704 0.75 14 0.75V0.75C17.1296 0.75 19.6667 3.28705 19.6667 6.41667V10.6667M8.33333 10.6667H19.6667M8.33333 10.6667V14.9167M19.6667 10.6667V14.9167'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default Product
