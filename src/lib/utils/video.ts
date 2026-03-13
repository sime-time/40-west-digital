export type PortfolioVideo = {
  id: number;
  thumbnail: string;
  title: string;
  videoUrl: string;
};

function isYouTubeHost(hostname: string): boolean {
  const host = hostname.toLowerCase();

  return (
    host === "youtu.be" ||
    host === "www.youtu.be" ||
    host === "youtube.com" ||
    host === "www.youtube.com" ||
    host === "m.youtube.com"
  );
}

function getYouTubeVideoId(url: URL): string | null {
  const pathname = url.pathname;

  const hostname = url.hostname.toLowerCase();

  if (hostname === "youtu.be" || hostname === "www.youtu.be") {
    return pathname.split("/").filter(Boolean)[0] ?? null;
  }

  if (pathname === "/watch") {
    return url.searchParams.get("v");
  }

  if (pathname.startsWith("/shorts/")) {
    return pathname.split("/").filter(Boolean)[1] ?? null;
  }

  if (pathname.startsWith("/embed/")) {
    return pathname.split("/").filter(Boolean)[1] ?? null;
  }

  return null;
}

export function toYouTubeEmbedUrl(url: string): string | null {
  const normalizedUrl = url.trim();

  if (!normalizedUrl) {
    return null;
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(normalizedUrl);
  } catch {
    return null;
  }

  if (!isYouTubeHost(parsedUrl.hostname)) {
    return null;
  }

  const videoId = getYouTubeVideoId(parsedUrl);

  if (!videoId || !/^[A-Za-z0-9_-]{11}$/.test(videoId)) {
    return null;
  }

  return `https://www.youtube.com/embed/${videoId}?rel=0`;
}
