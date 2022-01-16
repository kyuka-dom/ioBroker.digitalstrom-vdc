import { dsDevice } from './dsDevice';

export type WizardDevice = {
	i18n: string;
	fields: [WizardDeviceField];
	dsConfigTemplate?: dsDevice;
};
export type WizardDeviceField = {
	name: string;
	i18n: string;
	type: string;
	source?: string;
	multiple?: boolean;
	optionsList?: DeviceOptions[];
	tooltip: string;
	objName?: string;
};

export type DeviceOptions = {
	disabled?: boolean;
	title: string;
	label: string;
	i18n?: string;
};
