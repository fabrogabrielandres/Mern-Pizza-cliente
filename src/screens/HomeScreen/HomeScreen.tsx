import { Flex } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { CardPizza } from '../../components/CardPizza/CardPizza';
import { getAllPizzasReducer, PizzaState } from '../../features/pizzaSlice/pizzaSlice';

export const HomeScreen = () => {
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getAllPizzasReducer());
		},
		[ dispatch ]
	);

	const pizza: PizzaState = useSelector((state: RootStateOrAny) => state.pizza);
	const { error, pizzas } = pizza;

	return (
		<Flex flexDir="row" flexWrap={'wrap'} mt={'50px'}>
			{pizzas.length > 0 ? (
				pizzas.map((pizza, idx) => (
					<Flex key={idx} w={'30%'} m={'10px'} justifyContent="center">
						<CardPizza pizza={pizza} />
					</Flex>
				))
			) : error ? (
				<h1>algo se rompio</h1>
			) : (
				<h1>loading</h1>
			)}
		</Flex>
	);
};
