export const wizardDeviceConfig = {
	switch: {
		i18n: 'wizard-Switch',
		fields: [
			{
				name: 'name',
				i18n: 'wizard-deviceName',
				type: 'input',
			},
			{
				name: 'colorGroup',
				type: 'select',
				source: 'colorClassOptions',
				i18n: 'wizard-colorGroup',
			},
			{
				name: 'selectID',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-switchState',
			},
		],
	},
	button: {
		i18n: 'wizard-Button',
		fields: [
			{
				name: 'name',
				i18n: 'wizard-deviceName',
				type: 'input',
			},
			{
				name: 'colorGroup',
				type: 'select',
				source: 'colorClassOptions',
				i18n: 'wizard-colorGroup',
			},
			{
				name: 'selectID-singleClick',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-button-singleclick',
			},
			{
				name: 'selectID-doubleClick',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-button-doubleclick',
			},
			{
				name: 'selectID-longClick',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-button-longclick',
			},
		],
	},
};
