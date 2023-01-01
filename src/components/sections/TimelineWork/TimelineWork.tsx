import SectionLayout from 'components/layouts/SectionLayout';
import { FC } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Icon from '@mdi/react';
import { mdiCartOutline, mdiLaptop, mdiSubmarine } from '@mdi/js';
import { Container } from './components';
import { Chip } from '@mui/material';
import colors from 'constant/colors';

const TimelineWork: FC<any> = () => {
	return (
		<SectionLayout id="timeline">
			<Container>
				<div className="content">
					<h1 className="mt-0 mb-2 text-align-center">Work Timeline</h1>
					<Timeline position="alternate">
						<TimelineItem>
							<TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
								04-2021 to Present
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot style={{ backgroundColor: '#cfc700' }}>
									<Icon path={mdiSubmarine} size="30px" />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography component="span">Rovula</Typography>
								<Typography variant="body2" color={colors.red}>
									Frontend Developer
								</Typography>
								<div className="mt-1">
									<Chip className="tag-work mr-1 mb-1" label="HTML" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="CSS" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="Javascript" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="Typescript" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="ReactJS" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="RecoilJS" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="NodeJS" size="small" />
								</div>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
								11-2018 to 03-2021
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineConnector />
								<TimelineDot style={{ backgroundColor: '#fcf6f7' }}>
									<Icon path={mdiCartOutline} size="30px" color="#bf202f" />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography component="span">Punpromotion</Typography>
								<Typography variant="body2" color={colors.red}>
									Software Engineer
								</Typography>
								<div className="mt-1">
									<Chip className="tag-work mr-1 mb-1" label="HTML" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="CSS" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="Javascript" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="Typescript" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="NextJS" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="React Native" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="Redux" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="NodeJS" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="Laravel" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="Firebase" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="MongoDB" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="Redis" size="small" />
								</div>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
								09-2016 to 10-2018
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineConnector />
								<TimelineDot style={{ backgroundColor: '#cb0100' }}>
									<Icon path={mdiLaptop} size="30px" />
								</TimelineDot>
							</TimelineSeparator>
							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography component="span">Kratos</Typography>
								<Typography variant="body2" color={colors.red}>
									Programmer
								</Typography>
								<div className="mt-1">
									<Chip className="tag-work mr-1 mb-1" label="HTML" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="CSS" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="Javascript" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="Codeigniter" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="ReactJS" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="Firebase" size="small" />
									<Chip className="tag-work mr-1 mb-1" label="MongoDB" size="small" />
								</div>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
				</div>
			</Container>
		</SectionLayout>
	);
};

export default TimelineWork;
