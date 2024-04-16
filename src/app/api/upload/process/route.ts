import { NextRequest, NextResponse } from "next/server";
import { getApiService } from "../../../../common/services";

type Response = {
  taskId: string;
  key: string;
};

type Payload = {
  key: string;
  pipeline: string;
};

export async function POST(req: NextRequest) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (error) {
      return NextResponse.json(
        { error: "No data provided" },
        {
          status: 404,
        }
      );
    }

    const key = body.key as string;

    if (!key) {
      return NextResponse.json(
        { error: "Invalid request. 'key' is required" },
        {
          status: 400,
        }
      );
    }

    const apiService = getApiService();
    const response = await apiService.post<Response, Payload>(
      "/pipeline/assets/process",
      {
        key,
        pipeline: "dragonfly-img-basic",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (response) {
      return NextResponse.json(response);
    }

    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      }
    );
  } catch (error) {
    console.error("[/api/upload/process]:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
