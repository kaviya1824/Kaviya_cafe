document.addEventListener("DOMContentLoaded", function () {
  const feedbackForm = document.getElementById("feedback-form");
  const responseMsg = document.getElementById("response-msg");

  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation - Check if fields are empty
    if (email === "" || message === "") {
      responseMsg.style.color = "red";
      responseMsg.textContent = "❌ Please fill in all fields!";
      return;
    }

    // Simulate form submission success (You can replace this with a real backend call)
    responseMsg.style.color = "green";
    responseMsg.textContent =
      "✅ Thank you for your feedback! We appreciate it.";

    // Clear the form fields after submission
    feedbackForm.reset();

    // Hide the message after 3 seconds
    setTimeout(() => {
      responseMsg.textContent = "";
    }, 3000);
  });
});
