# SpaceX Launches Explorer

A frontend project that displays and explores SpaceX launch data using the public [SpaceX API](https://github.com/r-spacex/SpaceX-API).

[SpaceX Launches Explorer - Live Netlify link](https://elegant-syrniki-110783.netlify.app/)


## 1. Architecture & Tech Stack

This project follows a clean and modular structure for clarity and scalability:

 
> /my-app  
> ├─ /app               # Page-level views (Home, LaunchDetails)  
> ├─ /components        # Reusable UI components (LaunchCard, LaunchPatch, Sidebar)  
> ├─ /lib               # API services & fetch utilities  
> ├─ /public            # Static images & styling  
> ├─ /types             # TypeScript interfaces for API responses  
> └─ main.tsx           # App entry point


*Why this Organization?*

Separation of concerns: Pages handle layout, components handle UI, /lib focuses on data.

Scalability: Easy to add new views (e.g., Rockets, Crew, Capsules) without refactoring.

Types folder: Ensures reliability when working with API models.

### Tech Choices


| Tool          | Reason                                             |
|---------------|----------------------------------------------------|
| React + Vite  | Fast dev server + optimized build output           |
| TypeScript    | Prevents runtime errors, improves API reliability  |
| React Query   | Data caching, loading/error states, auto-refetching|
| React Router  | Clean route mapping for / and /launch/:id          |
| SpaceX API    | Free REST API with real launch data                |


## 2. AI Usage (Transparency)

AI was used as a productivity tool, not as the sole developer.

| Tool                | How It Was Used                                                       |
|----------------------|-----------------------------------------------------------------------|
| ChatGPT              | Drafted TypeScript interfaces and helped debug async fetch errors    |
| ChatGPT (prompting)  | Brainstormed UI layout ideas and improved copywriting in components  |

All generated code was reviewed, refactored, and adapted manually.
No AI-generated code was used without validation.

## 3. Design Decisions

The UI design focuses on clarity and quick navigation:

- The home page uses a card grid and list layout to browse launches by name, date, and status.
- Each card includes key information (mission name, date, success/failure badge).
- The details page prioritizes readability: launch summary, rocket info, and external links.
- Visual hierarchy:
  - Titles > metadata > descriptions > external links.
- Status colors:
  - 🟢 **Success**
  - 🔴 **Failed**


UX Goal: Zero-confusion flow. A user should understand a mission at a glance.

## 4. Challenges & Trade-offs

| **Challenge**                               | **Solution**                                                        |
|---------------------------------------------|---------------------------------------------------------------------|
| Inconsistent API fields between launches     | Created strict TypeScript interfaces & optional chaining            |
| Pagination / too much data at once           | Cached & limited results with React Query                           |
| API rate limits                              | Added basic request retry + fallback error UI                       |
| Deep details vary by mission                 | Display only available fields and avoid blank-space design issues   |

If I Had More Time, I Would:

- Add more filtering options (by year, rocket type)
- Add search with debounced requests
- Improve error states with retry/backoff strategies
- Implement dark mode
- Improve UI design
- Add more test cases (unit + integration)

## Deployment

Optimized for platforms like **Netlify**:

>npm run build
>*dist/ is generated and ready to deploy*

## Testing

An example test case was created for LaunchPatch component, it can be executed from Terminal:

>npm test
