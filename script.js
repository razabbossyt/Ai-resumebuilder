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
    const apiKey = "YOUR_OPENAI_API_KEY"; // ← Yahan apni OpenAI API key daalo
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that writes short and impactful professional summaries for resumes.",
          },
          {
            role: "user",
            content: `Write a 3-line professional resume summary for a ${inputText}. Keep it brief, professional, and achievement-oriented.`,
          },
        ],
      }),
    });
  
    const data = await response.json();
  
    if (data.choices && data.choices.length > 0) {
      document.getElementById("summary").value = data.choices[0].message.content.trim();
    } else {
      document.getElementById("summary").value = "Could not generate summary. Please try again.";
    }
  }
  