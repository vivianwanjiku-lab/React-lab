# Project Showcase App

A clean, responsive React application for showcasing your projects with dynamic add and search functionality.

## Features

✨ **Landing Page** – A modern hero section introducing the app  
➕ **Add Projects Dynamically** – Create new projects on-the-fly with title and description  
🔍 **Search & Filter** – Instantly search projects by title or description  
📱 **Responsive Design** – Works seamlessly on desktop and mobile devices  
🎨 **Modern UI** – Clean, professional design with gradient backgrounds and smooth interactions  

## Tech Stack

- **React 18.3** – UI library
- **Vite 5.4** – Fast build tool and dev server
- **CSS3** – Modern styling with gradients and flexbox/grid layouts
- **Node.js** – Runtime environment

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:vivianwanjiku-lab/React-lab.git
   cd React\ lab
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Local: `http://localhost:5173/`
   - Network: `http://192.168.100.9:5173/` (or your local IP)

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

### Adding Projects
1. Fill in the **Title** and **Description** fields in the "Add Project" form
2. Click the **Add** button
3. Your project appears instantly in the list below

### Searching Projects
1. Use the **Search** input field
2. Type to filter projects by title or description
3. Results update in real-time

### Project Data
Projects are stored in React state (in-memory). The data resets when you refresh the page.

## Project Structure

```
React lab/
├── App.jsx              # Main app component with state management
├── App.css              # Global styles and responsive layout
├── projectList.jsx      # Component displaying projects
├── projectList.css      # Project list styling
├── projectForm.jsx      # Component for adding new projects
├── projectForm.css      # Form styling
├── searchbar.jsx        # Component for searching projects
├── searchbar.css        # Search bar styling
├── main.jsx             # React DOM entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Known Limitations

⚠️ **Data Persistence** – Projects are stored in React state only. Refreshing the page will reset all data. To persist data, consider adding localStorage or connecting to a backend database.

⚠️ **No Edit/Delete** – Currently, users can only add projects. There's no functionality to edit or delete existing projects.

⚠️ **No Categories/Tags** – Projects don't have tags or categories for organization.

⚠️ **No Images** – Projects only support title and description text (no image uploads).

⚠️ **No Backend** – This is a frontend-only application with no server-side validation or storage.

## Future Enhancements

- Add localStorage to persist projects across sessions
- Implement edit and delete functionality
- Add project categories/tags
- Include image upload capability
- Add project details page
- Backend integration with database
- User authentication

## Troubleshooting

### Dev server won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port 5173 already in use
```bash
# Run on a different port
npm run dev -- --port 3000
```

### Build fails
```bash
# Ensure all dependencies are installed
npm install
npm run build
```

## License

This project is open source and available for personal and educational use.

## Contact

For questions or feedback, please open an issue in the GitHub repository.

---

**Repository:** [vivianwanjiku-lab/React-lab](https://github.com/vivianwanjiku-lab/React-lab)
