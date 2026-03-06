import JobList from "@/components/JobList";
import SearchForm from "@/components/SearchForm";
import { getAllJobsAction } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"

async function AllJobsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey:['jobs', '', 'all', 1],
    queryFn : () => getAllJobsAction({}),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <div className="mt-8">
      <JobList/>
      </div>
    </HydrationBoundary>
  )
}


export default AllJobsPage;
