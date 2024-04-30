import { connect } from "@/dbConfig/dbConfig";
import UserModel from "@/models/userModels";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email, password } = reqBody;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "user not found",
        status: 400,
      });
    }

    const passwordMatch = await bcryptjs.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({
        success: false,
        message: "password dosen't match",
        status: 400,
      });
    }

    return NextResponse.json({
      success: true,
      message: "login successfull",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    NextResponse.json({
      success: false,
      message: "error in login",
    });
  }
}
