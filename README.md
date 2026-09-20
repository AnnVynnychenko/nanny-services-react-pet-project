# Nanny.Services Application

A React web application for discovering, filtering, and booking qualified
nannies, featuring Firebase authentication and personalized dynamic storage.

## 🚀 Technologies

- **Core & UI:** React (Functional Components, React Hooks), React Router,
  Styled Components, React Select
- **Authentication & Backend:** Firebase Authentication (Email/Password),
  Firebase Realtime Database
- **State Management & Forms:** React Context, React Hook Form, Yup Validation
  Schema
- **Notifications** React Hot Toast
- **Build Tool & Setup:** Create React App

## 📂 Project Structure

- `src/assets/` — Static assets.
- `src/auth/` — Authentication functions.
- `src/components/` — UI components powering the app interface.
- `src/context/` — Global context providers (for user session and auth state).
- `src/data/` — Static application constants and configuration data.
- `src/firebase/` — Firebase initialization, service configuration files and
  error code parsers.
- `src/helpers/` — Helper utility functions.
- `src/hooks/` — Custom React hooks.
- `src/pages/` — Application pages.
- `src/routes/` — Protected route wrappers.
- `src/styles/` — Global and shared CSS styles.
- `src/yup/` — Validation schemas for authentication (login/registration) and
  appointment forms.
- `src/index.js` — Application entry point.

## ✨ Key Features

- **Authentication System:** User registration and login functionality powered
  by Firebase Auth with custom error handling and Toast notifications.
- **User-Scoped Favorites System:** Persistent "Favorites" saved in
  `localStorage` dynamically keyed by user UID to guarantee zero cross-account
  data leak.
- **Interactive Nanny Cards:** Detailed information displays, expandable reviews
  section, and instant heart state toggles to easily add or remove nannies from
  favorites.
- **Filtering & Pagination:** Advanced filtering by 7 different criteria
  available on both Nannies and Favorites pages, along with a "Load more" button
  for smooth pagination.
- **Protected Routes:** Restricted access to the `Favorites` page for
  authenticated users.

## 🛠️ Getting Started

### Installation

```bash
npm install
```

### Set up Environment Variables

Create a `.env.local` file in the root directory based on `.env.example` and
fill in your Firebase configuration keys.

### Start the development server

```bash
npm start
```
