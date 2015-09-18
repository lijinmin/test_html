$(document).ready(function(){
  var timeID;
  var index=0;
  timer(3000);
  function timer (time) {
    window.clearInterval(timeID);
    timeID=window.setInterval(code,time)
    function code () {
      $("#banner li").eq(index).fadeOut();
      if (index<$("#banner li").length-1) {index++;} else{index=0;};
      $("#banner li").eq(index).fadeIn();
      // body...
    }
    // body...
  }
  $("#tab").mouseenter(function() {
    window.clearInterval(timeID);
    // body...
  }).mouseleave(function() {
    timer(3000);
    // body...
  });

  //4幅图轮流切换
  if (document.getElementById('agent')){
    var box=document.getElementById('agent');
    var oul=box.getElementsByTagName('ul')[0];
    var timeid;
    var n=0;
    var left=0;
    var width;
    oul.innerHTML+=oul.innerHTML;
    startmove(oul)
    //4幅图的宽度
    width=173*4;
    function startmove (obj,itarget) {
      clearInterval(timeid);
      timeid=setInterval(ways,3000);
      function ways (argument) {
        n++;
        left=-30-n*173;
        obj.style.left=left%width+'px'
        // body...
      }
      // body...
    }
  }


(function() {
  var pic_select=$('#pic_select');
  var header=pic_select.find('.pic_header').find('li');
  var content=pic_select.find('.pic_content').find('li');
  var now=0;
  header.click(function() {
    now=$(this).index();
    header.removeClass('active');
    content.removeClass('cur');
    header.eq(now).addClass('active');
    content.eq(now).addClass('cur');
    // body...
  });
  // body...
})()


$('#report').click(function () {
  $(this).addClass('active');
  $('#comment').removeClass('active');
  $(".report_box").show();
  // body...
});
$('#comment').click(function  () {
  $(this).addClass('active');
  $('#report').removeClass('active');
  $('.content1 form').slideToggle();
  // body...
});


$(".content2 li").click(function  () {
  $(".report_box").hide();
  // body...
});
$(".content2 .cansel").click(function  () {
  $(".report_box").hide();
  // body...
});
$(".content2 .report").click(function  () {
  $(".report_box").hide();
  // body...
});


})