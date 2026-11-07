// 旧アドレス（osaki-shouten.pages.dev）と、www付きのアドレス（www.osakisyouten.com）に来た人を、
// 正式なアドレス（https://osakisyouten.com）へ恒久的に転送する（301）。
// パスと検索条件はそのまま引き継ぐ。プレビュー用のアドレス（◯◯.osaki-shouten.pages.dev）は転送しない。
const REDIRECT_HOSTS = new Set(["osaki-shouten.pages.dev", "www.osakisyouten.com"]);

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.protocol = "https:";
    url.hostname = "osakisyouten.com";
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
