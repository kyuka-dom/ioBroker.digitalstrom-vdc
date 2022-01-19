import React from 'react';
import { Device, useAPI } from '../lib/useAPI';

import Button from '@mui/material/Button';
import { useIoBrokerTheme, useDialogs } from 'iobroker-react/hooks';
import { dsDevice, watchStateID } from '../types/dsDevice';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Box } from '@mui/material';
import { wizardDeviceConfig } from '../lib/wizardDeviceConfig';
import { DeviceOptions, WizardDevice, WizardDeviceField } from '../types/wizardTypes';
import { WizardSelect } from '../components/WizardSelect';
import { WizardInput } from '../components/WizardInput';
import { WizardSelectId } from '../components/WizardSelectId';
import { useI18n } from 'iobroker-react/hooks';
import Handlebars from 'handlebars/dist/cjs/handlebars';
import { genDSUID } from '../lib/Helper';

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
	const { translate: _ } = useI18n();

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
				<Box
					sx={{
						marginTop: '10px',
						paddingBottom: '15px',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						display: 'flex',
						flexWrap: 'wrap',
						flexDirection: 'row',
					}}
				>
					<TableRow>
						<TableCell>{_(f.tooltip)}</TableCell>

						<TableCell>
							<WizardInput name={f.name} value={state[deviceType][f.name]} onChange={handleFieldChange} />
						</TableCell>
					</TableRow>
				</Box>
			);
		}
		case 'select': {
			return (
				<Box
					sx={{
						marginTop: '10px',
						paddingBottom: '15px',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						display: 'flex',
						flexWrap: 'wrap',
						flexDirection: 'row',
					}}
				>
					<TableRow>
						<TableCell>{_(f.tooltip)}</TableCell>

						<TableCell>
							<WizardSelect
								optionsList={f.optionsList}
								name={f.name}
								value={state[deviceType][f.name]}
								onChange={handleFieldChange}
							/>
						</TableCell>
					</TableRow>
				</Box>
			);
		}
		case 'selectID': {
			return (
				<Box
					sx={{
						marginTop: '10px',
						paddingBottom: '15px',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						display: 'flex',
						flexWrap: 'wrap',
						flexDirection: 'row',
					}}
				>
					<TableRow>
						<TableCell>{_(f.tooltip)}</TableCell>
						<TableCell>
							<WizardSelectId
								name={f.name}
								value={state[deviceType][f.name]}
								onChange={handleFieldChange}
							/>
						</TableCell>
					</TableRow>
				</Box>
			);
		}
	}
};

const _renderWizard = (deviceType, state, setState) => {
	if (!wizardDeviceConfig[deviceType]) return null;
	const fields: [WizardDeviceField] = wizardDeviceConfig[deviceType].fields;

	return (
		<React.Fragment>
			{fields.map((f: WizardDeviceField) => _renderField(deviceType, f, state, setState))}
		</React.Fragment>
	);
};

export const AddNewDevices: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const [themeName] = useIoBrokerTheme();
	const { translate: _ } = useI18n();
	const { showNotification } = useDialogs();

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
		stateInit[dKey].dsConfigTemplate = wizardDevice.dsConfigTemplate;
		stateInit[dKey].dSUID = genDSUID();
		stateInit[dKey].id = genDSUID();
		stateInit[dKey].modelUID = genDSUID();
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
		// setState({ ...state, dsConfigTemplate: wizardDeviceConfig[event.target.name].dsConfigTemplate });
	};

	return (
		<div>
			{/* <SelectDeviceType /> */}
			<TableContainer component={Paper} elevation={1}>
				<Table aria-label="collapsible table">
					<TableBody>
						<TableRow
							sx={{
								marginTop: '10px',
								paddingBottom: '15px',
								alignItems: 'center',
								justifyContent: 'space-around',
								display: 'flex',
								flexWrap: 'wrap',
								flexDirection: 'row',
							}}
						>
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
			<Button
				disabled={state.deviceType && state[state.deviceType]['name'] ? false : true}
				onClick={async () => {
					{
						console.log('adding device');

						// generate watchStateId
						if (!wizardDeviceConfig[state.deviceType]) return null;
						const selectIDs: [WizardDeviceField] = wizardDeviceConfig[state.deviceType].fields.filter(
							(f) => f.type === 'selectID',
						);
						const watchStateID: watchStateID = {};
						selectIDs.forEach((s: WizardDeviceField) => {
							if (s.objName && !watchStateID[s.objName]) {
								// not processed yet
								if (state[state.deviceType][s.name] && state[state.deviceType][s.name].length > 0)
									watchStateID[s.objName] = state[state.deviceType][s.name];
							} else if (s.objName) {
								// already exists -> create array or increase it
								if (
									Array.isArray(watchStateID[s.objName]) &&
									state[state.deviceType][s.name] &&
									state[state.deviceType][s.name].length > 0
								) {
									const obj: string[] = watchStateID[s.objName] as string[];
									obj.push(state[state.deviceType][s.name] as string);
									watchStateID[s.objName] = obj;
								} else if (
									state[state.deviceType][s.name] &&
									state[state.deviceType][s.name].length > 0
								) {
									// create array
									const firstState = watchStateID[s.objName];
									const obj: string[] = [];

									obj.push(firstState as string);
									obj.push(state[state.deviceType][s.name] as string);
									watchStateID[s.objName] = obj;
								}
							}
						});

						const dsConfigTemplate = state[state.deviceType].dsConfigTemplate;
						dsConfigTemplate.watchStateID = watchStateID;

						// generate DSConfig
						const template = Handlebars.compile(JSON.stringify(dsConfigTemplate));
						const renderedConfig = template(state[state.deviceType]);
						try {
							const newDevice: dsDevice = JSON.parse(renderedConfig);
							console.log(newDevice);
							await api.createDevice(newDevice);

							console.log(JSON.stringify(await api.listDevices()));
							setState({ deviceType: '' });
							showNotification(_('device successfully created'), 'success');
						} catch (e: any) {
							showNotification(_('device not created'), 'error');

							throw e;
						}
					}
				}}
				variant="outlined"
			>
				{_('Add new device')}
			</Button>
		</div>
	);
};
