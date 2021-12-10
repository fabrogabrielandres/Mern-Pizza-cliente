export interface CartItem {
	name:string,
	_id:any
	image:string
	prices:Price[]
	price:number
	quantify:number
}
export interface Pizza {
	name: string;
	varients: Varient[];
	prices: Price[];
	category: string;
	image: string;
	description: string;
	_id?: any;
}

export interface Price {
	small: number;
	medium: number;
	large: number;
}

export enum Varient {
	Large = 'large',
	Medium = 'medium',
	Small = 'small'
}
