import { Box, Flex,  } from '@chakra-ui/layout';
import { ReactElement } from 'react';
import { Pizza } from '../../../Interfaces/PizzaInterface';
import { CardPizza } from '../../components/CardPizza/CardPizza';
import { pizzas } from '../../informacion';

export const HomeScreen = (): ReactElement => {
	
	
	return (
		<Flex flexDir="row" flexWrap={"wrap"} mt={"50px"}>
			{pizzas.map((pizza, idx) => (
				<Flex key={idx} w={"30%"} m={"10px"} justifyContent="center" >
					<CardPizza pizza={pizza as Pizza} />
				</Flex>
			))}
		</Flex>
	);
};
