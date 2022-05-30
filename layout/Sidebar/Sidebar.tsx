import {SidebarProps} from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import React from 'react';

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
	return(
		<>
			<div {...props}>
				Sidebar
			</div>
		</>
	)

}