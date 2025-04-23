# Blooms Travel Agency App

![Blooms Travel Logo](/src/assets/butterfly-garden.jpg)

Once upon a time, in the bustling world of travel, Blooms Travel Agency faced a dramatic crisis! Their dedicated developer lost her fingers in a bizarre gardening mishap, leaving their website broken and customers unable to book their dream vacations. With time ticking away, a heroic student jumped in to save the day, fixing the site in just 30 minutes so eager travellers could once again explore magical getaways. This app is the result — a simple React tool to manage PIN-protected vacation access, inspired by passion and adventure!

## Project Structure

The application is organised into separate components for easy maintenance:

```
src/
├── Components/
│   ├── Header.jsx           # Handles the header with dynamic name display
│   ├── PinInput.jsx         # Simple PIN input for security
│   └── VacationImage.jsx    # Displays vacation image after successful access
├── App.jsx                  # Main component tying everything together
├── main.jsx                 # Entry point to render the app
├── App.css                  # App-specific styles
├── index.css                # Global styles
└── assets/                  # Contains images like butterfly-garden.jpg for the UI
```

## Features

- PIN validation (enter '8008' to unlock vacations)
- Conditional rendering to show/hide content based on user input
- Show error message for wrong PIN
- Personal name shown to authorised travellers
- React hooks like useState and useEffect for simple state management
- Styled with Tailwind CSS for a modern look

![Vacation Example](/src/assets/vacation.jpg)

This app helps Blooms Travel Agency quickly get back online, ensuring customers can book their trips without delay. The student hero fixed it just in time!

## Development

To run the project locally and continue the fixes:

```bash
npm install
npm run dev
```

Hurry—every second counts for those vacation dreams!

