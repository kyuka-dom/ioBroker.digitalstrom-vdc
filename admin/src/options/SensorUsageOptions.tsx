import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useI18n } from 'iobroker-react/hooks';
import React, { useState } from 'react';
import { Config } from '../lib/Config';

//const deviceTypeOptions: { value: string; title: string }[] = [
export const sensorUsageClassOptions = [
	{
		label: 'Select Sensor Usage',
		title: 'selectsendorusage',
		disabled: true,
	},
	{
		label: '0',
		title: 'sensorUsageUndefined',
	},
	{
		label: '1',
		title: 'sensorUsageRoom',
	},
	{
		label: '2',
		title: 'sensorUsageOutdoor',
	},
];

/* interface SelectColorClassOptions {
	onChange: (value: number) => void;
} */
/* export const SelectColorClaasOptions: React.FC<SelectColorClaasOptions> = ({ onChange }): JSX.Element => { */
export const SelectColorClassOptions = (): JSX.Element => {
	const { translate: _ } = useI18n();
	const [sensorUsageOptions, setColorGlassOptions] = useState('selectsendorusage');

	const handleSensorUsageClassOptions = (event: SelectChangeEvent) => {
		setColorGlassOptions(event.target.value);
		console.log(typeof event.target.value);
		/* onChange(JSON.parse(event.target.value)); */
		Config.color = JSON.parse(event.target.value);
	};

	const SensorUsageClassSelect = () => {
		const menuItem: JSX.Element[] = [];
		for (const key in sensorUsageClassOptions) {
			menuItem.push(
				<MenuItem
					disabled={sensorUsageClassOptions[key].disabled}
					key={key + sensorUsageClassOptions[key].title}
					value={sensorUsageClassOptions[key].label}
				>{`${_(sensorUsageClassOptions[key].title)}`}</MenuItem>,
			);
		}
		return menuItem;
	};

	return (
		<React.Fragment>
			<React.Fragment>
				<Box sx={{ minWidth: 120, maxWidth: 300, width: '250px' }}>
					<FormControl>
						<InputLabel id="SensorUsage-select-label">{_('select Sensor Usage')}</InputLabel>
						<Select
							labelId="SensorUsage-select-label"
							id="SensorUsage"
							value={sensorUsageOptions}
							label="select Sensor Usage"
							onChange={handleSensorUsageClassOptions}
							sx={{ width: 250 }}
						>
							{SensorUsageClassSelect()}
						</Select>
					</FormControl>
				</Box>
			</React.Fragment>
		</React.Fragment>
	);
};
