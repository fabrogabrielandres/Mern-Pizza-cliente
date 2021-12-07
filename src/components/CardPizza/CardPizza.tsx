import { Img } from '@chakra-ui/image';
import { Box,  Flex, HStack, } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import React from 'react';
import { Pizza } from '../../../Interfaces/PizzaInterface';

interface Props {
	pizza: Pizza;
}

export const CardPizza = ({ pizza }: Props) => {
	console.log(pizza.prices);

	return (
		<Flex w={'100%'} flexDir="column" maxW={'300px'} textAlign="center">
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
			<HStack justifyContent={'space-between'} pt={'15px'}>
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
						{
							[...Array(10).keys()].map((i,idx)=>{
								return <option value={i+1}>{i+1}</option>
							})
						}
					</Select>
				</Box>
			</HStack>
		</Flex>
	);
};
