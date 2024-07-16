document.addEventListener("DOMContentLoaded", function () {
  var projectLinks = document.querySelectorAll('[data-bs-toggle="modal"]');
  projectLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var modalTitle = document.querySelector("#projectModalLabel");
      var modalBody = document.querySelector(".modal-body");
      var projectTitle = this.getAttribute("data-title");
      var projectDescription = this.getAttribute("data-description");

      modalTitle.innerText = projectTitle;
      modalBody.innerText = projectDescription;
    });
  });
});

//forms
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const statusMessage = document.getElementById("statusMessage");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    fetch("send_email.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          statusMessage.textContent = "Mensagem enviada com sucesso!";
          statusMessage.className = "success";
          contactForm.reset();
        } else {
          statusMessage.textContent = "Ocorreu um erro ao enviar a mensagem.";
          statusMessage.className = "error";
        }
        statusMessage.style.display = "block";
      })
      .catch((error) => {
        statusMessage.textContent = "Ocorreu um erro ao enviar a mensagem.";
        statusMessage.className = "error";
        statusMessage.style.display = "block";
      });
  });
});
