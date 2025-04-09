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
  async function generateSummary(inputText, outputId) {
    const apiKey = "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";
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant that summarizes resumes." },
          { role: "user", content: `Summarize this job role for a resume: ${inputText}` },
        ],
      }),
    });
  
    const data = await response.json();
  
    if (data.choices && data.choices.length > 0) {
      document.getElementById(outputId).innerText = data.choices[0].message.content.trim();
    } else {
      document.getElementById(outputId).innerText = "No response received.";
    }
  }
  

  