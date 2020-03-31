$(document).ready(function(){

  $(".Step1").hide();
  $(".Step2").hide();
  $(".Step3").hide();
  $(".Step4").hide();
  $(".Step5").hide();
  $(".Step6").hide();



  $("#step1").click(function(){
    $(".Step1").show();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").hide();

  });

  $("#step2").click(function(){
    $(".Step1").hide();
    $(".Step2").show();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").hide();

  });

  $("#step3").click(function(){
    $(".Step1").show();
    $(".Step2").hide();
    $(".Step3").show();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").hide();


  });
  $("#step4").click(function(){
    $("main .1").hide();
    $("main .2").hide();
    $("main .3").hide();
    $("main .4").show();
    $("main .5").hide();
    $("main .6").hide();


  });
  $("#step5").click(function(){
    $(".Step1").show();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").show();
    $(".Step6").hide();


  });
  $("#step6").click(function(){
    $(".Step1").show();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").show();


  });

  });
