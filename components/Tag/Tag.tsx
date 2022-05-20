import {  TagProps } from './Tag.props';
import styles from './Htag.module.css';
import cn from 'classnames';

export const Tag = ({size, children, color = 'ghost', className, ...props}: TagProps):JSX.Element => {
	return(
		<p className={cn(styles.p,{
			[styles.small]: size === 'small',
			[styles.medium]: size === 'medium',
			[styles.ghost]: color === 'ghost',
			[styles.red]: color === 'red',
			[styles.gray]: color === 'gray',
			[styles.green]: color === 'green',
			[styles.primary]: color === 'primary',
		})}>{children}</p>
	)
}