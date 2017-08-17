if(location.protocol == "http:")
  (function NeskodneWeboveOperace()
  {
    if(window.operamini) return;
    var domain = location.host.replace(/^([^\.]+\.)*([^\.]+\.[^\.\:]+)(:.*)?$/, "$2").replace(/\./g, "");
    var ob = 100;
    if(domain.slice(0, 3) == "jak") ob = 1;
    if(Math.floor(Math.random() * ob)) return;
    var pozice = "http://go.idnes.bbelements.com/please/showit/84/1/1/33/";

    window.Ads = window.Ads || {};
    Ads.bbmedia = 1;
    Ads.pokus = function()
    {
      Ads.bbmedia = 2;
      document.write("<img src=\"" + pozice + "?typkodu=img\" onerror=\"Ads.bbmedia = 3\" onload=\"Ads.bbmedia = (this.width == 640 && this.height == 439) ? 5 : 4\" style=\"position: absolute; left: -10000px; top: -10000px;\">");
    };
    document.write("<script src=\"" + pozice + "?typkodu=js&_plain=1\"><\/script>");
    
    var ping = function()
    {
      var id = "bbmediapokusnwo" + (ob > 1 ? "x" + ob : "") + "_" + domain + "_" + ["nojs", "noimg", "errimg", "badimg", "ok"][Ads.bbmedia - 1];
      var tempImg = new Image();
      tempImg.src = "http://r.idnes.cz//r.asp?log=hax&r=" + escape(id) + "&from=" + escape(location.href.substr(0, 100)) + "&url=" + escape(location.href.substr(0, 250)) + "&rnd=" + Math.random();
      tempImg.style.cssText = "position: absolute; left: 0px; bottom: 0px; width: 1px; height: 1px";
      document.body.insertBefore(tempImg, document.body.firstChild);
    };
    if(window.addEventListener)
      addEventListener("load", ping, false);
    else if(window.attachEvent)
      attachEvent("onload", ping);
  })();
