import { Props as ProductButtonProps } from '../components/ProductButton';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface PropsProductContext {
	product: Product;
	counter: number;
	maxCount?: number;
	increaseBy: (value: number) => void;
}

export interface PropsProductCardHOC {
	({ children, product }: ProductCardProps): JSX.Element;
	Buttons: (Props: ProductButtonProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface OnChangeArgs {
	product: Product;
	count: number;
}

export interface ProductInCard extends Product {
	count: number;
}

export interface IntialValues {
	count?: number;
	maxCount?: number;
}

export interface ProductCardHandlers {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;

	increaseBy: (value: number) => void;
	reset: () => void;
}
