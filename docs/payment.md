# Payment

There are two main ways that users can gain full access to the app. Either they
sign up themselves via the app stores, or they are given an access code, likely
purchased for them by a practitioner.

## Mobile subscriptions

Mobile app subscriptions are handled via [RevenueCat](https://www.revenuecat.com/).

Any modification to prices or trial lengths should be made in
[App Store Connect](https://appstoreconnect.apple.com/) or the
[Google Play Console](https://play.google.com/console), while addition or
removal of products can be done via RevnueCat.

At the time of writing, all subscriptions grant full access to the app.

## Web payments

Web payments are handled via [Stripe](https://stripe.com).

Any modification to prices should be made via the
[Stripe products page](https://dashboard.stripe.com/products). It is important
that the metadata of each product includes a `quantity`, where the value defines
how many access codes are provided when the product is purchased. Each product
should also be setup as a "One-time" purchase.
