import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useI18n } from 'iobroker-react/hooks';

interface InputProps {
	children?: React.ReactNode;
	name: string;
	value: string;
	onChange: any;
	i18n?: string;
}

export const WizardInput: React.FC<InputProps> = (props) => {
	const { translate: _ } = useI18n();

	const handleOnChange = (event) => {
		// setState({ ...state, [event.target.name]: event.target.value });
		props.onChange(event);
	};

	return (
		<React.Fragment>
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					id={`outlined-${props.name}`}
					name={props.name}
					label={props.i18n ? _(props.i18n) : props.name}
					value={props.value}
					onChange={handleOnChange}
				/>
			</Box>
		</React.Fragment>
	);
};
