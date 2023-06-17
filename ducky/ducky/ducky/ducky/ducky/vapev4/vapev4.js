fetch("https://api.ipify.org?format=json").then(r=>r.json()).then(x=> {
document.getElementById("ip").innerText = x.ip;
})