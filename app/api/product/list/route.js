import Product from "@/app/product/[id]/page";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB()

    const products = await Product.find({})
    return NextResponse.json({ success: true, products })

  } catch (error) {
    return NextResponse.json({ success: false, message: error.message })
  }
}
