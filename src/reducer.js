export const initialState = {
	basket: [
		{
			id: '12321341',
			title:
				'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
			price: 12.99,
			rating: 4,
			image:
				'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
		},
		{
			id: '12321341',
			title:
				'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
			price: 12.99,
			rating: 4,
			image:
				'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
		},
	],
	user: null,
};

function reducer(state, action) {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			// logic for adding item to basket
			return { ...state, basket: [...state.basket, action.item] };
		case 'REMOVE_FROM_BASKET':
			let newBasket = [...state];

			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn("Can't remove product, Not in basket");
			}
			return { ...state, basket: newBasket };
		default:
			return state;
	}
}

export default reducer;
