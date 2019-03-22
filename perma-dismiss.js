
console.log("[perma-dismiss] Starting perma-dismiss...");
var checkExist = setInterval(function() {
    if (document.getElementById("wittified-notification-1").style.display != "none") {
       console.log("[perma-dismiss] Detected banner, attempting to hide");
       document.getElementById("wittified-notification-1").style.display = "none";
    }
 }, 100);