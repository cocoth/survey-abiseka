import jwt from 'jsonwebtoken'


export function CreateToken(data: Token) {
    const token = jwt.sign({
        id: data.id,
        name: data.name,
        email: data.email,
        roleId: data.roleId
    }, process.env.JWT_SECRET as string, {
        expiresIn: '1h'
    })

    return token
}

export async function GetToken() {

}

export function ValidateToken(token: string): Token | null {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
        return decoded as Token 
    } catch (error) {
        return null
    }
}

export async function UpdateToken(token: string) {
    // TODO
}

export async function DeleteToken(token: string) {
    // TODO
}
