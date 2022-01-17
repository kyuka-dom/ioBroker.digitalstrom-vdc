import React from 'react';
import { useDialogs } from 'iobroker-react';
import Button from '@mui/material/Button';
import { useI18n } from 'iobroker-react/hooks';
import { Grid } from '@mui/material/';

interface selectIDProps {
	children?: React.ReactNode;
	name: string;
	value: string | string[] | undefined;
	i18n?: string;
	onChange: any;
}

export const WizardSelectId: React.FC<selectIDProps> = (props) => {
	const { translate: _ } = useI18n();

	const { showSelectId } = useDialogs();

	const handleOnChange = (event) => {
		console.log(event);
		// setState({ ...state, [event.target.name]: event.target.value });
		props.onChange(undefined, props.name, event);
	};

	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item>
					<Button
						onClick={() => {
							{
								console.log('click to open selectID');
								console.log('showSelectId', showSelectId);
								showSelectId(
									props.name,
									() => {
										console.log('onClose');
									},
									handleOnChange,
									props.value,
								);
							}
						}}
						variant="outlined"
					>
						{props.i18n ? _(props.i18n) : props.name}
					</Button>
				</Grid>
				<Grid item>{props.value}</Grid>
			</Grid>
		</React.Fragment>
	);
};
