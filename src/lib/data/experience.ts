import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Itsolutions',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.FullTime,
		type: 'SharePoint & Software Development',
		location: 'Boumerdes',
		period: { from: new Date(2018, 11, 1) },
		skills: getSkills('ts', 'js'),
		name: 'SharePoint & Dotnet developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'software-freelance',
		company: 'Xpert-Soft',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Annaba',
		period: { from: new Date(2018, 4, 1), to: new Date(2018, 11, 1)},
		skills: getSkills('C#', 'ts', 'Angular', 'css', 'html', 'js'),
		name: 'Mobile & Web Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'software-freelance-junior',
		company: 'FoodBeeper',
		description: 'Creating web application for food delivery app',
		contract: ContractType.Contract,
		type: 'Web Development',
		location: 'Annaba',
		period: { from: new Date(2018, 1, 1), to: new Date(2018, 4, 1)},
		skills: getSkills('css', 'html', 'js','php'),
		name: 'Junior Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating web applciation for food delivery app'
	}
];

export const title = 'Experience';
