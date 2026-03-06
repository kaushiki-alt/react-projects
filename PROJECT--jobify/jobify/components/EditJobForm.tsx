import { getSingleJobAction, updateJobAction } from '@/utils/actions';
import { createAndEditJobSchema, CreateAndEditJobSchema, JobMode, JobStatus } from '@/utils/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Form } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { CustomFormField, CustomFormSelect } from './FormComponents';
import { Button } from './ui/button';

const EditJobForm = ({ jobId }: { jobId: string }) => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const { data } = useQuery({
        queryKey: ['job', jobId],
        queryFn: () => getSingleJobAction(jobId),
    })

    const { mutate, isPending } = useMutation({
        mutationFn: (values: CreateAndEditJobSchema) => updateJobAction(jobId, values),
        onSuccess: (data) => {
            if (!data) {
                toast("Error", {
                    description: `Error in updating the job`,
                })
                return;
            }
            toast("Success", {
                description: `Job Updated`,
            })
            queryClient.invalidateQueries({ queryKey: ['jobs'] });
            queryClient.invalidateQueries({ queryKey: ['job', jobId] });
            queryClient.invalidateQueries({ queryKey: ['stats'] });
            router.push('/jobs')
        },
    })


    const form = useForm<CreateAndEditJobSchema>({
        resolver: zodResolver(createAndEditJobSchema),
        defaultValues: {
            position: data?.position || '',
            location: data?.location || '',
            company: data?.company || '',
            status: (data?.status as JobStatus) || JobStatus.Pending,
            mode: (data?.mode as JobMode) || JobMode.FullTime,
        },
    })

    function onSubmit(values: CreateAndEditJobSchema) {
        mutate(values);
    }
    return (
        <Form {...form}>
            <form className='bg-muted p-8 rounded' onSubmit={form.handleSubmit(onSubmit)}>
                <h2 className="capitalize font-semibold text-4xl mb-8 ">Edit job</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                    <CustomFormField name='position' control={form.control} />
                    <CustomFormField name='company' control={form.control} />
                    <CustomFormField name='location' control={form.control} />
                    <CustomFormSelect
                        name='status'
                        control={form.control}
                        labelText='job status'
                        items={Object.values(JobStatus)} />
                    <CustomFormSelect
                        name='mode'
                        control={form.control}
                        labelText='job mode'
                        items={Object.values(JobMode)} />

                    <Button type='submit' className='self-end capitalize' disabled={isPending}>
                        {isPending ? 'updating...' : 'edit job'}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default EditJobForm
