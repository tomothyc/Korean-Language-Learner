window.onchange = init;
window.onload = init;

function setDefault() {
  var exercises = document.getElementsByClassName("exercise");
  for (var i = 0; i < exercises.length; i++) {
    exercises[i].value = "default";
  }
}

function init() {
  var exercises = document.getElementsByClassName("exercise");
  for (var i = 0; i < exercises.length; i++) {
    exercises[i].style.display = "none";
  }
  document.getElementById("exercisespecific").style.display = "block";
  var option = document.getElementById("step").value;
  if (option == "shortsent" || option == "longsent" || option == "default") {
    document.getElementById("exercisespecific").style.display = "none";
  }

  if (option == "letters") {
    document.getElementById("lettersexercise").style.display = "block";
  }
  if (option == "syllables") {
    document.getElementById("syllablesexercise").style.display = "block";
  }
  if (option == "words") {
    document.getElementById("wordsexercise").style.display = "block";
  }
  if (option == "dictation") {
    document.getElementById("dictationexercise").style.display = "block";
  }
}
