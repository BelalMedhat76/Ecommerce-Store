// components/CheckoutForm.js
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret, {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (stripeError) {
      setError(stripeError.message);
      setIsProcessing(false);
    } else if (paymentIntent.status === 'succeeded') {
      // Handle success (e.g., display a success message)
      alert('Payment successful!');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-2 border rounded" />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
}
