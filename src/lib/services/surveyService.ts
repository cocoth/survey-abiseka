export async function HandleGetSurvey(){
    try {
        const res = await fetch(`/survey`, {
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

export async function HandleGetSurveyById(id: string){
    try {
        const res = await fetch(`/survey/${id}`, {
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

export async function HandleCreateSurvey(data: SurveyRequest): Promise<ResponseAPI | null> {
    try {
        const res = await fetch("/survey", {
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

export async function HandleUpdateSurvey(id: string, data: SurveyRequest): Promise<ResponseAPI | null> {
    try {
        const res = await fetch(`/survey/${id}`, {
            method: "PUT",
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
        const res = await fetch(`/survey/${id}`, {
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
        const res = await fetch(`/survey/user/${id}`, {
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