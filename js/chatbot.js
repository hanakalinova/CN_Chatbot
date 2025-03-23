document.addEventListener("DOMContentLoaded", function () {
    const chatbotBox = document.getElementById("chatbot-box");
    const chatbotIcon = document.getElementById("chatbot-icon");
    const closeButton = document.getElementById("close-btn");
    const sendButton = document.getElementById("send-btn");
    const inputField = document.getElementById("chatbot-input");
    const messageContainer = document.getElementById("chatbot-messages");

    chatbotIcon.addEventListener("click", function () {
        chatbotBox.style.display = chatbotBox.style.display === "none" ? "block" : "none";
    });

    closeButton.addEventListener("click", function () {
        chatbotBox.style.display = "none";
    });

    function sendMessage() {
        const userMessage = inputField.value.trim();
        if (userMessage === "") return;

        messageContainer.innerHTML += `<div><b>You:</b> ${userMessage}</div>`;
        inputField.value = "";

        setTimeout(() => {
            messageContainer.innerHTML += `<div><b>Bot:</b> Demo response</div>`;
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }, 1000);
    }

    sendButton.addEventListener("click", sendMessage);
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
