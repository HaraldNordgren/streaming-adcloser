
//document.getElementsByTagName("iframe")[0].contentDocument.getElementById("ad_boxlivetv").getElementsByTagName("a")[1].click()

//document.getElementsByTagName("iframe")[0].contentDocument.getElementById("ad_boxlive").getElementsByTagName("a")[0].click()

var ad_boxlive = document.getElementsByTagName("iframe")[0].contentDocument.getElementById("ad_boxlive");

var observer = new MutationObserver(function(mutations, observer) {
    console.log(mutations, observer);
});

observer.observe(ad_boxlive, {
    attributes: true
});

//SO: http://stackoverflow.com/questions/2844565/is-there-a-jquery-dom-change-listener
