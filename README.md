# 📞 PhoneBook Application

A modern React application built with Vite that allows users to manage their personal contacts with full authentication system. Features Redux Toolkit for state management, Redux Persist for token persistence, and a secure backend API for data storage.

---

## ✨ Features

## 🔐 Authentication System

- User Registration - Create new account with name, email, and password
- User Login - Secure authentication with JWT token
- User Logout - Clear session and remove contacts from state
- Persistent Sessions - Token stored in localStorage via Redux Persist
- Auto-refresh - User data restored on page refresh without re-login

## ➕ Add Contact

- Add new contacts with name and phone number
- Form validation with Formik and Yup
- Automatic backend synchronization via POST request
- Duplicate contact detection with user feedback

## 🗑️ Delete Contact

- Remove contacts with a single click
- Confirmation dialog before deletion
- Instant UI update with optimistic rendering
- DELETE request to backend for data consistency

## ✏️ Update Contact

- Edit existing contact information
- PATCH request support from backend
- Inline editing with validation

## 🔍 Filter Contacts

- Real-time filtering by contact name or phone number
- Case-insensitive search functionality
- Memoized selector (selectFilteredContacts) for optimized performance
- Empty state handling with user-friendly message

## 🌐 Backend Integration

- Full CRUD operations with connections-api.goit.global REST API
- HTTP requests handled via axios library
- Async operations managed with createAsyncThunk
- Proper error handling with try...catch and rejectWithValue
- JWT token authentication for protected routes

## 📊 Loading & Error States

- Visual loading indicator during API requests
- Error messages displayed for failed operations
- State properties: isLoading: boolean, error: string | null

## 🎨 Modern UI

- Clean, responsive design with CSS Modules
- Component-scoped styling for maintainability
- Accessible form elements and semantic HTML
- Consistent navigation across all pages

## 🔒 Security Features

- JWT token-based authentication
- Token automatically attached to API requests via axios interceptors
- Token cleared on logout
- Protected routes require valid authentication
- Sensitive data (token) persisted securely in localStorage

---

## 🛠️ Technologies Used

- ⚛️ React 18 (UI Library)
- ⚡ Vite (Build Tool & Dev Server)
- 🧰 Redux Toolkit (State Management)
- 🔄 createAsyncThunk (Async Operations)
- 💾 Redux Persist (Token Persistence)
- 🌐 axios (HTTP Client)
- 🧭 React Router DOM (Client-side Routing)
- 📝 Formik (Form Management)
- 🎨 CSS Modules (Component Styling)
- 🟨 JavaScript (ES6+) (Programming Language)
- 📦 npm (Package Manager)
- ▲ Vercel (Deployment Platform)

---

## 📁 Project Structure

    ├── src/
    │ ├── components/
    │ │ ├── App/
    │ │ │ ├── App.jsx
    │ │ │ └── App.module.css
    │ │ ├── AppBar/
    │ │ │ ├── AppBar.jsx
    │ │ │ └── AppBar.module.css
    │ │ ├── AuthNav/
    │ │ │ ├── AuthNav.jsx
    │ │ │ └── AuthNav.module.css
    │ │ ├── Contact/
    │ │ │ ├── Contact.jsx
    │ │ │ └── Contact.module.css
    │ │ ├── ContactForm/
    │ │ │ ├── ContactForm.jsx
    │ │ │ └── ContactForm.module.css
    │ │ ├── ContactList/
    │ │ │ ├── ContactList.jsx
    │ │ │ └── ContactList.module.css
    │ │ ├── Filter/
    │ │ │ ├── Filter.jsx
    │ │ │ └── Filter.module.css
    │ │ ├── Layout/
    │ │ │ ├── Layout.jsx
    │ │ │ └── Layout.module.css
    │ │ ├── LoginForm/
    │ │ │ ├── LoginForm.jsx
    │ │ │ └── LoginForm.module.css
    │ │ ├── Navigation/
    │ │ │ ├── Navigation.jsx
    │ │ │ └── Navigation.module.css
    │ │ ├── PrivateRoute/
    │ │ │ ├── PrivateRoute.jsx
    │ │ │ └── PrivateRoute.module.css
    │ │ ├── RegistrationForm/
    │ │ │ ├── RegistrationForm.jsx
    │ │ │ └── RegistrationForm.module.css
    │ │ ├── RestrictedRoute/
    │ │ │ ├── RestrictedRoute.jsx
    │ │ │ └── RestrictedRoute.module.css
    │ │ └── UserMenu/
    │ │ ├── UserMenu.jsx
    │ │ └── UserMenu.module.css
    │ ├── pages/
    │ │ ├── Home/
    │ │ │ ├── Home.jsx
    │ │ │ └── Home.module.css
    │ │ ├── Login/
    │ │ │ ├── Login.jsx
    │ │ │ └── Login.module.css
    │ │ ├── Registration/
    │ │ │ ├── Registration.jsx
    │ │ │ └── Registration.module.css
    │ │ └── Contacts/
    │ │ ├── Contacts.jsx
    │ │ └── Contacts.module.css
    │ ├── redux/
    │ │ ├── auth/
    │ │ │ ├── slice.js
    │ │ │ ├── operations.js
    │ │ │ └── selectors.js
    │ │ ├── contacts/
    │ │ │ ├── slice.js
    │ │ │ ├── operations.js
    │ │ │ └── selectors.js
    │ │ ├── filters/
    │ │ │ ├── slice.js
    │ │ │ └── selectors.js
    │ │ └── store.js
    │ ├── index.css
    │ └── main.jsx

