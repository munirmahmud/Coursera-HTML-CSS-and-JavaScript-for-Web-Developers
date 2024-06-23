(function (window) {
  const speakWord = "Good Bye";

  const byeSpeaker = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
