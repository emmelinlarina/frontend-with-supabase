import { supabase } from "./supabase.js";
import { displayMessage } from "./ui.js";
import { getCurrentUser, logout } from "./auth.js";

initPage();

async function initPage() {
  const user = await getCurrentUser();

  const logoutBtn = document.querySelector("#logout-btn");
  const loginLink = document.querySelector("#login-link");
  const registerLink = document.querySelector("#register-link");
  const createPost = document.querySelector("#create-post");
  const postForm = document.querySelector("form");

  if (user) {
    logoutBtn.classList.remove("hidden");
    loginLink.classList.add("hidden");
    registerLink.classList.add("hidden");
    createPost.classList.remove("hidden");

    logoutBtn.addEventListener("click", logout);

    postForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const form = e.target;
      const title = form.title.value.trim();
      const content = form.content.value.trim();
      const fieldset = form.querySelector("fieldset");

      try {
        fieldset.disabled = true;

        const { error } = await supabase
          .from("posts")
          .insert({ title, content });

        if (error) {
          displayMessage("#message-container", "error", error.message);
          return;
        }

        displayMessage(
          "#message-container",
          "success",
          "Post created successfully!",
        );

        await loadPosts();
        form.reset();
      } catch (error) {
        console.error(error);
        displayMessage("#message-container", "error", error.toString());
      } finally {
        fieldset.disabled = false;
      }
    });
  } else {
    logoutBtn.classList.add("hidden");
    loginLink.classList.remove("hidden");
    registerLink.classList.remove("hidden");
    createPost.classList.add("hidden");
  }

  await loadPosts();
}

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
  const article = document.createElement("article");

  article.className =
    "bg-white rounded-2xl border border-gray-200 hover:shadow-sm transition cursor-pointer p-5 mb-5";

  article.innerHTML = `
    <h3 class="text-lg font-semibold mb-2">${post.title}</h3>
    <p class="text-sm leading-6 text-gray-700 mb-4">${post.content}</p>
  `;

  return article;
}
