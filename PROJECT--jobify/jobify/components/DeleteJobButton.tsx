import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteJobAction } from '@/utils/actions';
import { toast } from 'sonner';
import { Button } from './ui/button';

const DeleteJobButton = ({ id }: { id: string }) => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: (id: string) => deleteJobAction(id),
        onSuccess: (data) => {
            if (!data) {
                toast("Error", {
                    description: `Error in deleting the job`,
                })
                return;
            }
            queryClient.invalidateQueries({ queryKey: ['jobs'] });
            queryClient.invalidateQueries({ queryKey: ['stats'] });
            queryClient.invalidateQueries({ queryKey: ['charts'] });

            toast("Job has deleted", {
                description: `Job ${id} has been deleted`,
            })

        }
    })
    return (
        <Button size='sm' disabled={isPending} onClick={() => {mutate(id)}} className='capitalize'>
            {isPending ? 'deleting':'delete'}
        </Button>
    )
}

export default DeleteJobButton
