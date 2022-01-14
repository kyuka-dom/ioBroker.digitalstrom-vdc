export type WizardDevice = {
	i18n: string;
	fields: [WizardDeviceField];
};
export type WizardDeviceField = {
	name: string;
	i18n: string;
	type: string;
	source?: string;
	multiple?: boolean;
};

export type DeviceOptions = {
	disabled?: boolean;
	title: string;
	label: string;
	i18n?: string;
};
