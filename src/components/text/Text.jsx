import style from './text.module.css';

const Text = props => {
	return <p className={style.text}>{props.text}</p>;
};

export default Text;
