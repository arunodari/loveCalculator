function loveCalculator() {
  var n = Math.random();
  n = n * 100 + 1;
  n = Math.floor(n);
  //   document.write("your love is " + n + "%");
  document.getElementById("lovepercent").textContent =
    "तपाईको माया प्रतिशत  " + n + "%";
}
function reset() {
  document.getElementById("girlname").value = "";
  document.getElementById("boyname").value = "";

  document.getElementById("lovepercent").textContent =
    "तपाईको माया प्रतिशत चेक गर्नुहोस् ।";
}

// loveCalculator();
