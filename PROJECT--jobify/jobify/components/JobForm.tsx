'use client'
import { useForm } from 'react-hook-form'
import { CustomFormField, CustomFormSelect } from './FormComponents'
import { Button } from './ui/button'
import { Form } from './ui/form'
import { zodResolver } from '@hookform/resolvers/zod';
import { createAndEditJobSchema, CreateAndEditJobSchema, JobMode, JobStatus } from '@/utils/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { createJobAction } from '@/utils/actions'

const JobForm = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const form = useForm<CreateAndEditJobSchema>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: '',
      company: '',
      location: '',
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
  });

const { mutate, isPending } = useMutation({
  mutationFn: (values: CreateAndEditJobSchema) => createJobAction(values),
  onSuccess: (data) => {
    if (!data) {
      toast.error("Failed to create job", {
        description: "Something went wrong, please try again.",
      });
      return;
    }

    toast.success("Job created!", {
      description: `${data.position} at ${data.company} was added.`,
    });

    queryClient.invalidateQueries({ queryKey: ['jobs'] });
    queryClient.invalidateQueries({ queryKey: ['stats'] });
    queryClient.invalidateQueries({ queryKey: ['charts'] });

    router.push('/jobs');
  },
  onError: () => {
    // handles thrown errors (network failure etc.)
    toast.error("Something went wrong", {
      description: "Please check your connection and try again.",
    });
  },
});

  function onSubmit(values: CreateAndEditJobSchema) {
    mutate(values)
  }

  return (
    <Form {...form}>
      <form className='bg-muted p-8 rounded' onSubmit={form.handleSubmit(onSubmit)}>
        <h2 className="capitalize font-semibold text-4xl mb-8 ">Add job</h2>
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
            {isPending ? 'loading': 'create job'}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default JobForm
