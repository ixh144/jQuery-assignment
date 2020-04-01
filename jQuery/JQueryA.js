$(document).ready(function(){
  $(".final").show();
  $(".step").hide();
  $(".Step1").hide();
  $(".Step2").hide();
  $(".Step3").hide();
  $(".Step4").hide();
  $(".Step5").hide();
  $(".Step6").hide();


  $("#step1").click(function(){
    $(".final").hide();
    $(".step").show();
    $(".Step1").show();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").hide();
    $("#step1").addClass("active");
    $("#step2").removeClass("active");
    $("#step3").removeClass("active");
    $("#step4").removeClass("active");
    $("#step5").removeClass("active");
    $("#step6").removeClass("active");
  });

  $("#step2").click(function(){
    $(".final").hide();
    $(".step").show();
    $(".Step1").hide();
    $(".Step2").show();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").hide();
    $("#step1").removeClass("active");
    $("#step2").addClass("active");
    $("#step3").removeClass("active");
    $("#step4").removeClass("active");
    $("#step5").removeClass("active");
    $("#step6").removeClass("active");

  });

  $("#step3").click(function(){
    $(".final").hide();
    $(".step").show();
    $(".Step1").hide();
    $(".Step2").hide();
    $(".Step3").show();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").hide();
    $("#step1").removeClass("active");
    $("#step2").removeClass("active");
    $("#step3").addClass("active");
    $("#step4").removeClass("active");
    $("#step5").removeClass("active");
    $("#step6").removeClass("active");


  });
  $("#step4").click(function(){
    $(".final").hide();
    $(".step").show();
    $("main .1").hide();
    $("main .2").hide();
    $("main .3").hide();
    $("main .4").show();
    $("main .5").hide();
    $("main .6").hide();
    $("#step1").removeClass("active");
    $("#step2").removeClass("active");
    $("#step3").removeClass("active");
    $("#step4").addClass("active");
    $("#step5").removeClass("active");
    $("#step6").removeClass("active");


  });
  $("#step5").click(function(){
    $(".final").hide();
    $(".step").show();
    $(".Step1").hide();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").show();
    $(".Step6").hide();
    $("#step1").removeClass("active");
    $("#step2").removeClass("active");
    $("#step3").removeClass("active");
    $("#step4").removeClass("active");
    $("#step5").addClass("active");
    $("#step6").removeClass("active");


  });
  $("#step6").click(function(){
    $(".final").hide();
    $(".step").show();
    $(".Step1").hide();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").show();
    $("#step1").removeClass("active");
    $("#step2").removeClass("active");
    $("#step3").removeClass("active");
    $("#step4").removeClass("active");
    $("#step5").removeClass("active");
    $("#step6").addClass("active");


  });

  });
