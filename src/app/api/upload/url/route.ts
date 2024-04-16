import { NextResponse } from "next/server";
import { getApiService } from "../../../../common/services";

type Response = {
  key: string;
  url: string;
};

export async function POST() {
  try {
    const apiService = getApiService();
    const response = await apiService.post<Response>("/pipeline/assets/stage");
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
    console.error("[/api/upload/url]:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
