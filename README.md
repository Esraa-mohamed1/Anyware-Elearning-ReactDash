# Student Dashboard Frontend

A modern React TypeScript application for managing student quizzes and announcements.
Video Demo:
[React-App.webm](https://github.com/user-attachments/assets/92cc1f62-06c7-4b3d-bd74-5495f3926b43)

## Features

- **Authentication**: Simple login system with HOC protection
- **Responsive Design**: Works on all screen sizes
- **Material UI**: Modern, accessible UI components
- **Redux Toolkit**: State management with RTK Query
- **Internationalization**: i18n support for multiple languages
- **TypeScript**: Full type safety
- **Reusable Components**: Modular component architecture

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Common components (RequireAuth, etc.)
│   ├── layout/         # Layout components (Sidebar, Header, Layout)
│   └── ui/             # UI components (Cards, Buttons, etc.)
├── features/           # Feature-based modules
│   ├── auth/           # Authentication feature
│   ├── dashboard/      # Dashboard feature
│   ├── announcements/  # Announcements feature
│   └── quizzes/        # Quizzes feature
├── services/           # API services
├── store/              # Redux store configuration
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── locales/            # i18n translation files
└── assets/             # Static assets
```

## Technologies Used

- **React 18** with TypeScript
- **Material UI** for UI components
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Axios** for API calls
- **i18next** for internationalization
- **React Testing Library** for testing

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Code Written by Developer

All code in this project was written by the developer. The only boilerplate code is from:
- Create React App TypeScript template (basic project structure)
- Material UI components (imported and customized)
- Redux Toolkit (configured and implemented)

## Features Implementation

### Authentication
- Simple login without credentials (demo mode)
- Higher Order Component (HOC) for route protection
- Persistent authentication state

### Dashboard
- Responsive grid layout
- Exam preparation card with motivational content
- Announcements feed with mock data
- Quizzes and assignments due list

### Responsive Design
- Mobile-first approach
- Breakpoint-based layouts
- Flexible grid system

### Internationalization
- English and Arabic translations
- Language detection
- Easy to add more languages

## Backend Integration

The frontend connects to the backend API at `http://localhost:5000/api` by default. Make sure the backend server is running for full functionality.

## Testing

The project is set up with React Testing Library and Jest. Run tests with:
```bash
npm test
```

## Deployment

Build the project for production:
```bash
npm run build
```

The build folder contains the production-ready files that can be deployed to any static hosting service.
