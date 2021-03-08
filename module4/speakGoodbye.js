(function (window){
    var byeSpeaker  = {};
    var speakWord= "byeSpeaker ";
    byeSpeaker.speak=function (names) {
     console.log(speakWord + " " + names);
    }
  
      window.byeSpeaker =byeSpeaker ;
    })(window);