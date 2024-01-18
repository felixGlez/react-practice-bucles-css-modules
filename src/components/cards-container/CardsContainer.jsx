import style from './cards-container.module.css';

const CardsContainer = props => {
	return <div className={style.container}>{props.children}</div>;
};

export default CardsContainer;
