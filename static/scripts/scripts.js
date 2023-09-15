const dynamicContent = document.getElementById("dynamicContent");

if (navigator.userAgent.match(/iPhone/i)) {
  // do iPhone stuff
  console.log("iPhone");
  document.body.classList.add("ios");
  dynamicContent.innerHTML = `<p>Tap the <span></span> icon below, then "Add to homescreen".</p>`;
} else if (navigator.userAgent.match(/Android/i)) {
  // do Android stuff
  console.log("Android");
  document.body.classList.add("android");
  dynamicContent.innerHTML = `<p>Tap the <span></span> icon in the top right, then "Install the app".</p>`;
} else {
  // do desktop stuff
  console.log("Something else");
  document.body.classList.add("other");
  dynamicContent.innerHTML = `<img src="{{ site.baseurl }}/static/images/qr.png" alt=" "/> <br /> <p>Scan this QR code with your phone to get started!</p>`;
}
 
