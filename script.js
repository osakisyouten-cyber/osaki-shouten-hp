const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu(){navigation.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','メニューを開く');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';navigation.hidden=!open;menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!navigation.hidden){closeMenu();menu.focus();}});

(function(){var b=document.createElement("button");b.type="button";b.className="to-top";b.setAttribute("aria-label","ページの先頭へ");b.textContent="↑";document.body.appendChild(b);function t(){b.classList.toggle("show",(window.pageYOffset||document.documentElement.scrollTop)>700)}window.addEventListener("scroll",t,{passive:true});b.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});t()})();

(function(){document.addEventListener("click",function(e){var b=e.target.closest(".map-facade");if(!b)return;var f=document.createElement("iframe");f.className="map-embed";f.src=b.getAttribute("data-map");f.title=b.getAttribute("data-title")||"地図";f.setAttribute("referrerpolicy","no-referrer-when-downgrade");b.parentNode.replaceChild(f,b)})})();

/* topic-open: articles#g1 などのリンクで、該当のグループを開く */
(function(){function o(){var id=location.hash.slice(1);if(!id)return;var e=document.getElementById(id);if(e&&e.tagName==="DETAILS"){e.open=true;setTimeout(function(){e.scrollIntoView({block:"start"})},50)}}window.addEventListener("hashchange",o);window.addEventListener("load",o)})();

/* notice-filter: articles#news で、記事一覧の「お知らせ」の絞り込みを選ぶ */
(function(){function f(){if(location.hash!=="#news")return;var c=document.querySelector('.article-filter .chip[data-filter="お知らせ"]');if(!c)return;c.click();setTimeout(function(){c.scrollIntoView({block:"center"})},50)}window.addEventListener("load",f);window.addEventListener("hashchange",f)})();

/* ga4: Googleアナリティクス（測定ID が入ったら、script.js の末尾に追加する）。電話タップなどのイベントも送る */
(function(){var ID="G-PKG7B3TGLQ";if(!ID||ID.indexOf("XXXX")>-1)return;
var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+ID;document.head.appendChild(s);
window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",ID,{allow_google_signals:false,allow_ad_personalization_signals:false});
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='tel:']");if(a){gtag("event","phone_click",{link_text:(a.textContent||"").trim().slice(0,40),page_path:location.pathname});return}
var m=e.target.closest&&e.target.closest("[data-ga-event]");if(m){gtag("event",m.getAttribute("data-ga-event"),{page_path:location.pathname})}});})();
