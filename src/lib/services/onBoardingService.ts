export async function HandleOnBoarding(data: Omit<OnBoardingRequest, 'userId'>): Promise<ResponseAPI | null> {
    try {
        const res = await fetch("/api/auth/onboarding", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        })

        const result: ResponseAPI = await res.json()
        return result
    } catch (error) {
        return null
    }
}

export async function HandleUpdateOnBoarding(id: string, data: Omit<{ userId: string }, 'userId'>): Promise<ResponseAPI | null> {
    try {
        const res = await fetch(`/api/auth/onboarding/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        })

        const result: ResponseAPI = await res.json()
        return result
    } catch (error) {
        return null
    }
}

export async function HandleGetOnBoardingUser(){
    try {
        const res = await fetch("/api/auth/onboarding", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })

        const result: ResponseAPI = await res.json()
        return result
    } catch (error) {
        return null
    }
}

export async function HandleGetOnBoardingUserByUserId(id: string){
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/onboarding/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })

        const result: ResponseAPI = await res.json()
        return result
    } catch (error) {
        console.log("Error: ", error)
        return null
    }
}