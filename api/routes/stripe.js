const router = require("express").Router();
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")('sk_test_51LXNjRIh6QtX1wjxfMs89KeoWpQFzbqcz2hyn26yN6b27lV2TqhcIaiGaRj3Wq6YOXt1NkYIRbZsypkYrRwFdQXI00aBhCSt2B');

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;