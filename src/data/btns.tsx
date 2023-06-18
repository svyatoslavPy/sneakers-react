export const btn = [
	{ name: 'Newest' },
	{ name: 'Most Popular' },
	{ name: 'Lowest Price' },
	{ name: 'Highest Price' },
]

export const sizeArray = [
	3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 11.0, 11.5,
	12.0, 12.5, 13.0, 13.5, 14.0, 14.5, 15.0, 16.0, 17.0, 18.0,
]

export const sizeData = sizeArray.map(item => ({
	size: item,
}))
