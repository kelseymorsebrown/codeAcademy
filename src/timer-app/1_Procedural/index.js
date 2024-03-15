// initialize button state
document.getElementById("btn-pause").disabled = true;
document.getElementById("btn-stop").disabled = true;

// define global variables
var timer = null; // store the returned value of timer
var h = 0; // store the value of hour
var m = 0; // store the value of minute
var s = 0; // store the value of second

// restrict hours input to 24
var inputh = document.getElementById("inputh");
inputh.addEventListener("input", function () {
  inputh.value = parseInt(inputh.value || 0);
  if (inputh.value > 24) inputh.value = 24;
  if (inputh.value < 0) inputh.value = 0;
});

// restrict minute input to 59
var inputm = document.getElementById("inputm");
inputm.addEventListener("input", function () {
  inputm.value = parseInt(inputm.value || 0);
  if (inputm.value > 59) inputm.value = 59;
  if (inputm.value < 0) inputm.value = 0;
});

// restrict seconds input to 59
var inputs = document.getElementById("inputs");
inputs.addEventListener("input", function () {
  inputs.value = parseInt(inputs.value || 0);
  if (inputs.value > 59) inputs.value = 59;
  if (inputs.value < 0) inputs.value = 0;
});

// define a function
// start the timer
function start_counting() {
  // get the time entered or set a default value
  h = +document.getElementById("inputh").value || h;
  m = +document.getElementById("inputm").value || m;
  s = +document.getElementById("inputs").value || s;

  // check for illegal input
  const userInputNegativeNumber = h < 0 || m < 0 || s < 0;
  const userInputAllZeros = h === 0 && m === 0 && s === 0;

  if (userInputNegativeNumber || userInputAllZeros) {
    alert("The time entered is illegal!");
    return;
  }

  // start the timer
  timer = setInterval(counting, 1000);

  // change the state of buttons and input fields to prohibit users from re-entering numbers
  document.getElementById("btn-start").disabled = true;
  document.getElementById("btn-pause").disabled = false;
  document.getElementById("btn-stop").disabled = false;
  document.getElementById("inputh").disabled = true;
  document.getElementById("inputm").disabled = true;
  document.getElementById("inputs").disabled = true;
}

// pause the timer
function pause_counting() {
  // change the state of buttons and input fields to allow users to re-enter numbers
  document.getElementById("btn-start").disabled = false;
  document.getElementById("btn-pause").disabled = true;
  document.getElementById("btn-stop").disabled = false;
  document.getElementById("inputh").disabled = false;
  document.getElementById("inputm").disabled = false;
  document.getElementById("inputs").disabled = false;

  // pause the timer
  clearInterval(timer);
}

// stop the timer
function end_counting() {
  // change the state of buttons and input fields to allow users to re-enter numbers
  document.getElementById("btn-start").disabled = false;
  document.getElementById("btn-pause").disabled = true;
  document.getElementById("btn-stop").disabled = true;
  document.getElementById("inputh").disabled = false;
  document.getElementById("inputm").disabled = false;
  document.getElementById("inputs").disabled = false;

  // stop the timer
  clearInterval(timer);

  // reset the time variables
  h = 0;
  m = 0;
  s = 0;
  document.getElementById("currentTime").innerHTML = "Timer stopped";
}

// countdown
function counting() {
  // check if the second is 0
  if (s == 0) {
    // check if the minute is 0 when the second is 0
    if (m == 0) {
      // the entered time has already been checked for legality before starting the timer, so there is no need to check the value of the variable h again here
      h--;
      m = 59;
      s = 59;
    } else {
      // when the minute is not 0, the minute minus 1 and the second becomes 59
      m--;
      s = 59;
    }
  } else {
    // when the second is not 0, the second minus 1
    s--;
  }

  // add leading zeros to single digit hour, minute, and second values for display
  var display_h = formatDigits(h);
  var display_m = formatDigits(m);
  var display_s = formatDigits(s);

  // display current time
  document.getElementById("currentTime").innerHTML = "current time: " + display_h + " h " + display_m + " m " + display_s + " s";
  document.getElementById("inputh").value = display_h;
  document.getElementById("inputm").value = display_m;
  document.getElementById("inputs").value = display_s;

  // when the hour, minute, and second is 0, stop the timer
  if (s === 0 && m === 0 && h === 0) {
    end_counting();
    // execute popup in the next event loop to prevent it from blocking DOM rendering
    setTimeout(function () {
      alert("The time is up!");
    }, 0);
    return;
  }
}

function formatDigits(value) {
  value = parseInt(value)
  if (value < 10) {
    return "0" + value.toString()
  }
  return value.toString()
}