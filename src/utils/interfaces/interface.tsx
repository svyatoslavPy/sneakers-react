export interface Props {
	children: React.ReactNode
}

export interface CardSnikerI {
	id: string
	name: string
	price: number
	img: string
	bg: string
}

export interface snikersSliceI {
	snikersData: Array<string | number>
	snikersFilteredResults: Array<string | number>
	selectedSnikersData: Array<string | number>
	filterFlag: boolean
	cartData: Array<string | number>
}

export interface SelectedSnikersData {
	sneaker1?: string
	sneaker2?: string
	sneaker3?: string
	name?: string
	price?: number
	id?: any
}

export interface CartCartItemI {
	id: number
	sneaker1: string
	price: number
	name: string
	size: number
}
