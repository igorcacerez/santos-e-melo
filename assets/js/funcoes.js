$("#fundo").on("click", function () {

    $("#menuMobile").css("left","-100%");
    $("#fundo").fadeOut();

});


$("#abreMobile").on("click", function () {

    $("#menuMobile").css("left","0px");
    $("#fundo").fadeIn();

});