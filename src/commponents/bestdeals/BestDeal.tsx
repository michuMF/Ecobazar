import Button from "../../UI/Button"
import { BestDealProps } from "./BestDeals"

const BestDeal = ({
	info,
	title,
	paragraph,
	span,
	time,
	background,
	color,
	spanClassName,
}: BestDealProps) => {
	return (
		<article
			className={`text-center space-y-6 pt-6 ${color} rounded-lg`}
			style={{
				backgroundImage: background,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			aria-label={info}>
			<h4>{info}</h4>
			<p className='text-4xl font-semibold'>{title}</p>
			{paragraph && (
				<p>
					{paragraph} <span className={spanClassName}>{span}</span>
				</p>
			)}
			{time && <p className='text-3xl'>{time}</p>}
			<div className='flex justify-center'>
				<Button text='text-primary' background='bg-white' padding='px-7 py-3' />
			</div>
		</article>
	)
}

export default BestDeal
