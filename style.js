  var spans = document.getElementsByTagName('span');
  var colors = ['#FFFAFA', '#FFB90F', '#FF1493', '#EEEEE0', '#D1EEEE', '#B5B5B5', '#76EE00', '#27408B', '#00FFFF'];

  function startClick() {
    time = setInterval(function () {
      start();
    }, 1000);
  };

  function stop() {
    clearInterval(time);
    for (var i = 0; i < spans.length; ++i) {
      spans[i].style.background = "aquamarine";
    };
  }

  function start() {
    for (var i = 0; i < spans.length; ++i) {
      spans[i].style.background = "aquamarine";
    };
    var number = new Array(3);
    var arr = new Array(3);
    for (var i = 0; i < number.length; ++i) {
      var a = parseInt(Math.random() * 9);
      if (i === 0) {
        number[i] = a;
      } else {
        for (var j = 0; j < i; ++j) {
          if (a === number[j]) {
            i--;
          } else {
            number[i] = a;
          };
        };
      };
    };
    for (var i = 0; i < arr.length; ++i) {
      var a = parseInt(Math.random() * 9);
      if (i === 0) {
        arr[i] = a;
      } else {
        for (var j = 0; j < i; ++j) {
          if (a === arr[j]) {
            i--;
          } else {
            arr[i] = a;
          };
        };
      };
    };
    for (var i = 0; i < number.length; ++i) {
      spans[number[i]].style.background = colors[arr[i]];
    };
  };