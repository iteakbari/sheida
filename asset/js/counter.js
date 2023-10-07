document.addEventListener("DOMContentLoaded", function () {
  const plus = document.querySelectorAll(".plus");
  const minus = document.querySelectorAll(".minus");
  const countElements = document.querySelectorAll(".count");

  minus.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      console.log(countElements);
      const currentCount = parseInt(countElements[index].value);
      if (currentCount > 1) {
        countElements[index].value = currentCount - 1;
      }
    });
  });

  plus.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      const currentCount = parseInt(countElements[index].value);
      countElements[index].value = currentCount + 1;
    });
  });
});
