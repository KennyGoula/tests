$(document).ready(function(){
    $('#fl').bind('touchmove',function(e){
    e.preventDefault();

    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    console.log(touch.pageX);
    });

    $(document).mousemove(function(e){
    $("#fl").css({
        top: (e.pageY - 2500) + "px",
        left: (e.pageX - 2500) + "px"
    });
    });
});

function test(){
    alert("test");
}
    function draw(){
  var canvas = document.getElementById('tutorial');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.strokeRect(50,50,50,50);
  }
}

