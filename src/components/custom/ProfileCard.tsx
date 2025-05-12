import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Data_PT, User } from '@/generated/prisma';
import Avatar from './Avatar';
import OnboardingForm from './OnboardingForm';
import Image from 'next/image';


interface ProfileCardProps {
    user: User | null;
    role?: string;
    dataUser: Partial<Data_PT> | null;
}


const ProfileCard = (data: ProfileCardProps) => {
    return (
        <div className='grid gap-3 w-full'>
            <Card className='flex flex-row w-full max-w-2xl mx-auto p-8 '>
                <Avatar
                    username={data.user?.name || ""}
                    className='h-20 w-20 bg-cover ring shadow-md shadow-black ring-black rounded-full'
                />
                <section className='grid'>
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