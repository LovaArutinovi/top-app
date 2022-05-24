import { useState } from 'react';
import styles from './Rating.module.css';
import { RatingProps }  from './Rating.props';

export const Rating = ({isEditable = false, rating, className, setRating, ...props}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) =>{
			return(
				<></>
			)
		})
	}

	return (
		<div {...props}>

		</div>
	)
}