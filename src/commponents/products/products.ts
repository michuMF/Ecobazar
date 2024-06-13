import BigPotatoes from "../../assets/popularProduct/BigPotatoes.png"
import ChineseCabbage from "../../assets/popularProduct/ChineseCabbage.png"
import Eggplant from "../../assets/popularProduct/Eggplant.png"
import FreshIndianMalta from "../../assets/popularProduct/FreshIndianMalta.png"
import GreenApple from "../../assets/popularProduct/GreenApple.png"
import GreenLettuce from "../../assets/popularProduct/GreenLettuce.png"
import Corn from "../../assets/popularProduct/Corn.png"
import FreshCauliflower from "../../assets/popularProduct/FreshCauliflower.png"
import GreenCapsicum from "../../assets/popularProduct/GreenCapsicum.png"
import GreenChili from "../../assets/popularProduct/GreenChili.png"

export type PopularProductsType = {
	name: string
	price: number
	icon: string
	discount?: number
	rating: number
}

export const popularProducts: PopularProductsType[] = [
	{
		name: "Green Apple",
		price: 14.99,
		discount: 20.99,
		rating: 4,
		icon: GreenApple,
	},
	{
		name: "Fresh Indian Malta",
		price: 20.0,

		rating: 4,
		icon: FreshIndianMalta,
	},
	{
		name: "Chinese cabbage",
		price: 12.0,
		rating: 4,
		icon: ChineseCabbage,
	},
	{
		name: "Green Lettuce",
		price: 9.0,

		rating: 4,
		icon: GreenLettuce,
	},
	{
		name: "Eggplant",
		price: 34.0,

		rating: 4,
		icon: Eggplant,
	},
	{
		name: "Big Potatoes",
		price: 20.0,

		rating: 4,
		icon: BigPotatoes,
	},
	{
		name: "Corn",
		price: 20.0,

		rating: 4,
		icon: Corn,
	},
	{
		name: "Fresh Cauliflower",
		price: 12.0,

		rating: 4,
		icon: FreshCauliflower,
	},
	{
		name: "Green Capsicum",
		price: 9.0,
		discount: 20.99,
		rating: 4,
		icon: GreenCapsicum,
	},
	{
		name: "Green Chili",
		price: 14.99,
		discount: 20.99,
		rating: 4,
		icon: GreenChili,
	},
]
