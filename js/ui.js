let messageTimeout;

export function displayMessage(container, messagetype, message) {
  let parent = container;

  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  const messageClasses = {
    error: "bg-red-100 text-red-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
  };

  const classes = messageClasses[messagetype] || messageClasses.info;

  parent.classList.remove("hidden");
  parent.innerHTML = `<div class="${classes} p-4 rounded">${message}</div>`;

  if (messageTimeout) {
    clearTimeout(messageTimeout);
  }

  messageTimeout = setTimeout(() => {
    parent.classList.add("hidden");
  }, 3000);
}
