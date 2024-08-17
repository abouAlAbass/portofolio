import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Master degree of Computer Science',
		description: '',
		location: 'Algeria',
		logo: Assets.Unknown,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C#','Asp.Net core', 'Sql',  'Sharepoint']
	},
	{
		degree: 'master of Computer Science',
		description: '',
		location: 'Algeria',
		logo: Assets.Unknown,
		name: '',
		organization: 'Constantine University',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

export const title = 'Education';
