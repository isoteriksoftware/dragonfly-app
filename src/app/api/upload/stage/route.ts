import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { fileToBlob } from "../../../../common/utils";

export async function POST(req: NextRequest) {
  try {
    let body;
    try {
      body = await req.formData();
    } catch (error) {
      return NextResponse.json(
        { error: "No data provided" },
        {
          status: 404,
        }
      );
    }

    const file = body.get("image") as File;
    const url = body.get("url") as string;

    if (!file || !url) {
      return NextResponse.json(
        { error: "Invalid request. 'image' and 'url' are required" },
        {
          status: 400,
        }
      );
    }

    const response = await axios.put<any>(url, fileToBlob(file), {
      headers: {
        "Content-Type": file.type,
      },
    });
    if (response && response.status === 200) {
      return NextResponse.json({ message: "success" });
    }

    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      }
    );
  } catch (error) {
    console.error("[/api/upload/stage]:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
