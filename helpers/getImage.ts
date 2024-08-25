export function getImage(url: string) {
   return new URL(url, import.meta.url).href;
}
