import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, useColorModeValue } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import { useNavigate } from 'react-router-dom';

export const RegisterScreen = () => {
	const navigate = useNavigate();
	return (
		<Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Register</Heading>
				</Stack>
				<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
					<Stack spacing={4}>
						<FormControl id="email">
							<FormLabel>Email address</FormLabel>
							<Input type="email" />
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<Input type="password" />
							<FormLabel>Confirm Password</FormLabel>
							<Input type="confirmpassword" />
						</FormControl>
						<Stack spacing={10}>
							<Text
								textAlign={'center'}
								onClick={() => {
									navigate('/login');
								}}
								cursor={'pointer'}
							>
								Click Here To Login
							</Text>
							<Button
								bg={'orange.400'}
								color={'white'}
								_hover={{
									bg: 'orange.500'
								}}
							>
								Register
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};
