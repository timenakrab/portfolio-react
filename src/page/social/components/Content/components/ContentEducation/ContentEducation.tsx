import { Typography } from '@mui/material';
import colors from 'constant/colors';
import { FC } from 'react';

const ContentEducation: FC = () => {
	const educations = [
		{
			name: 'Burapha University',
			position: 'Bachelor Degree at Information Technology, Faculty of Informatics',
			start: '06-2011',
			end: '12-2014',
		},
		{
			name: 'Wichienmatu School',
			position: 'High School',
			start: '06-2008',
			end: '05-2011',
		},
	];

	return (
		<div>
			{educations.map((education) => (
				<div className="mb-2" key={education.name}>
					<Typography component="span">{education.name}</Typography>
					<Typography variant="body2" color={colors.red}>
						{education.position}
					</Typography>
					<Typography variant="overline" color={colors.darkBlue}>
						{education.start} to {education.end}
					</Typography>
				</div>
			))}
		</div>
	);
};

export default ContentEducation;
