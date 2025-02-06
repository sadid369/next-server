import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const client = new PrismaClient();
export function GET() {
  return Response.json({ name: "John Doe", email: "o9TJi@example.com" });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });
  return Response.json({ message: "User created", user });
}
export function PUT() {
  return Response.json({ message: "User updated" });
}
