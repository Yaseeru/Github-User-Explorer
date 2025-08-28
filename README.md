# 🔍 GitHub User Explorer

A single-page React + TypeScript application that allows users to search GitHub usernames, view profile details (avatar, bio, followers), and explore the user’s 5 most recently updated repositories.  

This project demonstrates **frontend development skills**: SPA architecture, API integration, TypeScript, Tailwind CSS, routing, state management with Context, testing, and performance optimizations.

---

## ✨ Features
- 🔎 **Search GitHub Users** by username.
- 👤 **Profile Display** with avatar, bio, and followers count.
- 📂 **Repositories List** (latest 5, sorted by update time).
- 🚦 **Routing** with `react-router-dom` (Home, Profile, 404).
- 🎨 **Responsive UI** with Tailwind CSS.
- 🧪 **Unit Tests** with Vitest + React Testing Library.
- ⚡ **Performance Optimized**:
  - `React.memo` and `useMemo` used.
  - Lazy-loaded routes.
  - Disabled invalid submissions.
- ♿ **Accessibility Ready**:
  - ARIA roles.
  - Semantic HTML.
  - Proper alt text.

---

## 🛠️ Tech Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router v6
- **Testing**: Vitest + React Testing Library
- **Build Tool**: Vite

---

## 📦 Installation & Setup
Clone the repository and install dependencies:

```bash
git clone https://github.com/Yaseeru/Github-User-Explorer
cd github-user-explorer
npm install
````

Start the dev server:

```bash
npm run dev
```

Run tests:

```bash
npm run test
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🧪 Testing

* `SearchForm.test.tsx`: ensures form submission works correctly.
* `RepoList.test.tsx`: ensures repos are sorted and empty state renders properly.
* Coverage: tested for both **happy path** and **edge cases**.

---

## 🚀 Deployment

You can deploy this app easily to:

* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)
* GitHub Pages

Run:

```bash
npm run build
```

Then follow deployment provider’s steps.

---

## 📚 Lessons Learned

* How to integrate **GitHub REST API** into a React SPA.
* Managing global state using **React Context**.
* Writing **unit tests with Vitest + React Testing Library**.
* Using **React.memo, useMemo** and lazy-loading for performance.
* Ensuring **accessibility** with ARIA and semantic HTML.

---

## 👤 Author

Built with ❤️ by [Abdulhamid Abdullahi Sulaiman](https://github.com/YOUR-USERNAME)

```