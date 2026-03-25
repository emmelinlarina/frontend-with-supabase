# Frontend with Supabase - Article Platform

A super simple article platform built with **Supabase**, **HTML**, **Tailwind CSS**, and **vanilla JavaScript**.

Users can register, log in, create posts, and view posts. The UI updates dynamically based on authentication.

AI tools were used in accordance with the assignment guidelines.

## Features

- User authentication (register and login)
- Email confirmation via Supabase
- Create posts (only when logged in)
- View posts (available to everyone)
- Dynamic UI based on login state
- Success / Error messages

## Tech Stack

- HTML
- Tailwind CSS
- JavaScript (ES Modules)
- Supabase (Auth + Database)

## Setup

1. clone the repository:

```
git clone https://github.com/emmelinlarina/frontend-with-supabase
```

2. Open the project in VS Code
3. Open with Live Server

⚠️ Note: Tailwind CSS is loaded via CDN, so no installation or build step is required

## How it works

- Supabase handles authentication and database logic
- When a user registers, a confirmation email is sent
- After confirming, the user is logged in automatically
- The frontend checks if a user is logged in and updates the UI accordingly
- Posts are fetched from Supabase and rendered dynamically as cards

## Authentication

- Logged-out users:
  - Can view posts
  - Can not create posts
  - Can register/login

- Logged-in users:
  - Can create posts
  - Can log out

## UI

- Built with Tailwind CSS
- Responsive layout
- Card based design for posts
- Clean and minimal interface

## AI LOG

### Tool: ChatGPT

**Purpose:**

- Brainstorming project structure and user flow before starting the assigment
- Explaining concepts such as authentication flow in Supabase (e.g. "Anyone can view posts") to support independent implementation
- Assisting with grammar, wording, and shortening text in the report and README

**Outcome:**

- Improved understanding of core concepts
- Code and logic implemented independently based on explanations
- Clearer and more concise writtden documentation as english is not my first language

### Tool: GitHub Copilot

**Purpose:**

- Speeding up coding by suggesting syntax and small code snippets
- Assisting with repetitive patterns and structure

**Outcome:**

- Faster Development workflow
- Maintained full undestanding of the code

## Author

Emmelin Larina Tvedt Nilsen
