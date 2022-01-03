$("#content").on("click", function() {
    $("*").css("box-sizing", $(this).text());
  });
  
  $("#border").on("click", function() {
    $("*").css("box-sizing", $(this).text());
  });
  var container= document.getElementById("container");
container.style.height=(window.innerHeight);
container.style.width=window.innerWidth;