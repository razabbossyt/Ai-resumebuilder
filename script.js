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
  async function generateSummary(inputText) {
    const apiKey = "YOUR_OPENAI_API_KEY"; // apni OpenAI key daalo
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant that writes strong professional summaries for resumes." },
          { role: "user", content: `Write a 3-line professional summary for the role of: ${inputText}` },
        ],
      }),
    });
  
    const data = await response.json();
  
    if (data.choices && data.choices.length > 0) {
      document.getElementById("summary").value = data.choices[0].message.content.trim();
    } else {
      document.getElementById("summary").value = "AI response not available. Try again.";
    }
  }
  