let background = document.getElementById("background-container");
background.addEventListener = () => {};

window.addEventListener("load", function () {
  var loader = document.getElementById("loader-container");
  var video = document.getElementById("loader-video");

  video.addEventListener("loadedmetadata", function () {
    setTimeout(function () {
      loader.style.display = "none";
    }, video.duration * 500); // Multiply by 1000 to convert seconds to milliseconds
  });
});

