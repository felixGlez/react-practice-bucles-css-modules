import { v4 } from 'uuid';
import Card from './components/card/Card';
import CardsContainer from './components/cards-container/CardsContainer';
import { CARDS_INFO } from './constants/cards-info';

const App = () => {
	return (
		<>
			{/* <CardsContainer>
				<Card icon='/images/icon-sedans.svg' title='SEDANS' bgColor='orange' />
				<Card icon='/images/icon-suvs.svg' title='SUVS' bgColor='blue' />
				<Card icon='/images/icon-luxury.svg' title='LUXURY' bgColor='green' />
			</CardsContainer> */}

			{/* En vez de pintarlos así, hay que crear un bucle, y los parámetros de Cards los guardamos en /constants */}

			<CardsContainer>
				{CARDS_INFO.map(card => (
					<Card
						key={v4()}
						icon={card.icon}
						title={card.title}
						color={card.bgColor}
					/>
				))}
			</CardsContainer>
		</>
	);
};

export default App;
