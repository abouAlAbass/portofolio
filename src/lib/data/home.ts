import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Mohamed';

export const lastName = 'Fetni';

export const description =
	'I’m a full-stack developer and SharePoint consultant with expertise in ASP.NET Core for backend development, React for building dynamic frontend applications, I have extensive experience in delivering digital solutions  for complex business environments';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'fetni.wassim@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
