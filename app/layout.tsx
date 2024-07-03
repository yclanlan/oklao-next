'use client'
import { StateProvider } from '../component/context/StateProvider';
import reducer, { initialState } from '../component/context/Reducer';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import{ Sofia_Sans_Extra_Condensed } from 'next/font/google';

const stripePromise = loadStripe( "pk_test_51OwPNyP2M6rQKNRRCn6X55fJZB4sJYCCgsM09pnHDKtZkdX4xNfHgJMxyXUfUZQENes223aGIjmOMbfCaa84QPxc00ikMzUtTm")
                       
type RootLayoutProps = {
  children: React.ReactNode;
};





export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
       <body>
       
        <StateProvider initialState={initialState} reducer={reducer}>
        <Elements stripe={stripePromise}>
            {children}
          </Elements>
        </StateProvider>
       
      </body>
    </html>
  )
}
