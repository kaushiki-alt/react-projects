'use server'

import { prisma } from "../lib/prisma";
import { redirect } from 'next/navigation';
import { Prisma } from "@/lib/generated/prisma/client";
import dayjs from 'dayjs';
import { auth } from "@clerk/nextjs/server";
import { createAndEditJobSchema, CreateAndEditJobSchema, JobStatus, JobType } from "./types";


async function authenticateAndRedirect(): Promise<string> {
    const { userId } = await auth();
    if (!userId) {
        redirect('/')
    }
    return userId;
}

export async function createJobAction(values: CreateAndEditJobSchema): Promise<JobType | null> {
    const userId = await authenticateAndRedirect();
    try {
        createAndEditJobSchema.parse(values);
        const job: JobType = await prisma.job.create({
            data: {
                ...values,
                clerkId: userId,
            },
        })
        return job;
    } catch (error) {
        console.error('createJobAction error:', error);
        return null;
    }
}

type GetAllJobsActionProps = {
    search?: string;
    jobStatus?: string;
    page?: number;
    limit?: number;
}
export async function getAllJobsAction({
  search,
  jobStatus,
  page = 1,
  limit = 10,
}: GetAllJobsActionProps): Promise<{
  jobs: JobType[];
  count: number;
  page: number;
  totalPages: number;
}> {
  const userId = await authenticateAndRedirect();

  try {
    let whereClause: Prisma.JobWhereInput = {
      clerkId: userId,
    };
    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          {
            position: {
              contains: search,
            },
          },
          {
            company: {
              contains: search,
            },
          },
        ],
      };
    }
    if (jobStatus && jobStatus !== 'all') {
      whereClause = {
        ...whereClause,
        status: jobStatus,
      };
    }
    const skip = (page - 1) * limit;

    const jobs: JobType[] = await prisma.job.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });
    const count: number = await prisma.job.count({
      where: whereClause,
    });
    const totalPages = Math.ceil(count / limit);
    return { jobs, count, page, totalPages };
  } catch (error) {
    console.error(error);
    return { jobs: [], count: 0, page: 1, totalPages: 0 };
  }
}

export async function deleteJobAction(id: string): Promise<JobType | null> {
    const userId = await authenticateAndRedirect();
    try {
        const job: JobType = await prisma.job.delete({
            where: {
                id,
                clerkId: userId,
            }
        })
        return job;
    } catch (error) {
        return null;
    }
}

export async function getSingleJobAction(id: string): Promise<JobType | null> {
    const userId = await authenticateAndRedirect();
    try {
        const job: JobType | null = await prisma.job.findUnique({
            where: {
                id,
                clerkId: userId,
            },
        });
        if (!job) {
            redirect('/jobs');
        }
        return job;
    } catch (error) {
        return null;
    }
}


export async function updateJobAction(id: string, values: CreateAndEditJobSchema): Promise<JobType | null> {
    const userId = await authenticateAndRedirect();
    try {
        const job: JobType | null = await prisma.job.update({
            where: {
                id,
                clerkId: userId,
            },
            data: {
                ...values,
            }
        });
        if (!job) {
            redirect('/jobs');
        }
        return job;
    } catch (error) {
        return null;
    }
}


export async function getStatsAction(): Promise<{
    pending: number;
    interview: number;
    declined: number;
}> {
    const userId = await authenticateAndRedirect();
    try {
        const stats = await prisma.job.groupBy({
            by: ['status'],
            _count: {
                status: true,
            },
            where: {
                clerkId: userId,
            },
        })

        const statsObject = stats.reduce((acc, current) => {
            acc[current.status] = current._count.status;
            return acc;
        }, {} as Record<string, number>)

        const defaultStats = {
            pending: 0,
            interview: 0,
            declined: 0,
            ...statsObject
        }
        return defaultStats;
    } catch (error) {
        redirect('/jobs');
    }
}

export async function getChartsAction(): Promise<
    Array<{ date: string; count: number }>
> {
  const userId = await authenticateAndRedirect();
  const sixMonthsAgo = dayjs().subtract(6, 'month').toDate();
  try {
    const jobs = await prisma.job.findMany({
      where: {
        clerkId: userId,
        createdAt: {
          gte: sixMonthsAgo,
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    let applicationsPerMonth = jobs.reduce((acc, job) => {
      const date = dayjs(job.createdAt).format('MMM YY');

      const existingEntry = acc.find((entry) => entry.date === date);

      if (existingEntry) {
        existingEntry.count += 1;
      } else {
        acc.push({ date, count: 1 });
      }
      console.log(jobs.map(job => job.createdAt));

      return acc;
    }, [] as Array<{ date: string; count: number }>);

    return applicationsPerMonth;
  } catch (error) {
    redirect('/jobs');
  }
}
