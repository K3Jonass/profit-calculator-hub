import { APP_HOST, toAbsoluteUrl } from "@/lib/public-urls";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

function getIndexNowKey() {
  return process.env.INDEXNOW_KEY?.trim();
}

export function canSubmitToIndexNow() {
  return Boolean(getIndexNowKey());
}

export async function submitUrlsToIndexNow(urls: string[]) {
  const key = getIndexNowKey();

  if (!key) {
    throw new Error("INDEXNOW_KEY is missing.");
  }

  const urlList = [...new Set(urls.map(toAbsoluteUrl))];

  if (urlList.length === 0) {
    return { submitted: 0 };
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      host: APP_HOST,
      key,
      urlList,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`IndexNow failed (${response.status}): ${body}`);
  }

  return { submitted: urlList.length };
}

export async function submitUrlToIndexNow(url: string) {
  return submitUrlsToIndexNow([url]);
}
