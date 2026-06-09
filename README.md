# Asiimire Praise Portfolio

This portfolio now uses:

- `frontend/`: React + Vite
- `backend/`: NestJS contact API

## Run locally

Install dependencies:

```powershell
npm.cmd install
```

Run both frontend and backend:

```powershell
npm.cmd run dev
```

Then open:

- Frontend: `http://127.0.0.1:5173`
- Backend health: `http://127.0.0.1:3000/api/health`

Recruiter form submissions are stored in `backend/data/messages.json`.

## Send recruiter messages to your inbox

The portfolio frontend now supports Formspree.

1. Create a Formspree form.
2. Copy `frontend/.env.example` to `frontend/.env.local`.
3. Replace `YOUR_FORM_ID` with your real Formspree form id or endpoint.
4. Restart the frontend server.

If `VITE_FORMSPREE_ENDPOINT` is not set, the form falls back to the local NestJS API and stores messages in `backend/data/messages.json`.
