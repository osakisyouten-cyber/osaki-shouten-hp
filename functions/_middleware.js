// 旧アドレス（osaki-shouten.pages.dev）に来た人を、独自ドメイン（osakisyouten.com）へ
// 恒久的に転送する（301）。パスと検索条件はそのまま引き継ぐ。
// プレビュー用のアドレス（◯◯.osaki-shouten.pages.dev）は転送しない。
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "osaki-shouten.pages.dev") {
    url.protocol = "https:";
    url.hostname = "osakisyouten.com";
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
