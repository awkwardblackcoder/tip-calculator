var billBreakDownSection = document.getElementById("bill-breakdown");
var loading = document.getElementById("loading");

billBreakDownSection.style.display = "none";
loading.style.display = "none";

function validateInput(billAmount, amountOfPeople, serviceRating) {
  var isValid = true;
  var inputErrorSection = document.getElementById("input-error-section");

  inputErrorSection.innerHTML = "";

  if (billAmount == "") {
    isValid = false;
    inputErrorSection.style.display = "";
    var newEl = document.createElement("p");
    var errorText = document.createTextNode("Bill Amount cannot be blank");
    newEl.appendChild(errorText);
    inputErrorSection.appendChild(newEl);
  }

  if (amountOfPeople == "") {
    isValid = false;
    inputErrorSection.style.display = "";
    var newEl = document.createElement("p");
    var errorText = document.createTextNode("Must enter Amount of People");
    newEl.appendChild(errorText);
    inputErrorSection.appendChild(newEl);
  }

  if (serviceRating == "0") {
    isValid = false;
    inputErrorSection.style.display = "";
    var newEl = document.createElement("p");
    var errorText = document.createTextNode("Must Select a Service");
    newEl.appendChild(errorText);
    inputErrorSection.appendChild(newEl);
  }

  setTimeout(function () {
    inputErrorSection.style.display = "none";
  }, 5000);

  return isValid;
}

function calculateBill() {
  var billAmountDOM = document.getElementById("bill-amount");
  var amountOfPeopleDOM = document.getElementById("amount-of-people");
  var serviceRatingDOM = document.getElementById("service-review");
  var tipAmountDOM = document.getElementById("tip-amount");
  var totalAmountDOM = document.getElementById("total-amount");
  var perPersonDOM = document.getElementById("amount-per-person");

  var billAmount = billAmountDOM.value;
  var amountOfPeople = amountOfPeopleDOM.value;
  var serviceRating = serviceRatingDOM.value;

  var tipPercent = "";

  if (serviceRating == 1) {
    tipPercent = 0.2;
  } else if (serviceRating == 2) {
    tipPercent = 0.1;
  } else {
    tipPercent = 0.05;
  }

  var isValid = validateInput(billAmount, amountOfPeople, serviceRating);

  if (isValid) {
    if (billBreakDownSection.style.display = "none") {
      loading.style.display = "";
    }

    setTimeout(function () {
      var tipAmount = 0;
      var totalAmount = 0;
      var amountPerPerson = 0;

      loading.style.display = "none";
      billBreakDownSection.style.display = "";

      tipAmount = (billAmount * tipPercent).toFixed(2);
      totalAmount = (Number(tipAmount) + Number(billAmount)).toFixed(2);
      amountPerPerson = (totalAmount/Number(amountOfPeople)).toFixed(2);

      tipAmountDOM.textContent = `$${tipAmount}`;
      totalAmountDOM.textContent = `$${totalAmount}`;
      perPersonDOM.textContent = `$${amountPerPerson}`;

    }, 500);

    setTimeout(function () {
      billBreakDownSection.style.display = "none";
    }, 5000);
  }
}

var calculateButton = document.getElementById('calculate-bill');
calculateButton.addEventListener('click', calculateBill);
