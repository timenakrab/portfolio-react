import { Chip, Typography } from '@mui/material';
import colors from 'constant/colors';
import { FC } from 'react';

const ContentCompany: FC = () => {
	const companies = [
		{
			name: 'Rovula',
			position: 'Frontend Developer',
			start: '04-2021',
			end: 'Present',
			descriptions: [
				'Developed a dashboard website that manages data of underwater robots',
				'Developed a website that handles video overlay for livestream',
				'Developed a website for viewing real-time (livestream) data from underwater robots',
			],
			skills: [
				'HTML',
				'CSS',
				'Javascript',
				'Typescript',
				'ReactJS',
				'RecoilJS',
				'NodeJS',
				'Docker',
				'Docker-compose',
			],
		},
		{
			name: 'Punpromotion',
			position: 'Software Engineer',
			start: '11-2018',
			end: '03-2021',
			descriptions: [
				'Changed the company website from CMS to ReactJS. Knowledge of planning, design database design, website, API, and Cloud Server',
				'Strong understanding of ReactJS. Experience of using React Native, Next.js, Redux, Responsive website will be a considerable bonus',
				'Ability to manage backend using ExpressJS',
				'Basic understanding of API security',
				'Knowledge of NoSQL (Redis, MongoDB, Firebase, Firestore) and SQL',
				'Good understanding of SEO principles',
				'Familiar with deadline, communicate with other teams',
				'Good understanding of software development approach using Agile methodology',
				'Ability to share knowledge with less experienced developers and bringing the experience to make good decisions',
			],
			skills: [
				'HTML',
				'CSS',
				'Javascript',
				'Typescript',
				'NextJS',
				'Expo',
				'Redux',
				'NodeJS',
				'Laravel',
				'Firebase',
				'MongoDB',
				'Redis',
			],
		},
		{
			name: 'Kratos',
			position: 'Programmer',
			start: '09-2016',
			end: '10-2018',
			descriptions: [
				'Develop a website on basis of business needs and requirements. develop by PHP, React connect an API',
				'Design, develop a real-time website with firebase, and display on live stream system',
			],
			skills: ['HTML', 'CSS', 'Javascript', 'Codeigniter', 'ReactJS', 'Firebase', 'MongoDB'],
		},
	];

	return (
		<div>
			{companies.map((company, index1) => (
				<div className="mb-2" key={company.name}>
					<Typography component="span">{company.name}</Typography>
					<Typography variant="body2" color={colors.red}>
						{company.position}
					</Typography>
					<Typography variant="overline" color={colors.darkBlue}>
						{company.start} to {company.end}
					</Typography>
					<Typography variant="caption" color="dimgrey">
						<ul>
							{company.descriptions.map((desc, index2) => (
								<li key={`desc_${index1}_${index2}`}>{desc}</li>
							))}
						</ul>
					</Typography>
					<div className="mt-1">
						{company.skills.map((skill, index3) => (
							<Chip
								className="tag-work mr-1 mb-1"
								label={skill}
								size="small"
								key={`skill_${index1}_${index3}`}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default ContentCompany;
