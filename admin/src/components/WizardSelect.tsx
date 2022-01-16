import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useI18n } from 'iobroker-react/hooks';
import { DeviceOptions } from '../types/wizardTypes';

interface selectProps {
	children?: React.ReactNode;
	optionsList: DeviceOptions[] | undefined;
	name: string;
	value?: string;
	i18n?: string;
	minWidth?: number;
	maxWidth?: number;
	width?: number;
	onChange: any;
}

const selectItem = (list) => {
	const { translate: _ } = useI18n();
	const menuItem: JSX.Element[] = [];
	for (const key in list) {
		menuItem.push(
			<MenuItem
				disabled={list[key].disabled ? list[key].disabled : false}
				key={key + list[key].title}
				value={list[key].label}
			>
				{list[key].i18n ? `${_(list[key].i18n)}` : `${list[key].title}`}
			</MenuItem>,
		);
	}
	return menuItem;
};

export const WizardSelect: React.FC<selectProps> = (props) => {
	const { translate: _ } = useI18n();

	const handleOnChange = (event) => {
		// setState({ ...state, [event.target.name]: event.target.value });
		props.onChange(event);
	};

	return (
		<React.Fragment>
			<Box
				sx={{
					minWidth: props.minWidth ? props.minWidth + 'px' : '120px',
					maxWidth: props.maxWidth ? props.maxWidth + 'px' : '300px',
					width: props.width ? props.width + 'px' : '250px',
				}}
			>
				<FormControl>
					<InputLabel id={`${props.name}-select-label`}>{props.i18n ? _(props.i18n) : props.name}</InputLabel>
					<Select
						labelId={`${props.name}-select-label`}
						id={props.name}
						name={props.name}
						value={props.value}
						label={props.i18n ? _(props.i18n) : props.name}
						onChange={handleOnChange}
						sx={{ width: 250 }}
					>
						{selectItem(props.optionsList)}
					</Select>
				</FormControl>
			</Box>
		</React.Fragment>
	);
};
