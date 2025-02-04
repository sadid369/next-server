import { NextRequest } from "next/server";

export function GET() {
  return Response.json({ name: "John Doe", email: "o9TJi@example.com" });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  return Response.json({ message: "User created" });
}
export function PUT() {
  return Response.json({ message: "User updated" });
}
