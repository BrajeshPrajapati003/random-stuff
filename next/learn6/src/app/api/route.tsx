import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({
        name:"tyrant",
        age:20,
    })
}

export async function POST(req: NextRequest){
    const {name, age} = await req.json()
    return NextResponse.json({
        name, age
    })
}
