// Resume submit button logic
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const result = document.getElementById("result");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
  
      result.innerHTML = `<h3>Thank you, ${name}!</h3><p>We’ve received your resume at ${email}.</p>`;
    });
  });
  