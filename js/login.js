import { supabase } from "./supabase.js";
import { displayMessage } from "./ui.js";

const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value.trim();
  const password = form.password.value;
  const fieldset = form.querySelector("fieldset");

  try {
    fieldset.disabled = true;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      let message = error.message;

      if (error.status === 400) {
        message = "Invalid email or password.";
      }
      displayMessage("#message-container", "error", message);
      return;
    }

    if (data.user) {
      displayMessage("#message-container", "success", "Login successful!");
      location.href = "index.html";
    }
  } catch (error) {
    displayMessage("#message-container", "error", error.toString());
  } finally {
    fieldset.disabled = false;
  }
});
