export const wizardDeviceConfig = {
	switch: {
		i18n: 'wizard-Switch',
		fields: [
			{
				name: 'name',
				i18n: 'wizard-deviceName',
				type: 'input',
				tooltip: 'wizard-switch-name-tooltip',
			},
			{
				name: 'colorGroup',
				type: 'select',
				source: 'colorClassOptions',
				i18n: 'wizard-colorGroup',
				tooltip: 'wizard-switch-colorGroup-tooltip',

				optionsList: [
					{
						label: '1',
						title: 'yellow',
						i18n: 'yellowColorClass',
					},
					{
						label: '8',
						title: 'black',
						i18n: 'blackColorClass',
					},
				],
			},
			{
				name: 'selectID',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-switchState',
				tooltip: 'wizard-switch-selectState-tooltip',
				objName: 'switch',
			},
		],
		dsConfigTemplate: {
			name: '{{name}}',
			deviceType: '{{deviceType}}',
			watchStateID: null,
			id: '{{id}}',
			dsConfig: {
				dSUID: '{{dSUID}}',
				primaryGroup: '{{colorGroup}}',
				name: '{{name}}',
				configURL: '',
				modelFeatures: {
					blink: true,
					dontcare: true,
					identification: true,
					outmode: true,
					outvalue8: true,
					transt: true,
				},
				displayId: '',
				model: 'ioBroker',
				modelUID: '{{modelUID}}',
				modelVersion: '0.0.1',
				vendorName: 'KYUKA',
				channelDescriptions: [
					{
						brightness: {
							channelType: 1,
							dsIndex: 0,
							max: 100,
							min: 0,
							name: 'brightness',
							resolution: 0.39215686274509803,
							siunit: 'percent',
							symbol: '%',
						},
					},
				],
				outputDescription: [
					{
						objName: 'light_0',
						name: 'light',
						dsIndex: 0,
						maxPower: -1,
						function: 1,
						outputUsage: 0,
						type: 'output',
						variableRamp: false,
					},
				],
				outputSettings: [
					{
						objName: 'light_0',
						dimTimeDown: 15,
						dimTimeDownAlt1: 162,
						dimTimeDownAlt2: 104,
						dimTimeUp: 15,
						dimTimeUpAlt1: 162,
						dimTimeUpAlt2: 104,
						minBrightness: 0.39215686274509803,
						onThreshold: 50,
						pushChanges: false,
						mode: 2,
						groups: ['0', '{{colorGroup}}'],
					},
				],
			},
		},
	},
	button: {
		i18n: 'wizard-Button',
		tooltip: 'wizard-button-tooltip',
		fields: [
			{
				name: 'name',
				i18n: 'wizard-deviceName',
				type: 'input',
				tooltip: 'wizard-button-name-tooltip',
			},
			{
				name: 'colorGroup',
				type: 'select',
				source: 'colorClassOptions',
				i18n: 'wizard-colorGroup',
				tooltip: 'wizard-button-colorGroup-tooltip',

				optionsList: [
					{
						label: '1',
						title: 'yellow',
						i18n: 'yellowColorClass',
					},
					{
						label: '8',
						title: 'black',
						i18n: 'blackColorClass',
					},
				],
			},
			{
				name: 'selectID-singleClick',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-button-singleclick',
				tooltip: 'wizard-switch-singleclick-tooltip',
				objName: 'button_0',
			},
			{
				name: 'selectID-doubleClick',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-button-doubleclick',
				tooltip: 'wizard-switch-doubleclick-tooltip',
				objName: 'button_0',
			},
			{
				name: 'selectID-longClick',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-button-longclick',
				tooltip: 'wizard-switch-longclick-tooltip',
				objName: 'button_0',
			},
		],
		dsConfigTemplate: {
			name: '{{name}}',
			deviceType: '{{deviceType}}',
			watchStateID: null,
			id: '{{id}}',
			dsConfig: {
				dSUID: '{{dSUID}}',
				primaryGroup: '{{colorGroup}}',
				name: '{{name}}',
				configURL: '',
				modelFeatures: {
					highlevel: true,
					jokerconfig: true,
					pushbadvanced: true,
					pushbarea: true,
					pushbutton: true,
				},
				displayId: '',
				model: 'ioBroker',
				modelUID: '{{modelUID}}',
				modelVersion: '0.0.1',
				vendorName: 'KYUKA',
				vendorId: 'vendorname:kyuka.ch',
				buttonInputDescriptions: [
					{
						buttonElementID: 0,
						buttonID: 0,
						buttonType: 1,
						combinables: 0,
						dsIndex: 0,
						name: 'button_id0_el0',
						supportsLocalKeyMode: 0,
						type: 'buttonInput',
						objName: 'button_0',
					},
				],
				buttonInputSettings: [
					{
						callsPresent: 0,
						channel: 0,
						function: 0,
						group: 1,
						mode: 0,
						setsLocalPriority: 0,
						objName: 'button_0',
					},
				],
			},
		},
	},
	lamp: {
		i18n: 'wizard-Lamp',
		tooltip: 'wizard-lamp-tooltip',
		fields: [
			{
				name: 'name',
				i18n: 'wizard-deviceName',
				type: 'input',
				tooltip: 'wizard-lamp-name-tooltip',
			},
			{
				name: 'colorGroup',
				type: 'select',
				source: 'colorClassOptions',
				i18n: 'wizard-colorGroup',
				tooltip: 'wizard-lamp-colorGroup-tooltip',

				optionsList: [
					{
						label: '1',
						title: 'yellow',
						i18n: 'yellowColorClass',
					},
				],
			},
			{
				name: 'selectID-lamp-switch',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-button-lamp',
				tooltip: 'wizard-switch-lamp-tooltip',
				objName: 'button_0',
			},
		],
		dsConfigTemplate: {
			name: '{{name}}',
			deviceType: '{{deviceType}}',
			watchStateID: null,
			id: '{{id}}',
			dsConfig: {
				dSUID: '{{dSUID}}',
				primaryGroup: '{{colorGroup}}',
				name: '{{name}}',
				configURL: '',
				modelFeatures: {
					blink: true,
					dontcare: true,
					identification: true,
					outmode: true,
					outvalue8: true,
					transt: true,
				},
				displayId: '',
				model: 'ioBroker',
				modelUID: '{{modelUID}}',
				modelVersion: '0.0.1',
				vendorName: 'KYUKA',
				vendorId: 'vendorname:kyuka.ch',
				channelDescriptions: [
					{
						brightness: {
							channelType: 1,
							dsIndex: 0,
							max: 100,
							min: 0,
							name: 'brightness',
							resolution: 0.39215686274509803,
							siunit: 'percent',
							symbol: '%',
						},
					},
				],
				outputDescription: [
					{
						objName: 'light_0',
						name: 'light',
						dsIndex: 0,
						maxPower: -1,
						function: 1,
						outputUsage: 0,
						type: 'output',
						variableRamp: false,
					},
				],
				outputSettings: [
					{
						objName: 'light_0',
						dimTimeDown: 15,
						dimTimeDownAlt1: 162,
						dimTimeDownAlt2: 104,
						dimTimeUp: 15,
						dimTimeUpAlt1: 162,
						dimTimeUpAlt2: 104,
						minBrightness: 0.39215686274509803,
						onThreshold: 50,
						pushChanges: false,
						mode: 2,
						groups: ['0', '{{colorGroup}}'],
					},
				],
			},
		},
	},
	rgblamp: {
		i18n: 'wizard-RGBLamp',
		tooltip: 'wizard-rgblamp-tooltip',
		fields: [
			{
				name: 'name',
				i18n: 'wizard-deviceName',
				type: 'input',
				tooltip: 'wizard-rgblamp-name-tooltip',
			},
			{
				name: 'colorGroup',
				type: 'select',
				source: 'colorClassOptions',
				i18n: 'wizard-colorGroup',
				tooltip: 'wizard-rgblamp-colorGroup-tooltip',

				optionsList: [
					{
						label: '1',
						title: 'yellow',
						i18n: 'yellowColorClass',
					},
				],
			},
			{
				name: 'selectID-switch-rgblamp',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-switch-rgblamp',
				tooltip: 'wizard-switch-rgblamp-tooltip',
				objName: 'switch',
			},
			{
				name: 'selectID-rgbdimmer',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-selectID-rgbdimmer',
				tooltip: 'wizard-selectID-rgbdimmer-tooltip',
				objName: 'brightness',
			},
			{
				name: 'selectID-rgbsaturation',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-rgbsaturation',
				tooltip: 'wizard-rgbsaturation-tooltip',
				objName: 'saturation',
			},
			{
				name: 'selectID-rgbtemp',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-rgbtemp',
				tooltip: 'wizard-rgbtemp-tooltip',
				objName: 'color temperature',
			},
			{
				name: 'selectID-rgbcolormode',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-rgbcolormode',
				tooltip: 'wizard-rgbcolormode-tooltip',
				objName: 'switchModeColor',
			},
			{
				name: 'selectID-rgbhue',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-rgbhue',
				tooltip: 'wizard-rgbhue-tooltip',
				objName: 'hue',
			},
			{
				name: 'selectID-rgbcolor',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-rgbcolor',
				tooltip: 'wizard-rgbcolor-tooltip',
				objName: 'rgb',
			},
		],
		dsConfigTemplate: {
			name: '{{name}}',
			deviceType: '{{deviceType}}',
			watchStateID: null,
			id: '{{id}}',
			dsConfig: {
				dSUID: '{{dSUID}}',
				primaryGroup: '{{colorGroup}}',
				name: '{{name}}',
				configURL: '',
				modelFeatures: {
					blink: true,
					dontcare: true,
					identification: true,
					outmode: true,
					outvalue8: true,
					transt: true,
				},
				displayId: '',
				model: 'ioBroker',
				modelUID: '{{modelUID}}',
				modelVersion: '0.0.1',
				vendorName: 'KYUKA',
				vendorId: 'vendorname:kyuka.ch',
				channelDescriptions: [
					{
						brightness: {
							channelType: 1,
							dsIndex: 0,
							max: 100,
							min: 0,
							name: 'brightness',
							resolution: 0.39215686274509803,
							siunit: 'percent',
							symbol: '%',
						},
						colortemp: {
							channelType: 4,
							dsIndex: 3,
							max: 1000,
							min: 100,
							name: 'color temperature',
							resolution: 1,
							siunit: 'mired',
							symbol: 'mired',
						},
						hue: {
							channelType: 2,
							dsIndex: 1,
							max: 360,
							min: 0,
							name: 'hue',
							resolution: 0.1,
							siunit: 'degree',
							symbol: 'Â°',
						},
						saturation: {
							channelType: 3,
							dsIndex: 2,
							max: 100,
							min: 0,
							name: 'saturation',
							resolution: 0.1,
							siunit: 'percent',
							symbol: '%',
						},
						x: {
							channelType: 5,
							dsIndex: 4,
							max: 1,
							min: 0,
							name: 'CIE x',
							resolution: 0.01,
							siunit: 'none',
							symbol: '',
						},
						y: {
							channelType: 6,
							dsIndex: 5,
							max: 1,
							min: 0,
							name: 'CIE y',
							resolution: 0.01,
							siunit: 'none',
							symbol: '',
						},
					},
				],
				outputDescription: [
					{
						objName: 'light_0',
						name: 'rgblight',
						dsIndex: 0,
						maxPower: -1,
						function: 4,
						outputUsage: 0,
						type: 'output',
						variableRamp: true,
					},
				],
				outputSettings: [
					{
						objName: 'light_0',
						dimTimeDown: 15,
						dimTimeDownAlt1: 162,
						dimTimeDownAlt2: 104,
						dimTimeUp: 15,
						dimTimeUpAlt1: 162,
						dimTimeUpAlt2: 104,
						minBrightness: 0.39215686274509803,
						onThreshold: 50,
						pushChanges: false,
						mode: 2,
						groups: ['0', '{{colorGroup}}'],
					},
				],
			},
		},
	},
	smokeAlarm: {
		i18n: 'wizard-smokeAlarm',
		tooltip: 'wizard-smokeAlarm-tooltip',
		fields: [
			{
				name: 'name',
				i18n: 'wizard-deviceName',
				type: 'input',
				tooltip: 'wizard-smokeAlarm-name-tooltip',
			},
			{
				name: 'selectID-smokeAlarm',
				type: 'selectID',
				multiple: false,
				i18n: 'wizard-idsmokeAlarm',
				tooltip: 'wizard-switch-smokeAlarm-tooltip',
				objName: 'generic_0',
			},
		],
		dsConfigTemplate: {
			name: '{{name}}',
			deviceType: '{{deviceType}}',
			watchStateID: null,
			id: '{{id}}',
			dsConfig: {
				dSUID: '{{dSUID}}',
				primaryGroup: 8,
				name: '{{name}}',
				configURL: '',
				modelFeatures: {
					highlevel: true,
					jokerconfig: true,
					akmsensor: true,
				},
				displayId: '',
				model: 'ioBroker',
				modelUID: '{{modelUID}}',
				modelVersion: '0.0.1',
				vendorName: 'KYUKA',
				vendorId: 'vendorname:kyuka.ch',
				binaryInputDescriptions: [
					{
						name: 'generic_0',
						objName: 'generic_0',
						dsIndex: 0,
						inputType: 0,
						inputUsage: 0,
						sensorFunction: 7,
						updateInterval: 0,
						type: 'binaryInput',
					},
				],
				binaryInputSettings: [
					{
						// changesOnlyInterval: 1800,
						group: 8,
						// minPushInterval: 2,
						sensorFunction: 7,
						inputName: 'generic_0',
						objName: 'generic_0',
					},
				],
			},
		},
	},
};
