import { Pizza, CartItem } from '../../../Interfaces/PizzaInterface';

export const processDataBeforeAdding = (pizza: Pizza, quantify: number, varient: string):CartItem => {
	let cartItem = {
		name: pizza.name,
		_id: pizza._id,
		image: pizza.image,
		prices: pizza.prices,
		price: pizza.prices[0][varient] * quantify,
		quantify
	};
	return cartItem
};
