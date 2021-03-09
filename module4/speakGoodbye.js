(function (window){
    var byeSpeaker  = {};
    var speakWord= "GOOD BYE ";
    byeSpeaker.speak=function (names) {
     console.log(speakWord + " " + names);
    }
  
      window.byeSpeaker = byeSpeaker ;
    })(window);