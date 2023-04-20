
const express = require("express")
const bodyParser = require("body-parser")
const app = express()


// const stripe = require('stripe')("sk_test_51LcBlVSAoyeeib7XKPZpix29b96rcja0aBeVcepDl0hXckMJL8H0mjdygL6OsfPhpi3enFkOgyQH7BqYPJzpr9AG00AXGMETMg")

app.use(bodyParser.json())

app.get("/", (req, res) => {
    // console.log("res : ", res)
    res.send("hello guys...")
})

const stripe = require('stripe')('sk_test_51Mw8mWSCc88vSVBk4IaSDMxwTanz7R6aiismSJqtSBV0X3LWY6UO0NMgMFUQufINGqEmkENGQKKweVAHdgERapVc00yBaRUYre');
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.post('/payment-sheet', async (req, res) => {

    const {amount, currency} = req.body

  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    customer: customer.id,
    // payment_method_types: ["card"],
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51Mw8mWSCc88vSVBkw6pUOUgLKORLszeJE3JIL3xJKWu1tzHGtKINthXbshNsvSd1N8ME51x2BpjBkxHyEuUAATCY00gY3b3z03'
  });
});

app.listen(3000, ()=> console.log("Running on http://localhost:3000"))
 
// const express = require('express');
// const app = express();

// const stripe = require('stripe')('sk_test_51Mw8mWSCc88vSVBk4IaSDMxwTanz7R6aiismSJqtSBV0X3LWY6UO0NMgMFUQufINGqEmkENGQKKweVAHdgERapVc00yBaRUYre');
// // This example sets up an endpoint using the Express framework.
// // Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

// app.post('/payment-sheet', async (req, res) => {
//   // Use an existing Customer ID if this is a returning customer.
//   const {amount, currency} = req.body 
//   const customer = await stripe.customers.create();
//   const ephemeralKey = await stripe.ephemeralKeys.create(
//     {customer: customer.id},
//     {apiVersion: '2022-11-15'}
//   );
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 5000,
//     currency: "CAD",
//     customer: customer.id,
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.json({
//     paymentIntent: paymentIntent.client_secret,
//     ephemeralKey: ephemeralKey.secret,
//     customer: customer.id,
//     publishableKey: 'pk_test_51Mw8mWSCc88vSVBkw6pUOUgLKORLszeJE3JIL3xJKWu1tzHGtKINthXbshNsvSd1N8ME51x2BpjBkxHyEuUAATCY00gY3b3z03'
//   });
// });

// app.listen(3000, () => {
//   console.log('Running on port http://localhost:3000');
// });
