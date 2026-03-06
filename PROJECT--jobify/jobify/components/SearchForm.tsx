'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { JobStatus } from '@/utils/types';

const SearchForm = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.get('search') || '';
    const jobStatus = searchParams.get('status') || 'all';
    const router = useRouter()

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        let params = new URLSearchParams();
        const formData = new FormData(e.currentTarget);
        const search = formData.get('search') as string;
        const jobStatus = formData.get('jobStatus') as string;
        params.set('search', search);
        params.set('jobStatus', jobStatus);

        router.push(`${pathname}?${params.toString()}`)
    }
    return (
        <form className='bg-muted grid sm:grid-cols-2 md:grid-cols-3  gap-4 rounded-lg'
            onSubmit={handleSubmit}>
            <Input type='text'
                placeholder='search jobs'
                name='search'
                defaultValue={search} />

            <Select defaultValue={jobStatus} name='jobStatus' >
                <SelectTrigger className='w-full'>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {[
                        'all',
                        ...Object.values(JobStatus)
                    ].map((status) => (
                        <SelectItem key={status} value={status}>
                            {status}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Button type='submit'>Search</Button>
        </form>
    )
}

export default SearchForm
