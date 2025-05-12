export async function HandleGetSurvey() {
    try {
        const res = await fetch(`/api/survey`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
            credentials: "include",
        });

        const result: ResponseAPI = await res.json();
        return result

    } catch (error) {
        return null
    }
}

export async function HandleGetSurveyById(id: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/survey/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
            credentials: "include",
        });

        const result: ResponseAPI = await res.json();
        return result

    } catch (error) {
        console.log(error)
        return null
    }
}

export async function HandleGetSurveyByStatus(status?: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/survey?status=${status}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
            credentials: "include",
        });

        const result: ResponseAPI = await res.json();
        return result

    } catch (error) {
        console.log(error)
        return null
    }
}

export async function HandleCreateSurvey(data: Omit<SurveyRequest, 'userId'>): Promise<ResponseAPI | null> {
    try {
        const res = await fetch("/api/survey", {
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

export async function HandleUpdateSurvey(id: string, data: Omit<SurveyRequest, 'userId'>): Promise<ResponseAPI | null> {
    try {
        const res = await fetch(`/api/survey/${id}`, {
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

export async function HandleDeleteSurvey(id: string): Promise<ResponseAPI | null> {
    try {
        const res = await fetch(`/api/survey/${id}`, {
            method: "DELETE",
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

export async function HandleGetSurveyByUserId(id: string): Promise<ResponseAPI | null> {
    try {
        const res = await fetch(`/api/survey/user/${id}`, {
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

export async function HandleAcceptSurvey(id: string): Promise<ResponseAPI | null> {
    try {
        const res = await fetch(`/api/survey/request?acc=${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ status: "ACCEPTED" }),
        })

        const result: ResponseAPI = await res.json()
        return result
    } catch (error) {
        return null
    }
}

export async function HandleRejectSurvey(id: string): Promise<ResponseAPI | null> {
    try {
        const res = await fetch(`/api/survey/request?reject=${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ status: "REJECTED" }),
        })

        const result: ResponseAPI = await res.json()
        return result
    } catch (error) {
        return null
    }
}

export async function HandleCountSurvey(status?: string): Promise<ResponseAPI | null> {
    try {
        const res = await fetch(`/api/survey/count?status=${status}`, {
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
