import { Box, Flex } from '@chakra-ui/layout';
import React, { ReactElement } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { CartItem } from '../../../Interfaces/PizzaInterface';

interface Props {}

const Navbar = (props: Props): ReactElement => {

	const cartItems: CartItem[] = useSelector((state:RootStateOrAny) => state.cart.cartItems)
	console.log(cartItems);
	
	

	return (
		<Flex justify="space-between" alignItems="center" boxShadow="dark-lg" h={'60px'}>
			<Box marginLeft={10}>
				<a href="!#">PizzaFabro</a>
			</Box>
			<Box marginRight={10}>
				<Box display="inline-block">
					<a href="!#">Login</a>
				</Box>
				<Box display="inline-block" marginLeft="5">
					<a href="!#">{`Cart ${cartItems.length}`}</a>
				</Box>
			</Box>
		</Flex>
	);
};

export default Navbar;
