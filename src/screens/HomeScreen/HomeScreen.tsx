import { Flex } from '@chakra-ui/layout';
import {  useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Pizza } from '../../../Interfaces/PizzaInterface';
import { CardPizza } from '../../components/CardPizza/CardPizza';
import { getAllPizzasReducer } from '../../features/pizzaSlice/pizzaSlice';




export const HomeScreen = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllPizzasReducer());
	}, [dispatch])
	
	const pizzas:Pizza[] = useSelector((state:RootStateOrAny) => state.pizza.pizzas);

	return (
		<Flex flexDir="row" flexWrap={'wrap'} mt={'50px'}>
			{pizzas.map((pizza, idx) => (
				<Flex key={idx} w={'30%'} m={'10px'} justifyContent="center">
					<CardPizza pizza={pizza} />
				</Flex>
			))}
		</Flex>
	);
};
