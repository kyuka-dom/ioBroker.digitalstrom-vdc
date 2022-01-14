import React from 'react';
import { Device, useAPI } from '../lib/useAPI';

import Button from '@mui/material/Button';
import { useIoBrokerTheme } from 'iobroker-react/hooks';
import { dsDevice } from '../types/dsDevice';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { wizardDeviceConfig } from '../lib/wizardDeviceConfig';
import { DeviceOptions, WizardDevice, WizardDeviceField } from '../types/wizardTypes';
import { WizardSelect } from '../components/WizardSelect';
import { useDialogs } from 'iobroker-react';
import { Grid } from '@mui/material/';
import { WizardInput } from '../components/WizardInput';
import { colorClassOptions } from '../options/ColorClassOption';
import { WizardSelectId } from '../components/WizardSelectId';

export interface DevicesProps {
	devices: Record<number, Device> | undefined;
}

export interface DialogTitleProps {
	id: string;
	children?: React.ReactNode;
	onClose: () => void;
}

const _renderField = (deviceType: string, f: WizardDeviceField, state, setState) => {
	// const [state, setState] = React.useState({});

	const handleFieldChange = (event?, name?: string, value?: string | string[] | undefined) => {
		const previousObj = state[deviceType];
		setState({
			...state,
			[deviceType]: { ...previousObj, [name ? name : event.target.name]: value ? value : event.target.value },
		});
	};

	switch (f.type) {
		case 'input': {
			return (
				<Grid item xs={12} md={4} key={f.name}>
					<WizardInput name={f.name} value={state[deviceType][f.name]} onChange={handleFieldChange} />
				</Grid>
			);
		}
		case 'select': {
			return (
				<Grid item xs={12} md={4} key={f.name}>
					<WizardSelect
						optionsList={colorClassOptions}
						name={f.name}
						value={state[deviceType][f.name]}
						onChange={handleFieldChange}
					/>
				</Grid>
			);
		}
		case 'selectID': {
			return (
				<Grid item xs={12} md={4} key={f.name}>
					<WizardSelectId name={f.name} value={state[deviceType][f.name]} onChange={handleFieldChange} />
				</Grid>
			);
		}
	}
};

const _renderWizard = (deviceType, state, setState) => {
	if (!wizardDeviceConfig[deviceType]) return null;
	const fields: [WizardDeviceField] = wizardDeviceConfig[deviceType].fields;

	return (
		<TableRow>
			<TableCell>
				<Grid container columns={{ xs: 12, md: 4 }}>
					{fields.map((f: WizardDeviceField) => _renderField(deviceType, f, state, setState))}
				</Grid>
			</TableCell>
		</TableRow>
	);
};

export const AddNewDevices: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const [themeName] = useIoBrokerTheme();

	/*
	const Color = (): { titel: string } => {
		switch (themeName) {
			case 'dark':
				return { titel: '#3b3b3b66' };
			case 'blue':
				return { titel: '#3e464a61' };
			case 'light':
				return { titel: '#b7b7b7' };
			case 'colored':
				return { titel: '#b7b7b7' };
		}

	};

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		clearConfig();
	};

 */

	const api = useAPI();

	const deviceOptions: Array<DeviceOptions> = [];
	const stateInit = {
		deviceType: '',
	};

	Object.keys(wizardDeviceConfig).forEach((dKey: string) => {
		const wizardDevice: WizardDevice = wizardDeviceConfig[dKey];
		stateInit[dKey] = {};
		wizardDevice.fields.forEach((field: WizardDeviceField) => {
			stateInit[dKey][field.name] = '';
		});
		deviceOptions.push({
			disabled: false,
			title: dKey,
			label: dKey,
			i18n: wizardDevice.i18n,
		});
	});

	const [state, setState] = React.useState(stateInit);

	const handleFieldChange = (event) => {
		console.log(event.target.name, event.target.value);
		setState({ ...state, [event.target.name]: event.target.value });
	};

	return (
		<div>
			{/* <SelectDeviceType /> */}
			<TableContainer component={Paper} elevation={1}>
				<Table aria-label="collapsible table">
					<TableBody>
						<TableRow>
							<TableCell>
								<WizardSelect
									optionsList={deviceOptions}
									name="deviceType"
									value={state.deviceType}
									onChange={handleFieldChange}
								/>
							</TableCell>
						</TableRow>
						{_renderWizard(state.deviceType, state, setState)}
					</TableBody>
				</Table>
			</TableContainer>
			<br />
			{JSON.stringify(state, null, 4)}
			<br />
			<hr />
			<h3>
				This is not part of the UI. More or less a store of buttons to allow the rest of the UI to be tested
			</h3>
			<Button
				onClick={async () => {
					{
						console.log('click to open Add Mock Device');
						console.log(JSON.stringify(await api.listDevices()));
						const testDevice: dsDevice = {
							name: 'test',
							watchStateID: { button_0: 'test' },
							id: '12345',
							dsConfig: {
								dSUID: '1234556',
								primaryGroup: 8,
								name: 'testDevice',
								modelFeatures: {
									highlevel: true,
								},
								displayId: '',
								model: 'ioBroker',
								modelUID: 'UUID',
								modelVersion: '0.0.1',
								vendorName: 'KYUKA',
							},
						};
						console.log(JSON.stringify(await api.createDevice(testDevice)));
						console.log(JSON.stringify(await api.listDevices()));
					}
				}}
				variant="outlined"
			>
				Add Mock Device
			</Button>
		</div>
	);
};
