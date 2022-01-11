import React from 'react';
import { Button, Flex, Img, VStack } from '@chakra-ui/react';
import { Text, Box } from '@chakra-ui/layout';
import { RootStateOrAny, useSelector } from 'react-redux';
import { CartItem } from '../../../Interfaces/PizzaInterface';
import { HiMinusCircle, HiPlusCircle, HiTrash } from 'react-icons/hi';

export const CartScreen = () => {
	const cartItems: CartItem[] = useSelector((state: RootStateOrAny) => state.cart.cartItems);
	console.log(cartItems);
	

	return (
		<Flex mt={'5%'}>
			{/* Cart  */}
			<Flex w="75%" m={2} flexDir="column">
				<Text mb={4}>My Cart</Text>
				{cartItems.length > 0 ? (
					cartItems.map((items, idx) => (
						<Flex
							justifyContent={'space-between'}
							flexWrap={'wrap'}
							h={'20vh'}
							mt={'2%'}
							alignItems={'center'}
						>
							<VStack width={'80%'} alignItems={'flex-start'}>
								<Text>{`${items.name} []`}</Text>
								<Text>{`Price: ${items.quantify} * ${items.prices[0][items.varient]} = ${items.price}`}</Text>
							</VStack>
							<Flex alignItems={'center'} h={'100px'} width={'20%'}>
								<Box width={'100%'}>
									<Img
										h={'100%'}
										width={'100%'}
										src={items.image}
										alt={items.name}
										objectFit={'contain'}
									/>
								</Box>
								<HiTrash size={'70%'} color="red" />
							</Flex>
							<Flex width={'100%'} justifyContent={'flex-start'} alignItems={'center'}>
								<HiPlusCircle size={'5%'} color="green" />
								<Text mx={'3%'} color={'red'}>
									Quantify
								</Text>
								<HiMinusCircle size={'5%'} color="red" />
							</Flex>
						</Flex>
					))
				) : (
					<Text>carrito vacio</Text>
				)}
			</Flex>
			<Flex flexDir="column" m={'5%'}>
				<Text mb={10}>{`SubTotal = ${'0000'}`}</Text>
				<Button background="red" color="white">
					Pay Now
				</Button>
			</Flex>
		</Flex>
	);
};
