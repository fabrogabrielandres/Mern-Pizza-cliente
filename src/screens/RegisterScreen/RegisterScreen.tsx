import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Heading,
	FormErrorMessage,
	RadioGroup,
	Radio
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

export const RegisterScreen = () => {
	const navigate = useNavigate();
	const [ value, setValue ] = useState('password');
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			onSubmit={(values, actions) => {
				// actions.resetForm();
			}}
		>
			{(props) => (
				<Form>
					<Flex minH={'100vh'} align={'center'} justify={'center'}>
						<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
							<Stack align={'center'}>
								<Heading fontSize={'4xl'}>Register</Heading>
							</Stack>
							<Box rounded={'lg'} boxShadow={'lg'} p={8}>
								<Stack spacing={4}>
									<Field name="email">
										{({ field, form }) => (
											<FormControl isInvalid={form.errors.name && form.touched.name}>
												<FormLabel htmlFor="email">Email</FormLabel>
												<Input {...field} id="email" placeholder="email" type={'email'} />
												<FormErrorMessage>{form.errors.name}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Field name="password">
										{({ field, form }) => (
											<FormControl isInvalid={form.errors.password && form.touched.password}>
												<FormLabel htmlFor="password">Password</FormLabel>
												<Input {...field} id="password" type={value} placeholder="password" />
												<FormErrorMessage>{form.errors.password}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<RadioGroup value={value} onChange={(e) => setValue(e)}>
										<Stack direction="row">
											<Radio value="text">Show</Radio>
											<Radio value="password">hide</Radio>
										</Stack>
									</RadioGroup>

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
											type="submit"
										>
											Register
										</Button>
									</Stack>
								</Stack>
							</Box>
						</Stack>
					</Flex>
				</Form>
			)}
		</Formik>
	);
};
