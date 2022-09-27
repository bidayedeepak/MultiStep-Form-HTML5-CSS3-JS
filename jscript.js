const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick() {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// -------------- multilayer form -------------

const steps = Array.from(document.querySelectorAll(".step"));
const nextBtn = document.querySelectorAll(".next-btn");
const prevBtn = document.querySelectorAll(".previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});

prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
});
function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}

// --------- input box copy -----------
window.onload = function () {
  var src = document.getElementById("phoneNumber1"),
    dst = document.getElementById("phoneNumber2");
  src.addEventListener("input", function () {
    dst.value = src.value;
  });
  var srcNew = document.getElementById("phoneNumber1"),
    dstNew = document.getElementById("phoneNumber3");
  srcNew.addEventListener("input", function () {
    dstNew.value = srcNew.value;
  });
};

// ------ passvalidation ----------
var password = document.getElementById("password");
var confirmpassword = document.getElementById("confirmpassword");
var passmatch = document.getElementById("passmatch");
var cnfrmpassmatch = document.getElementById("cnfrmpassmatch");
var weak = document.getElementById("weak");
var medium = document.getElementById("medium");
var strong = document.getElementById("strong");
var notnull = document.getElementById("notnull");

password.onkeyup = function () {
  if (password.value.length == 0) {
    weak.classList.add("weak");
    notnull.classList.remove("notnull");
    notnull.classList.add("notnullactive");
    strong.classList.add("strong");
  } else if (password.value.length <= 3) {
    notnull.classList.add("notnull");
    notnull.classList.remove("notnullactive");
    weak.classList.remove("weak");
    weak.classList.add("weakactive");
    medium.classList.add("medium");
    strong.classList.add("strong");
    medium.classList.remove("mediumactive");
  } else if (password.value.length >= 4 && password.value.length <= 8) {
    medium.classList.remove("medium");
    medium.classList.add("mediumactive");
    weak.classList.add("weak");
    weak.classList.remove("weakactive");
    strong.classList.add("strong");
    strong.classList.remove("strongactive");
  } else if (password.value.length >= 9) {
    weak.classList.add("weak");
    weak.classList.remove("weakactive");
    medium.classList.add("medium");
    medium.classList.remove("mediumactive");
    strong.classList.remove("strong");
    strong.classList.add("strongactive");
  }
};

// ------ passvalidation end----------

// -------- confirm pass validation ----------
confirmpassword.onkeyup = function () {
  if (
    confirmpassword.value != password.value &&
    password.value != confirmpassword.value
  ) {
    cnfrmpassmatch.classList.remove("cnfrmpassmatch");
    passmatch.classList.add("passmatch");
    cnfrmpassmatch.classList.add("cnfrmpassmatchactive");
    notnull.classList.add("notnull");
  } else if (confirmpassword.value == password.value) {
    passmatch.classList.remove("passmatch");
    passmatch.classList.add("passmatchactive");
    cnfrmpassmatch.classList.add("cnfrmpassmatch");
  }
};
// -------- confirm pass validation ----------

// -------- social icon select-----------
var select = document.getElementById("socialsites");
var option = select.options[select.selectedIndex];
var fb = document.getElementById("fb");
var insta = document.getElementById("insta");
var twitter = document.getElementById("twitter");
var skype = document.getElementById("skype");

function icons() {
  if (select.value == "Facebook") {
    skype.classList.add("skype");
    skype.classList.remove("skypeactive");
    twitter.classList.add("twitter");
    twitter.classList.remove("twitteractive");
    fb.classList.remove("fb");
    insta.classList.add("insta");
    insta.classList.remove("instaactive");
    fb.classList.add("fbactive");
  } else if (select.value == "Instagram") {
    skype.classList.add("skype");
    skype.classList.remove("skypeactive");
    twitter.classList.add("twitter");
    twitter.classList.remove("twitteractive");
    fb.classList.remove("fbactive");
    fb.classList.add("fb");
    insta.classList.remove("insta");
    insta.classList.add("instaactive");
  } else if (select.value == "Twitter") {
    insta.classList.add("insta");
    insta.classList.remove("instaactive");
    skype.classList.add("skype");
    skype.classList.remove("skypeactive");
    fb.classList.add("fb");
    fb.classList.remove("fbactive");
    twitter.classList.remove("twitter");
    twitter.classList.add("twitteractive");
  } else if (select.value == "Skype") {
    fb.classList.add("fb");
    fb.classList.remove("fbactive");
    twitter.classList.add("twitter");
    twitter.classList.remove("twitteractive");
    insta.classList.add("insta");
    insta.classList.remove("instaactive");
    skype.classList.remove("skype");
    skype.classList.add("skypeactive");
  }
}
// -------- social icon select-----------
