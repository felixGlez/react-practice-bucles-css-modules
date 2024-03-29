import style from './button.module.css';

const Button = props => {
	return (
		<button className={`${style.button} ${style[props.color]}`}>
			Learn More
		</button>
	);
};

export default Button;
