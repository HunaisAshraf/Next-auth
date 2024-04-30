import { connect } from "@/dbConfig/dbConfig";
import UserModel from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { User } from "@/utils/type";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody: User = await request.json();
    console.log(reqBody);
    const { name, email, password, phone } = reqBody;

    const userExist = await UserModel.findOne({ email });
    
    if (userExist) {
      return NextResponse.json({
        success: false,
        error: "user already exist",
        status: 400,
      });
    }

    //hash
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await new UserModel({
      name,
      email,
      phone,
      password: hashedPassword,
    }).save();

    return NextResponse.json({
      success: true,
      message: "user created successfully",
      newUser,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
