import BestDeal from "./BestDeal"

import background1 from "../../assets/bestdeals/BestDeal1.png"
import background2 from "../../assets/bestdeals/BestDeal2.png"
import background3 from "../../assets/bestdeals/BestDeal3.png"
export type BestDealProps = {
	info: string
	title: string
	time?: string
	paragraph?: string
	span?: string
	background: string
	color?: string
	spanClassName?: string
}

const bestDealsArray: BestDealProps[] = [
	{
		info: "BEST DEALS",
		title: "Sales of the Month",
		time: "00 : 02 : 18 : 46",
		background: `url(${background1})`,
		color: "text-white",
	},
	{
		info: "85% FAT FREE",
		title: "Low-Fat Meat",
		paragraph: "Started at",
		span: "$79.99",
		background: `url(${background2})`,
		color: "text-white",
		spanClassName: "text-warning font-semibold	",
	},
	{
		info: "SUMMER SALE",
		title: "100% Fresh Fruit",
		paragraph: "Up to",
		span: "64% OFF",
		background: `url(${background3})`,
		spanClassName: `text-yellow-400 bg-gray-8 font-semibold rounded-md px-2 py-1`,
	},
]

const BestDeals = () => {
	return (
		<section
			id='best-deals'
			aria-label='best deals'
			className='container mx-auto grid grid-cols-3 h-[536px] gap-6 mt-12'>
			{bestDealsArray.map(item => (
				<BestDeal key={item.info} {...item} />
			))}
		</section>
	)
}

export default BestDeals
