"use client"

import OnboardingForm from '@/components/custom/OnboardingForm'
import { Data_PT } from '@/generated/prisma'
import { HandleGetOnBoardingUserByUserId } from '@/lib/services/onBoardingService'
import { HandleGetCurrentUser } from '@/lib/services/userService'
import React, { useEffect, useState } from 'react'


const OnBoardingPage = () => {
    const [userId, setUserId] = useState<string>("");
    const [initialData, setInitialData] = useState<Partial<Data_PT> | null>(null);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        async function fetchOnboardingData() {
            try {
                const currentUser = await HandleGetCurrentUser();
                if (!currentUser || !currentUser.data.id) {
                    console.error("User not found.");
                    return;
                }
    
                const userId = currentUser.data.id;
                setUserId(userId);
    
                const res = await HandleGetOnBoardingUserByUserId(userId);
                if (res && res.status === 200) {
                    setInitialData({
                        nama: res.data.nama,
                        kode: res.data.kode,
                        akreditasi: res.data.akreditasi,
                        tanggal_berdiri: res.data.tanggal_berdiri
                            ? new Date(res.data.tanggal_berdiri)
                            : null,
                        no_SK_pendirian: res.data.no_SK_pendirian,
                        tanggal_SK_pendirian: res.data.tanggal_SK_pendirian
                            ? new Date(res.data.tanggal_SK_pendirian)
                            : null,
                        alamat: res.data.alamat,
                    });
                    setIsUpdate(true);
                }
            } catch (error) {
                console.error("Error fetching onboarding data:", error);
            }
        }
    
        fetchOnboardingData();
    }, []);

    return (
        <div className="flex justify-center items-center mt-10 mb-20">
            {userId && (
                <OnboardingForm userId={userId} initialData={initialData || null} isUpdate={isUpdate} />
            )}
        </div>
    );
}

export default OnBoardingPage