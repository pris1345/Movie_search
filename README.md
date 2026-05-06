# React Movie App

A movie search and favorites app built with React and the OMDB API.

## ✨ Features

- Search movies by title
- Add / remove movies from favorites
- Favorites saved in localStorage
- Responsive design with Tailwind CSS

## Tech Stack

- React
- React Router DOM
- Tailwind CSS
- OMDB API
- Context API

## Getting Started

### 1. Clone the repository

git clone https://github.com/pris1345/Movie_search.git

### 2. Install dependencies

npm install

### 3. Create .env file in root

VITE_API_KEY=your_omdb_api_key_here

### 4. Run the app

npm run dev

## 🔑 Get OMDB API Key

1. Go to [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
2. Sign up for free
3. Check your email for the API key
4. Paste it in your `.env` file

## 📁 Project Structure

src/
├── components/
│ ├── Navbar.jsx
│ └── MovieCard.jsx
├── contexts/
│ └── MovieContext.jsx
├── pages/
│ ├── Home.jsx
│ └── Favorites.jsx
├── services/
│ └── api.js
└── App.jsx
