import { Box, Flex } from '@chakra-ui/layout';
import React, { ReactElement } from 'react';

interface Props {}

const Navbar = (props: Props): ReactElement  => {
	return (
		<Flex justify="space-between" alignItems="center" boxShadow="dark-lg" h={'60px'}>
			<Box marginLeft={10}>
				<a>PizzaFabro</a>
			</Box>
			<Box marginRight={10}>
				<Box display="inline-block">
					<a>Login</a>
				</Box>
				<Box display="inline-block" marginLeft="5">
					<a>Cart</a>
				</Box>
			</Box>
		</Flex>
	);
};

export default Navbar;
