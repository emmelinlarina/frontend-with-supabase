import { supabase } from "./supabase.js";
import { displayMessage } from "./ui.js";

const registerForm = document.querySelector("form");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const form = event.target;
  const email = form.email.value.trim();
  const password = form.password.value;
  const fieldset = form.querySelector("fieldset");

  try {
    fieldset.disabled = true;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      displayMessage("#message-container", "error", error.message);
      return;
    }

    if (data.user) {
      displayMessage(
        "#message-container",
        "success",
        "Registration successful! Please check your email to confirm your account.",
      );
      form.reset();
    }
  } catch (error) {
    console.log(error);
    displayMessage("#message-container", "error", error.toString());
  } finally {
    fieldset.disabled = false;
  }
});
