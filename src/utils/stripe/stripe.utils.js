import{ loadStripe} from '@stripe/stripe-js';

// Validate Stripe environment variable
if (!process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY) {
  throw new Error(
    'Missing REACT_APP_STRIPE_PUBLISHABLE_KEY environment variable.\n' +
    'Please add your Stripe publishable key to your .env file.'
  );
}

export const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);