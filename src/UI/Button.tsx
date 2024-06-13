import { GoArrowRight } from "react-icons/go"

type ButtonProps = {
	text: string
	background?: string
	className?: string
	padding?: string
}

const Button = ({ text, background, className, padding }: ButtonProps) => {
	return (
		<button
			className={`${background}
				 ${text} flex-center gap-2 rounded-full font-semibold ${padding} ${className}`}>
			Shop Now <GoArrowRight />
		</button>
	)
}

export default Button
