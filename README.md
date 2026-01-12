# Dashboard

A modern, responsive dashboard application built with React, Vite, and Tailwind CSS. Features include dark/light mode, user management, product management, and interactive charts.

## 🚀 Features

- **Authentication System**
  - User login
  - User registration
  - Secure dashboard access

- **Dark/Light Mode**
  - Toggle between themes
  - Smooth transitions
  - Persistent theme preference (localStorage)

- **User Management**
  - View all users
  - Add new users
  - Edit existing users
  - Delete users

- **Product Management**
  - View all products
  - Add new products
  - Edit product details
  - Delete products

- **Interactive Dashboard**
  - Statistics cards
  - Charts (powered by Chart.js)
  - Animated elements

- **Modern UI/UX**
  - Tailwind CSS styling
  - Responsive design
  - FontAwesome icons
  - Smooth animations (Motion)
  - Toast notifications

## 📦 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Charts**: Chart.js & React Chart.js 2
- **Icons**: FontAwesome React
- **Animations**: Motion
- **Notifications**: React Toastify
- **Linting**: ESLint

## 🛠️ Installation

1. Clone the repository:
   ```bash
   cd /home/asus/Desktop/2026dev/dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
dashboard/
├── public/
│   └── Images/           # Static images (login.png, register.png)
├── src/
│   ├── Auth/             # Authentication components
│   │   ├── AddUsers.jsx
│   │   ├── AddProducts.jsx
│   │   ├── EditeUsers.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── ScrityDashboard.jsx
│   ├── Components/       # Reusable components
│   │   ├── SideBar.jsx
│   │   └── TopBar.jsx
│   ├── Context/          # React Context providers
│   │   ├── ProductContext.jsx
│   │   ├── ProductProvider.jsx
│   │   ├── ThemeContext.jsx
│   │   ├── ThemeProvider.jsx
│   │   ├── UserContext.jsx
│   │   └── UserProvider.jsx
│   ├── Pages/            # Page components
│   │   ├── Dashboard.jsx
│   │   ├── DashboardChart.jsx
│   │   ├── Product.jsx
│   │   └── Users.jsx
│   ├── App.jsx           # Main App component
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Theme System

The application uses a custom ThemeContext to manage dark/light mode:

- **Theme Context** (`src/Context/ThemeContext.jsx`)
- **Theme Provider** (`src/Context/ThemeProvider.jsx`)

The theme preference is persisted in localStorage and automatically applies to all components.

## 📊 Context Providers

- **UserContext/UserProvider**: Manages user authentication state and user data
- **ProductContext/ProductProvider**: Manages product data and operations
- **ThemeContext/ThemeProvider**: Manages application theme (dark/light mode)

## 🔐 Authentication

The dashboard includes a complete authentication flow:
1. Users can register a new account
2. Users can log in with existing credentials
3. Protected routes prevent unauthorized access

## 📱 Responsive Design

The dashboard is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🧪 Future Improvements

- [ ] Complete theme toggle verification
- [ ] Add unit tests
- [ ] Implement backend API integration
- [ ] Add database support
- [ ] Implement user roles and permissions
- [ ] Add export functionality (PDF, CSV)
- [ ] Implement search and filtering
- [ ] Add pagination for user/product lists

## 📝 License

This project is for educational and demonstration purposes.

## 🤝 Contributing

Feel free to fork this project and make improvements. Pull requests are welcome!

---

Built with ❤️ using React, Vite, and Tailwind CSS

