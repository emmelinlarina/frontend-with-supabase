# Frontend with Supabase - Article Platform

A super simple article platform built with **Supabase**, **HTML**, **Tailwind CSS**, and **vanilla JavaScript**.

Users can register, log in, create posts, and view posts. The UI updates dynamically based on authentication.

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

## Author

Emmelin Larina Tvedt Nilsen
