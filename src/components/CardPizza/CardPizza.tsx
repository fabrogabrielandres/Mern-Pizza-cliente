import React, {  useState } from 'react';
import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { Pizza } from '../../../Interfaces/PizzaInterface';
import {
	Modal,
	ModalBody,
	useDisclosure,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { processDataBeforeAdding } from './helpers';
import { addToCart } from '../../features/cartSlice/cartSlice';

interface Props {
	pizza: Pizza;
}

export const CardPizza = ({ pizza }: Props) => {
	const [ quantifyPizza, setQuantifyPizza ] = useState(1);
	const [ varientPizza, setVarientPizza ] = useState<string>('small');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const dispatch = useDispatch()
	
	const cartItem=processDataBeforeAdding(pizza,quantifyPizza,varientPizza) 
	
	return (
		<>
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
					onClick={onOpen}
					cursor="pointer"
				/>
				<Flex justifyContent="space-around">
					<Box>
						<p>Varientes</p>
						<Select
							size="sm"
							onChange={(e) => {
								setVarientPizza(e.target.value);
							}}
						>
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
						<Select
							size="sm"
							onChange={(e) => {
								setQuantifyPizza(parseInt(e.target.value));
							}}
						>
							{[ ...Array(10).keys() ].map((i, idx) => {
								return (
									<option key={idx} value={i + 1}>
										{i + 1}
									</option>
								);
							})}
						</Select>
					</Box>
				</Flex>
				<Flex justify="space-around" alignItems="center" m="20px 0 20px 0">
					<span>{`Price: $${pizza.prices[0][varientPizza] * quantifyPizza}`}</span>
					<Button bg="red" color="white" size="md" onClick={()=>dispatch(addToCart(cartItem))}>
						Add To Cart
					</Button>
				</Flex>
			</Flex>

			              { /* aca va el modal */}


			<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent textAlign="center">
						<ModalHeader>{pizza.name}</ModalHeader>
						<Img src={pizza.image}/>
						
						<ModalBody>
							<Text>{pizza.description}</Text>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme="red" mr={3} onClick={onClose}>
								Close
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
		</>
	);
};
