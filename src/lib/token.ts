import jwt from 'jsonwebtoken'
import { jwtVerify, SignJWT } from 'jose'

export function CreateToken(data: Token) {
    const token = jwt.sign({
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role
    }, process.env.JWT_SECRET as string, {
        expiresIn: '1h'
    })

    console.log("Create Token: ", token)

    return token
}

export async function CreateTokenWithJose(data: Token): Promise<string> {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new SignJWT({
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role,
    })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('1d')
        .sign(secret);

    return token;
}

export function DecodeToken(token: string): Token | null {
    try {
        const decoded = jwt.decode(token, {
            complete: true,
            json: true
        })
        return decoded?.payload as Token

    } catch (error) {
        return null
    }

}

export function ValidateToken(token: string){
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string, {
            complete: true,
            json: true
        } as jwt.VerifyOptions)
        console.log("Decoded: ", decoded)
        return decoded as Token
    } catch (error) {
        return error
    }
}


export async function ValidateTokenWithJose(token: string) {
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        const { payload } = await jwtVerify(token, secret);

        return payload
    } catch (error) {
        console.error('Token validation error:', error);
        return null;
    }
}

export function CreateRefreshToken(data: Token): string {
    const refreshToken = jwt.sign(
        {
            id: data.id,
            name: data.name,
            email: data.email,
            role: data.role,
        },
        process.env.JWT_SECRET as string,
        { expiresIn: '7d' } // Refresh token berlaku selama 7 hari
    );

    return refreshToken;
}

export function ValidateRefreshToken(refreshToken: string): Token | null {
    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET as string) as Token;
        return decoded;
    } catch (error) {
        console.error("Refresh token validation error:", error);
        return null;
    }
}