import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div>
      {/* Large header skeleton
          - h-[194px]: Fixed height of 194px
          - w-full: Full width on mobile
          - lg:w-1/2: Half width on large screens
          - mb-8: Bottom margin of 2rem */}
      <Skeleton className='h-48.5 w-full lg:w-1/2 mb-8 rounded ' />

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 mb-8'>
        <Skeleton className=' h-17.5 rounded' />
        <Skeleton className=' h-17.5 rounded' />
        <Skeleton className=' h-17.5 rounded' />
        <Skeleton className=' h-17.5 rounded' />
      </div>
    </div>
  );
};

export default Loading;
