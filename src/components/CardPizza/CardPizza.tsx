import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/image';
import { Box, Flex, HStack } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import React from 'react';
import { Pizza } from '../../../Interfaces/PizzaInterface';

interface Props {
	pizza: Pizza;
}

export const CardPizza = ({ pizza }: Props) => {
	let valor = 'precio';

	return (
		<Flex w={'100%'} flexDir="column" maxW={'300px'} textAlign="center" boxShadow="xl">
			<h1>{pizza.name}</h1>
			<Img
				src={pizza.image}
				alt={pizza.name}
				pt={'15px'}
				h={'200px'}
				w={'200px'}
				objectFit="cover"
				alignSelf="center"
			/>
			<Flex justifyContent="space-around" >
				<Box>
					<p>Varientes</p>
					<Select size="sm">
						{pizza.varients.map((varient, idx) => {
							return (
								<option key={idx} value={varient}>
									{varient}
								</option>
							);
						})}
					</Select>
				</Box>
				<Box>
					<p>Quantify</p>
					<Select size="sm">
						{[ ...Array(10).keys() ].map((i, idx) => {
							return <option value={i + 1}>{i + 1}</option>;
						})}
					</Select>
				</Box>
			</Flex>
			<Flex justify="space-around" alignItems="center" m="20px 0 20px 0" >
				<span>{`Price: $${valor}`}</span>
				<Button bg="red" color="white" size="md">
					Add To Cart
				</Button>
			</Flex>
		</Flex>
	);
};
