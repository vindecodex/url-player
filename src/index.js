function $(selector) {
  return document.querySelector(selector);
}
function C(element) {
  return document.createElement(element);
}

const input = $("#input");
const app = $("#app");
input.addEventListener("change", function(){
  app.innerHTML = "";
  if (input.value.includes("yout")) {
    createIframe();
  } else {
    createVideo();
  }
});

function createVideo() {
  const player = C("video");
  const source = C("source");
  source.src = input.value;
  source.type = "video/mp4";
  player.setAttribute("controls", "");
  player.setAttribute("autoplay", "");
  player.setAttribute("id","player");
  player.appendChild(source);
  app.appendChild(player);
}
function createIframe() {
  const player = C("iframe");
  player.src = formatYT();
  player.setAttribute("autoplay", "");
  player.setAttribute("id","player");
  app.appendChild(player);
}
function formatYT() {
  const chunks = input.value.split("/")
  const id = chunks[chunks.length - 1];
  return `https://youtube.com/embed/${id}`;
}
