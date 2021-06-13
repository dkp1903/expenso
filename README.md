## Expenso - Voice powered expense tracker PWA

[![Netlify Status](https://api.netlify.com/api/v1/badges/0a05044d-4584-41af-8510-f2dea0df3259/deploy-status)](https://app.netlify.com/sites/expenso/deploys)

[View the live deployment here](https://expenso.netlify.app)

Welcome! Expenso is a voice powered budget tracking app created using React, Material UI and Speechify that allows you to add income and expenses across a variety of categories.

The data persists in local storage, and thus, you don't need to worry about authentication or data privacy. It's only limited to your browser.

### How to run the app?

Go to https://expenso.netlify.app. You'll be prompted by the browser to allow microphone access. Click and hold the icon until it changes from a power icon to a mic icon. Once that is done, you're all set to record your transaction. Make sure there's a halo around the icon when you're recording - which shows that the app is listening.Use the format as given in the app itself to record a transaction.

A video walkthrough of the app can be found [here](https://www.loom.com/share/e0c12ce6262b434db4ad8be643537e95)

### Cons : 
- Limited only to one browser, since it doesn't maintain a database.

### Pros : 
- No database, all data is only maintained on your browser's local storage, so no worries about data privacy and security
- No network requests needed, so network requirement not a bottleneck
- Works offline
