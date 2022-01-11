import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { ReactElement } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../../Interfaces/PizzaInterface';

interface Props {}

const Navbar = (props: Props): ReactElement => {
	const cartItems: CartItem[] = useSelector((state: RootStateOrAny) => state.cart.cartItems);
	let navigate = useNavigate();

	return (
		<Flex justify="space-between" alignItems="center" boxShadow="dark-lg" h={'60px'}>
			<Box marginLeft={10}>
				<Text onClick={() => navigate('/')} cursor={"pointer"}>Pizza Fabro</Text>
			</Box>
			<Box marginRight={10}>
				<Box display="inline-block">
					<Text onClick={() => navigate('/login')} cursor={"pointer"}>Login</Text>
				</Box>
				<Box display="inline-block" marginLeft="5">
					<Text onClick={() => navigate('/cart')} cursor={"pointer"}>{`Cart ${cartItems.length}`}</Text>
				</Box>
			</Box>
		</Flex>
	);
};

export default Navbar;
