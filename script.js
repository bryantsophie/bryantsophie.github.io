function verifyAnswers() {
  var answers = [
    "Bbm7 3rd inversion",
    "G sharp major suspended 4th",
    "E flat minor 7th 1st inversion",
    "phrygian chord 4 or A minor",
    "D augumented 7th",
  ];

  var userAnswers = [
    document.getElementById("answer1").value,
    document.getElementById("answer2").value,
    document.getElementById("answer3").value,
    document.getElementById("answer4").value,
    document.getElementById("answer5").value,
  ];

  for (var i = 0; i < answers.length; i++) {
    if (userAnswers[i] !== answers[i]) {
      document.getElementById("quiz-result").textContent =
        "Oops! Debil, try again";
      return false;
    } else {
      document.getElementById("quiz-result").textContent =
        "Well, it seems your ear is, in fact, reasonably tutored. Up next, the Vanguard @ 8:30pm, september 19th";
      return false;
    }
  }
}
