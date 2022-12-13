const serviceID = "service_ad8h7e7";
const templateID = "template_4ik9iyh";

function sendMessageToEmail() {
  const fullName = document.getElementById("from_name");
  if (fullName.value === "") {
    document.getElementsByClassName("required-message")[0].style.visibility = "visible";
  } else {
    document.getElementsByClassName("required-message")[0].style.visibility = "hidden";
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const btn = document.getElementsByClassName("send-button")[0];
    const form = document.getElementById("form");

    btn.value = "Sending...";
    emailjs.sendForm(serviceID, templateID, form).then(
      () => {
        fullName.value = "";
        email.value = "";
        message.value = "";
        btn.value = "Send Email";
        alert("Sent!");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  }
}
