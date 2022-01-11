import React from 'react';
import { Device, useAPI } from '../lib/useAPI';
import { NotRunning, NoDevices } from '../components/Messages';
import { useAdapter, useDialogs } from 'iobroker-react';

import { Button } from '@mui/material';
// import { useSelect } from '../hooks/useSelect';

export interface DevicesProps {
	devices: Record<number, Device> | undefined;
}

export const ListDevices: React.FC<DevicesProps> = (props) => {
	const { alive: adapterRunning, connected: driverReady } = useAdapter();
	const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();
	const { showSelectId } = useDialogs();

	// if (!adapterRunning || !driverReady) return <NotRunning />;
	// if (!props.devices) return <NoDevices />;
	return (
		<div id="ListDevices">
			<Button
				onClick={() => {
					{
						console.log('click to open selectID');
						console.log('showSelectId', showSelectId);
						showSelectId(
							'test',
							() => {
								console.log('onClose');
							},
							setSelectIdValue,
							selectIdValue,
						);
					}
				}}
				variant="outlined"
			>
				SelectID
			</Button>
			<br />
			<br />
			SelectIDs: {JSON.stringify(selectIdValue)}
		</div>
	);
};