---

## 🧠 State Management

The application uses Redux Toolkit for predictable global state management with async thunk support and Redux Persist for token persistence.

## 📦 Auth Slice (redux/auth/slice.js)

| Property     | Type          | Description              |
| ------------ | ------------- | ------------------------ |
| user.name    | string - null | Current user's name      |
| user.email   | string - null | Current user's email     |
| token        | string - null | JWT authentication token |
| isLoggedIn   | boolean       | Authentication status    |
| isRefreshing | boolean       | Token refresh status     |

## 🔄 Auth Operations (redux/auth/operations.js)

| Thunk       | HTTP Method | Endpoint       | Action Type   |
| ----------- | ----------- | -------------- | ------------- |
| register    | POST        | /users/signup  | auth/register |
| logIn       | POST        | /users/login   | auth/login    |
| logOut      | POST        | /users/logout  | auth/logout   |
| refreshUser | GET         | /users/current | auth/refresh  |

## 📦 Contacts Slice (contactsSlice.js)

| Property | Type           | Description                                    |
| -------- | -------------- | ---------------------------------------------- |
| items    | Array<Contact> | Array of contact objects                       |
| loading  | boolean        | Indicates if an async operation is in progress |
| error    | string - null  | Error message from failed operations           |

## 🔄 Contacts Operations (redux/contacts/operations.js)

| Thunk         | HTTP Method | Endpoint      | Action Type       |
| ------------- | ----------- | ------------- | ----------------- |
| fetchContacts | GET         | /contacts     | contacts/fetchAll |
| addContact    | POST        | /contacts     | contacts/add      |
| deleteContact | DELETE      | /contacts/:id | contacts/delete   |
| updateContact | PATCH       | /contacts/:id | contacts/update   |

## 🔍 Filters Slice (filtersSlice.js)

| Property   | Type   | Description                 |
| ---------- | ------ | --------------------------- |
| nameFilter | string | Current search filter value |

---

## 💾 Redux Persist Configuration

Only the authentication token is persisted to localStorage. User data is refreshed on each session.

---

## 🗺️ Routing Structure

| Route     | Component    | Access        | Description       |
| --------- | ------------ | ------------- | ----------------- |
| /         | Home         | /contacts     | contacts/fetchAll |
| /register | Registration | /contacts     | contacts/add      |
| /login    | Login        | /contacts/:id | contacts/delete   |
| /contacts | Contacts     | /contacts/:id | contacts/update   |

---

## 📝 API Documentation

- Base URL: https://connections-api.goit.global/

Authentication Endpoints

| Method | Endpoint       | Description           |
| ------ | -------------- | --------------------- |
| POST   | /users/signup  | Register new user     |
| POST   | /users/login   | Login existing user   |
| POST   | /users/logout  | Logout current user   |
| GET    | /users/current | Get current user data |

Contacts Endpoints

| Method | Endpoint       | Description      |
| ------ | -------------- | ---------------- |
| POST   | /users/signup  | Get all contacts |
| POST   | /users/login   | Add new contact  |
| DELETE | /users/logout  | Delete contact   |
| PATCH  | /users/current | Update contact   |

---

## 🧪 Testing Credentials

You can use these test credentials to explore the application:

```bash
Email: test@example.com
Password: test123
```

Or create your own account through the registration page.

## 🚀 Route Protection Components

- PrivateRoute - Redirects unauthenticated users to login page
- RestrictedRoute - Redirects authenticated users to contacts page

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/goit-react-hw-08.git
```

### 2️⃣ Navigate to project directory

```bash
cd goit-react-hw-08
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run development server

```bash
npm run dev
```

### 5️⃣ Open in browser

    http://localhost:5173

---

## 🌍 Live Demo

👉 ...

---

## 📌 Project Purpose

This project was developed as part of the GoIT React Homework #8 assignment - the final version of the Phone Book application.

🎯 Learning Objectives

- ✅ Implementing Redux Toolkit with createSlice and configureStore
- ✅ Managing async operations with createAsyncThunk
- ✅ Integrating axios for HTTP requests to REST API with JWT authentication
- ✅ Handling loading and error states in Redux
- ✅ Using extraReducers for thunk action handling
- ✅ Implementing memoized selectors with createSelector for performance optimization
- ✅ Structuring components with CSS Modules for scoped styling
- ✅ Using useSelector and useDispatch hooks effectively
- ✅ Implementing Redux Persist for token storage
- ✅ Creating protected routes with PrivateRoute and RestrictedRoute
- ✅ Building authentication flow (register, login, logout, refresh)
- ✅ Using Formik and Yup for form management and validation
- ✅ Following clean code principles and Prettier formatting
- ✅ Organizing project with component-based folder structure
- ✅ Deploying application to Vercel

---

## Author

**Kerem Yıldırım**  
🚀 React Development Final Project - Redux Toolkit & Backend Integration 🚀

---
