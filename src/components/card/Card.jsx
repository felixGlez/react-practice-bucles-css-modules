import Button from '../button/Button';
import Icon from '../icon/Icon';
import Text from '../text/Text';
import Title from '../title/Title';
import style from './card.module.css';

const Card = props => {
	console.log(props);
	return (
		<div className={`${style.card} ${style[props.color]}`}>
			<Icon icon={props.icon} />
			<Title title={props.title} />
			<Text text={props.text} />
			<Button color={props.color} />
		</div>
	);
};

export default Card;
