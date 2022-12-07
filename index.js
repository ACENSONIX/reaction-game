var p = document.getElementsByTagName("p");
var choice = document.getElementsByClassName("choice");

var dragItem = null;

for (var i of p) {
  i.addEventListener("dragstart", dragStart);
  i.addEventListener("dragend", dragEnd);
}

function dragStart() {
  dragItem = this;
  setTimeout(() => (this.style.display = "none"), 0);
}

function dragEnd() {
  setTimeout(() => (this.style.display = "block"), 0);
  dragItem = null;
}

for (j of choice) {
  j.addEventListener("dragover", dragOver);
  j.addEventListener("dragenter", dragEnter);
  j.addEventListener("dragleave", dragLeave);
  j.addEventListener("drop", Drop);
}

function Drop() {
  this.append(dragItem);
}

function dragOver(e) {
  e.preventDefault();
  this.style.border = "2px dotted red";
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  this.style.border = "none";
}



function checkNuetralization() {
  let choice = document.getElementsByClassName("choice");
  var reactant1 = choice[0].children;
  var reactant2 = choice[1].children;
  console.log(choice);
  try {
    if (
      (reactant1[0].className == "sodium" &&
        reactant1[1].className == "chlorine") ||
      (reactant1[0].className == "chlorine" &&
        reactant1[1].className == "sodium")
    ) {
      // console.log(true);

      if (reactant2.length == 3) {
        if (
          reactant2[1].className == "oxygen" &&
          reactant2[0].className == "hydrogen" &&
          reactant2[2].className == "hydrogen"
        ) {
          toastr.remove();
          $("#myModal").modal("show");
          
        }
      } else {
        var errorText = "Oops! Please read the hint and try again."
        toastr.error(errorText);
        toastr.info(
          "Hint: The Second Product covers over 71% of the earth.",
          "",
          {
            timeOut: 0,
            extendedTimeOut: 0,
          }
        );
        hint(errorText);
      }
    } else {
      var errorText = "Incorrect please try again."
      toastr.error(errorText);
      toastr.info("Hint: The first Product is used heavily in cooking.", "", {
        timeOut: 0,
        extendedTimeOut: 0,
      });
      hint(errorText);
    }
  } catch (error) {
    console.log(error);
    var errorText = "Incorrect please try again."
    toastr.error(errorText);
    toastr.info("Hint: The first Product is used heavily in cooking.", "", {
      timeOut: 0,
      extendedTimeOut: 0,
    });
    hint(errorText);
  }
}

function checkDisplacement() {
  let choice = document.getElementsByClassName("choice");
  var reactant1 = choice[0].children;
  var reactant2 = choice[1].children;
  console.log(choice);
  try {
    if (
      reactant1[0].className == "potassium" &&
      reactant1[1].className == "oxygen" &&
      reactant1[2].className == "hydrogen"
    ) {
      if (
        reactant2[0].className == "hydrogen" &&
        reactant2[1].className == "hydrogen"
      ) {
        alert("Correct");
      } else {
        alert("Incorrect. Please try again.");
      }
    } else {
      alert("Incorrect please try again.");
    }
  } catch (error) {
    alert("Incorrect please try again.");
  }
}

function checkDecomposition() {
  let choice = document.getElementsByClassName("choice");
  var reactant1 = choice[0].children;
  var reactant2 = choice[1].children;
  console.log(choice);
  try {
    if (
      reactant1[0].className == "calcium" &&
      reactant1[1].className == "oxygen"
    ) {
      if (
        reactant2[1].className == "carbon" &&
        reactant2[0].className == "oxygen" &&
        reactant2[2].className == "oxygen"
      ) {
        alert("Correct");
      } else {
        alert("Incorrect. Please try again.");
      }
    } else {
      alert("Incorrect please try again.");
    }
  } catch (error) {
    alert("Incorrect please try again.");
  }
}

toastr.options = {
  closeButton: true,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

function reset() {
  location.reload();
}

function changePage() {
  location.href = "Home.html";
}

function hint(errorText) {
  var displayControl = document.getElementById("display-control");
  displayControl.style.display = "block";
  // var hint = document.getElementById("hint");
  var hint = document.getElementById("hint-bulb");  //bulb hint
  var dialog = document.getElementById("dialog");
  var textHint = document.getElementById("text-hint");
  textHint.innerHTML = errorText;
  hint.style.display = "block";
  dialog.style.display = "block";
  setTimeout(() => {
    displayControl.style.display = "none";
    hint.style.display = "none";
    dialog.style.display = "none";
  }, 5000);
}