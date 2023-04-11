var config = {
    kurz: "apirp.jozo85.ml/v1/kurz", 
    icon: "apirp.jopo85.ml/v1/icon/icon.png",
    tržniceName: "BTX Trade Platform",
    tržniceFooter: "Dont tell LSPD about this!",
    fontUrl: "https://cdn.doamatto.xyz/inter.min.css",
    fontName: "'Inter var experimental', sans-serif", 
}

function init() {
    curl_time();
    font();
}


function font() {
    var t = document.createElement('link');
    t.rel = "stylesheet";
    t.href = config.fontUrl;
    document.head.appendChild(t);
    document.body.style.fontFamily = confing.fontName;
    return;
}

function cur_time() {
    var dd = new Date(),
      h = addZero(dd.getHours()),
      m = addZero(dd.getMinutes());
    document.getElementById('cur_time').innerHTML = `${h}:${m}`;
    setInterval(function() {
      var dd = new Date(),
        h = addZero(dd.getHours()),
        m = addZero(dd.getMinutes());
      document.getElementById('cur_time').innerHTML = `${h}:${m}`;
    }, 60000);
}


