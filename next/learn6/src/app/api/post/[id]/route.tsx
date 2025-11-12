import { NextRequest, NextResponse } from "next/server";

interface paramsType{
  params: {
    id: string
  }
}

export async function GET(
  request: NextRequest,
  context: paramsType,
) {
  const { id } = await context.params;
  console.log("Received id:", id);

  return NextResponse.json({ postId: id });
}
