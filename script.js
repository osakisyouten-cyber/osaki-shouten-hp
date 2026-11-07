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
