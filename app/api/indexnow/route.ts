import { NextResponse } from "next/server";
import {
  canSubmitToIndexNow,
  submitUrlsToIndexNow,
} from "@/lib/indexnow";
import { getAllPublicUrls, toAbsoluteUrl } from "@/lib/public-urls";

type IndexNowRequest = {
  urls?: string[];
  includeAllPublic?: boolean;
};

export async function POST(request: Request) {
  if (!canSubmitToIndexNow()) {
    return NextResponse.json(
      { error: "INDEXNOW_KEY is not configured." },
      { status: 500 }
    );
  }

  let payload: IndexNowRequest = {};

  try {
    payload = (await request.json()) as IndexNowRequest;
  } catch {
    // Allow empty body to submit all public URLs
  }

  const requestedUrls = Array.isArray(payload.urls)
    ? payload.urls.filter((url): url is string => typeof url === "string")
    : [];

  const combined = [
    ...(payload.includeAllPublic === false ? [] : getAllPublicUrls()),
    ...requestedUrls.map(toAbsoluteUrl),
  ];

  try {
    const result = await submitUrlsToIndexNow(combined);

    return NextResponse.json({
      success: true,
      submitted: result.submitted,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "IndexNow submission failed.",
      },
      { status: 500 }
    );
  }
}
