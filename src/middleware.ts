import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest){
    console.log("Middleware running...");
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ]
}