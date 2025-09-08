# UstackSchool Video Learner

A React/TypeScript application for managing and playing YouTube videos, built as a take-home assignment to demonstrate web development skills for UstackSchool's EdTech platform.

## Features

- **Video Playback**: Embed YouTube videos using `react-youtube`, with a memoized player for performance.
- **Add Videos**: Simplified form (title, description & YouTube URL) fetches mock metadata (title, created date, views).
- **Video List**: Responsive list (desktop) or cards (mobile) with watch/delete controls, powered by Redux.
- **Responsive UI**: Tailwind v4 with custom animations (`fade-in`, `shake`) and accessibility (ARIA labels).

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **YouTube Integration**: `react-youtube`
- **Deployment**: GitHub Pages

## Setup

1. Clone the repo:
   ```bash
   git clone <your-repo-url>
   cd ustackschool-video-learner
   ```

## Live Link

You can view on [ustackschool-video-live](https://sochuks.github.io/ustackschool-video/)
