import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Data_PT, User } from '@/generated/prisma';
import Avatar from './Avatar';
import OnboardingForm from './OnboardingForm';


interface ProfileCardProps {
    user: User | null;
    role?: string;
    dataUser: Partial<Data_PT> | null;
}


const ProfileCard = (data: ProfileCardProps) => {
    return (
        <div className='grid gap-3'>
            <Card className='w-full max-w-2xl mx-auto mt-10'>
                <CardHeader className='flex gap-3 items-center'>
                    <Avatar
                        username={data.user?.name || ""}
                        className='h-20 w-20 ring shadow-md shadow-black ring-black rounded-full'
                    />
                    <section className='grid justify-center'>
                        <h1 className='flex gap-2'>
                            Name: <span>{data.user?.name}</span>
                        </h1>
                        <p className='flex gap-2 text-gray-600'>
                            Email: <span>{data.user?.email}</span>

                        </p>
                        <p className='flex gap-2 text-gray-600'>
                            Role: <span>{data.role}</span>

                        </p>
                    </section>
                </CardHeader>
            </Card>
            {data.role !== "admin" && (
                <div className="w-full max-w-2xl mx-auto mb-20">
                    <OnboardingForm
                        userId={data.user?.id || ""}
                        initialData={data.dataUser || null}
                        isUpdate={true}
                        isProfilePage={true}
                    />
                </div>
            )}
        </div>
    )
}

export default ProfileCard