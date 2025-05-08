export async function HandleGetCurrentUser(): Promise<ResponseAPI | null> {
    try {
        const res = await fetch("/api/auth/currentUser", {
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

export async function HandleGetCurrentRole(): Promise<ResponseAPI | null> {
    try {
        const res = await fetch("/api/auth/currentRole", {
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

export async function HandleRegister(data: RegisterRequest): Promise<ResponseAPI | null> {
    try {
        const res = await fetch("/api/auth/register", {
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

export async function HandleLogin(data: LoginRequest): Promise<ResponseAPI | null> {
    try {
        const res = await fetch("/api/auth/login", {
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

export async function HandleLogout(): Promise<ResponseAPI | null> {
    try {
        const res = await fetch("/api/auth/logout", {
            method: "POST",
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

export async function HandleGetUserById(id: string): Promise<ResponseAPI | null> {
    try {
        const res = await fetch(`/api/user/${id}`, {
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
