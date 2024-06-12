import group from "../../assets/featured/group.svg"
import truck from "../../assets/featured/truck.svg"
import packageImg from "../../assets/featured/package.svg"
import headphone from "../../assets/featured/headphone.svg"
import Category from "./Feature"

export type FeaturedProps = {
	name: string
	icon: string
	info: string
}

const featured: FeaturedProps[] = [
	{
		name: "Free Shipping",
		icon: truck,
		info: "Free Shipping on all your order",
	},
	{
		name: "Customer Support 24/7",
		icon: headphone,
		info: "Instant access to Support",
	},
	{
		name: "100% Secure Payment",
		icon: group,
		info: "we ensure your money is save",
	},
	{
		name: "Money-Back Guarantee",
		icon: packageImg,
		info: "30 Days Money-Back Guarantee",
	},
]

const Featured = () => {
	return (
		<section
			aria-label='featured'
			style={{ boxShadow: " 0px 0px 10px -7px rgba(66, 68, 90, 1)" }}
			className='grid grid-cols-4  container mx-auto mt-6  py-5 rounded-xl px-10 '>
			{featured.map(item => (
				<Category key={item.name} {...item} />
			))}
		</section>
	)
}

export default Featured
