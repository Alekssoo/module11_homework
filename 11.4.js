function intervalFromTo(a, b) {
    let result = a;
    let timerId = setInterval(function() {
        console.log(result);
        if (result == b) {
          clearInterval(timerId);
        }
        result++;
      }, 1000);
 }

 intervalFromTo (3,7);