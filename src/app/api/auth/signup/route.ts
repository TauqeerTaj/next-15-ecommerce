import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  await connectToDatabase();

  const existing = await User.findOne({ email });
  if (existing)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashedPassword });

  return NextResponse.json({ message: "User created successfully!" });
}
