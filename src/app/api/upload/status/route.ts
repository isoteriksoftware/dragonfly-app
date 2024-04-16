import { NextRequest, NextResponse } from "next/server";
import { getApiService } from "../../../../common/services";

type Response = {
  status: "RUNNING" | "SUCCEEDED" | "FAILED";
};

type Payload = {
  taskId: string;
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

    const taskId = body.taskId as string;

    if (!taskId) {
      return NextResponse.json(
        { error: "Invalid request. 'taskId' is required" },
        {
          status: 400,
        }
      );
    }

    const apiService = getApiService();
    const response = await apiService.post<Response, Payload>(
      "/pipeline/assets/status",
      {
        taskId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
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
    console.error("[/api/upload/status]:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
