function hideLoader() {
    $("#loader-wrapper").hide();
    $(".text").css("display", "block");
  }
function delay() {
    setTimeout(hideLoader, 4000);
}