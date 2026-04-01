export async function submitToIndexNow(url: string) {
  const key = "74895ebf187144c59e09e9529a93a984"; // Replace with your actual key

  const endpoint = `https://api.indexnow.org/indexnow`;

  try {
    await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        host: "profithub.cloud",
        key,
        urlList: [url],
      }),
    });

    console.log("IndexNow submitted:", url);
  } catch (error) {
    console.error("IndexNow error:", error);
  }
}