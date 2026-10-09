import { connectDB } from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModles";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
connectDB();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
  const { email, password } = reqBody;
  if (!email || !password) {
    return NextResponse.json({
      message: "All fields are required",
      status: 400,
    });
  }
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return NextResponse.json({
      message: "User does not exist",
      status: 404,
    });
  }
  const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordCorrect) {
    return NextResponse.json({
      message: "Invalid credentials",
      status: 401,
    });
  }

  const tokenData = {
    id: existingUser._id,
    username: existingUser.username,
    email: existingUser.email,
  };

  const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
    expiresIn: "1d",
  });

  const response = NextResponse.json({
    message: "Login successful",
    token,
    user: existingUser,
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60,
  });
  
  return response;
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({
      message: "An error occurred while logging in",
      status: 500,
    });
  }
}
