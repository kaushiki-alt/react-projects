import { JobType } from '@/utils/types'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import Link from 'next/link';
import JobInfo from './JobInfo';
import { Briefcase, CalendarDays, MapPin, RadioTower } from 'lucide-react';
import { Badge } from './ui/badge';
import DeleteJobButton from './DeleteJobButton';

const JobCard = ({ job }: { job: JobType }) => {
    const date = new Date(job.createdAt).toLocaleDateString();
    return (
        <Card className='bg-muted'>
            <CardHeader>
                <CardTitle className='capitalize'>{job.position}</CardTitle>
                <CardDescription>{job.company}</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className='mt-4 grid gap-4 grid-cols-2'>
                <JobInfo icon={<Briefcase />} text={job.mode} />
                <JobInfo icon={<MapPin />} text={job.location} />
                <JobInfo icon={<CalendarDays />} text={date} />

                <Badge className='w-32 justify-center'>
                    <JobInfo icon={<RadioTower />} text={job.status} />
                </Badge>
            </CardContent>
            <CardFooter className='flex gap-4'>
                <Button asChild size='sm'>
                    <Link href={`/jobs/${job.id}`} className='capitalize'>edit</Link>
                </Button>
                <DeleteJobButton id={job.id}/>
            </CardFooter>
        </Card>
    )
}

export default JobCard;
