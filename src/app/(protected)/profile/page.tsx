"use client"


import ProfileCard from '@/components/custom/ProfileCard'
import { Data_PT, User } from '@/generated/prisma'
import { HandleGetOnBoardingUserByUserId } from '@/lib/services/onBoardingService'
import { HandleGetCurrentRole, HandleGetCurrentUser } from '@/lib/services/userService'
import React, { useEffect, useState } from 'react'

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState<string>("")
  const [dataUser, setDataUser] = useState<Partial<Data_PT> | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await HandleGetCurrentUser()

      if (res && res.status === 200) {
        // Check if the response is in the expected format
        const data = await res?.data
        setUser(data)

        const role = await HandleGetCurrentRole()
        if (role && role.status === 200) {
          const roleData = await role?.data
          setRole(roleData.role)
        }
      }
    }
    fetchUser()

  }, [])

  useEffect(() => {
    const fetchDataUser = async () => {
      if (!user) return
      const res = await HandleGetOnBoardingUserByUserId(user.id)
      console.log("Data User: ", JSON.stringify(res))
      // Check if the response is in the expected format
      if (res && res.status === 200) {
        // Check if the response is in the expected format
        const data = await res?.data
        setDataUser({
          nama: data.nama,
          kode: data.kode,
          akreditasi: data.akreditasi,
          tanggal_berdiri: data.tanggal_berdiri
            ? new Date(data.tanggal_berdiri)
            : null,
          no_SK_pendirian: data.no_SK_pendirian,
          tanggal_SK_pendirian: data.tanggal_SK_pendirian
            ? new Date(data.tanggal_SK_pendirian)
            : null,
          alamat: data.alamat,
        });
      }
    }
    fetchDataUser()
  }, [user])

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold mb-4'>Profile</h1>

      <ProfileCard
        user={user || null}
        role={role}
        dataUser={dataUser || null}
      />
    </div>
  )
}

export default ProfilePage