import { v4 } from 'uuid';
import Card from './components/card/Card';
import CardsContainer from './components/cards-container/CardsContainer';
import { CARDS_INFO } from './constants/cards-info';

// const sayHello = true

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
						text={card.text}
					/>

					// Hay ocasiones en las que hay demasiadas propiedades, por lo que podríamos pintar todas las propiedades de cada Card con '{...card}'. Son equivalentes.
					// <Card
					// key={v4()}
					// {...card}
					// />
				))}
			</CardsContainer>

			{/* IMPORTANTE
			
			En React no se puede usar un if, ni for, ni for of, porque React siempre espera que se devuelva algo. Por eso hemos utilizado un map, porque devuelve información.

			SI NECESITAMOS HACER UN CONDICIONAL, LO HAREMOS CON CONDICIONAL TERNARIO:

			return (
				<>
				sayHello ? <h1>HOLA</h1> : <h1>ADIÓS</h1>
				</>
			) */}
		</>
	);
};

export default App;
