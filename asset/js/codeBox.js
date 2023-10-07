function doFocus(eid) {
  if (!!eid) document.getElementById(eid).focus();
}

function moveLeft(myId) {
  var prevId = myId > 1 ? `p_${myId - 1}` : null;
  doFocus(prevId);
}

function moveRight(myId) {
  var nextId = myId < 4 ? `p_${myId + 1}` : null;
  doFocus(nextId);
}

function onKeyUp(e) {
  var field = this;
  var myId = +field.getAttribute("id").split("_")[1];

  if (e.keyCode == 37) {
    // Left arrow
    moveLeft(myId);
  } else if (e.keyCode == 39) {
    // Right arrow
    moveRight(myId);
  } else if (e.keyCode != 8 && field.value.length == 1) {
    // The field has exactly one character
    moveRight(myId);
  }

  // checkPin();
}

function onKeyUp2(e) {
  var field = this;
  var myId = +field.getAttribute("id").split("_")[1];

  if (e.keyCode == 37) {
    // Left arrow
    moveLeft(myId);
  } else if (e.keyCode == 39) {
    // Right arrow
    moveRight(myId);
  } else if (e.keyCode != 8 && field.value.length == 4) {
    // The field has exactly one character
    moveRight(myId);
  }

  // checkPin();
}

function onKeyDown(e) {
  var letGo =
    [46, 8, 9, 27, 13, 110, 190].some((k) => k == e.keyCode) ||
    // Allow: Ctrl+A, Command+A
    (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
    // Allow: home, end, left, right, down, up
    (e.keyCode >= 35 && e.keyCode <= 40);

  // Ensure that it is a number and stop the keypress
  if (
    !letGo &&
    (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
    (e.keyCode < 96 || e.keyCode > 105)
  ) {
    e.preventDefault();
  }

  var field = this;
  var myId = +field.getAttribute("id").split("_")[1];
  if (e.keyCode == 8) {
    // Backspace
    if (field.value == "") {
      moveLeft(myId);
      e.preventDefault();
      return false;
    } else {
      // field.value = "";
      return true;
    }
  }
  return true;
}

function onKeyDown2(e) {
  var letGo =
    [46, 8, 9, 27, 13, 110, 190].some((k) => k == e.keyCode) ||
    // Allow: Ctrl+A, Command+A
    (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
    // Allow: home, end, left, right, down, up
    (e.keyCode >= 35 && e.keyCode <= 40);

  // Ensure that it is a number and stop the keypress
  if (
    !letGo &&
    (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
    (e.keyCode < 96 || e.keyCode > 105)
  ) {
    e.preventDefault();
  }

  var field = this;
  var myId = +field.getAttribute("id").split("_")[1];
  if (e.keyCode == 8) {
    // Backspace
    if (field.value == "") {
      moveLeft(myId);
      e.preventDefault();
      return false;
    } else {
      // field.value = "";
      return true;
    }
  }
  return true;
}

// function checkPin() {
//   var pin = [...document.querySelectorAll("input.code")]
//     .map((e) => e.value)
//     .join("");
//   document
//     .getElementById("submit")
//     [pin.length == 4 ? "removeAttribute" : "setAttribute"](
//       "disabled",
//       "disabled"
//     );
// }

// [...document.querySelectorAll("input.code")].map((e) => {
//   e.addEventListener("keyup", onKeyUp, true);
//   e.addEventListener("keydown", onKeyDown, true);
// });

$(document).on("keydown", ".code", onKeyDown);
$(document).on("keydown", ".code2", onKeyDown2);
$(document).on("keyup", ".code", onKeyUp);
$(document).on("keyup", ".code2", onKeyUp2);

//document.getElementById("p_1").focus();

$(document).on("keyup", ".code", function () {
  $(".code").each(function () {
    if ($(this).val() != "") {
      $("#submit").addClass("active");
    } else {
      $("#submit").removeClass("active");
    }
  });
});

// login with code
let mobInputAction = function () {
  $(".code-box").addClass("on");
  var phone = $("#phoneInput2").val();
  $(".code-box p span").text(phone);
  $(".code:first-child").focus();
  doFocus();
  timer();
};

$(document).ready(function () {
  $("#getNumber").click(function () {
    mobInputAction();
  });
  $("#phoneInput2").keypress(function (e) {
    var inpVal = $("#phoneInput2").val();
    if (e.which == 13 && inpVal) {
      //Enter key pressed
      mobInputAction();
    }
  });
  $(".resend").on("click", function () {
    timer();
    $(".countdown").show();
    $(".counter").show();
    $(this).hide();
  });

  timer();

  $(".changeNumber").on("click", function () {
    var minp = $("#phoneInput2");
    $(".code-box").hide();
    $(".code").val("");
    $(".step-one").show();
    $("#phoneInput2").focus();
    var tmpStr = minp.val();
    minp.val("");
    minp.val(tmpStr);
    minp.focus();
  });
});

// ///////////////////////////////

// $(".step-one button").on("click", function () {
//   $(".step-one").hide();
//   $(".code-box").show();
// });

// $(".code-box button").on("click", function () {
//   $(".code-box").hide();
//   $(".step-three").show();
// });

// $(".pass-forget a").on("click", function () {
//   $(".login-form").hide();
//   $(".step-one").show();
// });

// timer               //////////////////////////
let timer = function () {
  var timer2 = "2:01";
  var interval = setInterval(function () {
    var timer = timer2.split(":");
    //by parsing integer, I avoid all extra string processing
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = seconds < 0 ? --minutes : minutes;
    if (minutes < 0) {
      clearInterval(interval);
      $(".countdown").hide();
      $(".counter").hide();
      $(".resend").show();
    }
    seconds = seconds < 0 ? 59 : seconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    //minutes = (minutes < 10) ?  minutes : minutes;
    $(".countdown").html(minutes + ":" + seconds);
    timer2 = minutes + ":" + seconds;
  }, 1000);
};
// ////////////////////////////////////////////

$(document).on("click", ".show-pass", function () {
  if (
    $(this).closest(".form-input").find(".pass-input").attr("type") ==
    "password"
  ) {
    $(this).closest(".form-input").find(".pass-input").attr("type", "text");
    $(this).removeClass("bi-eye-slash").addClass("bi-eye");
  } else {
    $(this).closest(".form-input").find(".pass-input").attr("type", "password");
    $(this).removeClass("bi-eye").addClass("bi-eye-slash");
  }
});
