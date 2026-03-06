import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Skeleton } from './ui/skeleton';

type StatsCardProps = {
    title: string;
    value: number;
}

const StatsCard = ({ title, value }: StatsCardProps) => {
    return (
        <Card className='bg-muted'>
            <CardHeader className='flex flex-row justify-between items-center'>
                <CardTitle className='capitalize'>{title}</CardTitle>
                <CardDescription className='text-4xl font-bold text-primary mt-[0px!important]'>{value}</CardDescription>
            </CardHeader>
        </Card>
    )
}

export default StatsCard;

export function StatsLoadingCard() {
    return (
        <Card className='w-82.5 h-22'>
            <CardHeader className='flex flex-row justify-between items-center'>
                <div className='flex items-center space-x-4'>
                    <Skeleton className='h-12 w-12 rounded-full' />
                    <div className='space-y-2'>
                        <Skeleton className='h-4 w-37.5' />
                        <Skeleton className='h-4 w-25' />
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
}