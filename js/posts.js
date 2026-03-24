import { supabase } from "./supabase.js";
import { displayMessage } from "./ui.js";
import { checkAuth, logout } from "./auth.js";

checkAuth();
loadPosts();

const logoutBtn = document.querySelector("#logout-btn");
logoutBtn.addEventListener("click", logout);

const postForm = document.querySelector("form");

postForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const title = form.title.value.trim();
  const content = form.content.value.trim();
  const fieldset = form.querySelector("fieldset");

  try {
    fieldset.disabled = true;

    const { error } = await supabase.from("posts").insert({ title, content });

    if (error) {
      displayMessage("#message-container", "error", error.message);
      return;
    }
    displayMessage(
      "#message-container",
      "success",
      "Post created successfully!",
    );
    loadPosts();
    form.reset();
  } catch (error) {
    console.error(error);
    displayMessage("#message-container", "error", error.toString());
  } finally {
    fieldset.disabled = false;
  }
});

async function loadPosts() {
  const postsContainer = document.querySelector("#posts-list");
  postsContainer.innerHTML = "";

  try {
    const { data: posts, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      displayMessage("#message-container", "error", error.message);
      return;
    }

    if (posts.length === 0) {
      displayMessage(
        "#message-container",
        "info",
        "No posts found. Create the first one!",
      );
      return;
    }

    posts.forEach((post) => {
      const postElement = createPostElement(post);
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error(error);
    displayMessage(
      "#message-container",
      "error",
      "An error occurred while loading posts.",
    );
  }
}

function createPostElement(post) {
  const heading = document.createElement("h3");
  heading.textContent = post.title;
  return heading;
}
