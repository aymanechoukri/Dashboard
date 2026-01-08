# Routing Fix TODO

## Issues Identified:
1. SideBar.jsx: Links to `/users` but route is at `/dashboard/users`
2. App.jsx: Duplicate export and incorrect import (Usres vs Users)
3. Users.jsx: Duplicate export and empty return
4. ScrityDashboard.jsx: Missing Outlet for nested routes

## Tasks:
- [x] Analyze the issues
- [x] Fix SideBar.jsx - change `/users` to `/dashboard/users`
- [x] Fix App.jsx - remove duplicate export, fix import
- [x] Fix Users.jsx - remove duplicate export, add proper JSX
- [x] Fix ScrityDashboard.jsx - add Outlet import and render
- [x] Restructure App.jsx for proper nested routing


