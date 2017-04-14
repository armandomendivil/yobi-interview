## Running the application

```bash
$ yarn
$ npm run start
```

## Configuration information

We've provided redux, react-router, and redux-saga to the project. You'll use these packages to complete the questions below.

The `API_URL` found in `config/default.js` is the API url you'll need to request products.

The GET route to request products is: `/products`;

We're looking for use of each of the three packages listed above. You're free to use any HTTP library to call the API.

## Questions

When a user navigates to the application for the first time, the application should download the products from the API. While the product information is being fetched from the API, an indication of progress should be displayed.

Upon the completion of the product download, a listing of products should be displayed on the screen. The order of the products should be determined by the product name. Each item in the listing should display the following:

1. Product Name
2. Product Type
3. Whether the product has bulk
4. Whether the product has retail

When a user clicks on an item in the listing, the application should display a view which shows the details of the product. The product detail view should include all the data from the item in the listing and the following additions:

1. Description
2. Batch Number
3. Lot Id

We've provided a basic structure to get you started. However, feel free to change it in any way you see fit.

## Bonus Questions, Not Required

1. Implement state and component testing using Jest
2. Implement product search functionality

Good luck! If you need any assistance please reach out to taylor@getyobi.com
