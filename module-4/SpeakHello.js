(function (window) {
  const speakWord = "Hello";

  const helloSpeaker = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
