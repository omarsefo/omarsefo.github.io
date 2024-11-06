const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const overlayForm = document.querySelector(".overlay-form");
const vname = document.getElementById("name");
const email = document.getElementById("email");
const messag = document.getElementById("message");

function updateButtonState() {
  if (form.checkValidity()) {
    formBtn.removeAttribute("disabled");
  } else {
    formBtn.setAttribute("disabled", "");
  }
}

formInputs.forEach((input) =>
  input.addEventListener("input", updateButtonState)
);

function resetForm() {
  vname.value = "";
  email.value = "";
  messag.value = "";
  updateButtonState();
}

function sendMail() {
  const tempParams = {
    from_name: email.value,
    ename: vname.value,
    to_name: "omarsefo7@gmail.com",
    message: messag.value,
  };

  document.body.style.cursor = "wait";
  overlayForm.classList.add("active");

  emailjs
    .send("service_atlkrd5", "template_43vqktk", tempParams)
    .then((res) => {
      console.log("success", res.status);
      displayModal(
        "Thanks for sending a message, We will reply to you as soon as possible",
        "checkmark-circle-outline"
      );
      setTimeout(() => {
        resetForm();
        setTimeout(() => {
          document.body.style.cursor = "default";
          overlayForm.classList.remove("active");
        }, 2000);
      }, 7000);
    })
    .catch((error) => {
      console.error("error", error);
      displayModal(
        "Sorry, there's a problem. Try again later, we will fix it.",
        "alert-circle-outline"
      );
      setTimeout(() => {
        resetForm();
        setTimeout(() => {
          document.body.style.cursor = "default";
          overlayForm.classList.remove("active");
        }, 1000);
      }, 4000);
    });
}

formBtn.addEventListener("click", sendMail);
