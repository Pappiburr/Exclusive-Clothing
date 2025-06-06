# Environment Setup Guide

## Prerequisites
- Node.js and npm installed
- Firebase project created
- Stripe account set up

## Environment Variables Setup

### 1. Create Environment File
Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

### 2. Configure Firebase
1. Go to your Firebase Console
2. Select your project
3. Go to Project Settings → General
4. Copy the Firebase configuration values
5. Update your `.env` file with these values:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 3. Configure Stripe
1. Go to your Stripe Dashboard
2. Get your publishable key from API keys section
3. Add to your `.env` file:

```env
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

### 4. For Production (Netlify)
Set environment variables in Netlify dashboard:
- Site Settings → Environment Variables
- Add all REACT_APP_ variables
- Add STRIPE_SECRET_KEY for serverless functions

## Security Notes
- ✅ Never commit `.env` files to version control
- ✅ Use different keys for development and production
- ✅ Regularly rotate API keys
- ✅ Review Firebase security rules

## Development Commands
```bash
npm install        # Install dependencies
npm start         # Start development server
npm run build     # Build for production
```

## Troubleshooting
- If you see environment variable errors, ensure all required variables are set
- Check that variable names start with `REACT_APP_` for client-side variables
- Restart the development server after changing environment variables 