import JobForm from "@/components/JobForm"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"

const page = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <JobForm />
    </HydrationBoundary>
  )
}

export default page
