# React Shop Product Viewer

This project is a React application built with TypeScript that displays a list of products and detailed product information fetched from the live API at [dummyjson.com](https://dummyjson.com/products). The project demonstrates how to integrate a live API, implement routing, and use TypeScript for type safety.



## Project Overview

- **Product List:** Displays a list of products fetched from the dummyjson API.
- **Product Details:** Shows detailed information for a selected product.
- **Layout:** The app uses a two-pane design:
  - **Left Side:** Displays product details (or a placeholder message if no product is selected).
  - **Right Side:** Shows the product list.
- **Routing:** Uses `react-router-dom` (v6) for navigation.
- **Styling:** Basic CSS is included. Feel free to adjust or add styles to enhance the layout and responsiveness.
  - The application should be **Mobile Responsive**



## Live API Integration

The project uses live API endpoints from dummyjson.com:

- **Fetch All Products:** `https://dummyjson.com/products`
- **Fetch Product by ID:** `https://dummyjson.com/products/{id}`

## Read the Instructions Carefully
- Update this readme.md to remove the instructions section
- You should implement components. Apply minimum css to make the page look good.
  - **Product list**
    - **Pagination**
      - Fetch All Products from: [https://dummyjson.com/products](https://dummyjson.com/products)
      - Each item should display:
        - availabilityStatus
        - brand
        - category
        - minimumOrderQuantity
        - price (before and after discount)
        - rating
        - stock
        - thumbnail
        - title
  - **Product item**
    - On item click:
      - Display product full details in the center of app as can be seen in the [API](https://dummyjson.com/products/1)
      - Make sure to include review section with (dates, comment and rating)

- Deploy your react code in **netlify.com** for demo purposes.
  - An issue might occur when you refresh the product detail page once deployed on Netlify. Consider that issue as well while deploying.

- Make your repo **public** and share your repo through this [google form](https://docs.google.com/forms/d/e/1FAIpQLSfpqEJL-Uz01ZIthyqB_VOhXXvrFNlZDizWkqNHFhanxyL90A/viewform).

- Follow the **guidelines** below
  - ⁠Avoid importing CSS files directly from the index and using them globally in the application. Prefer structured and component-specific imports.
  - ⁠When using utilities or classes, make sure their names are clear and intuitive, so it’s easy to understand their origin and purpose.
  - ⁠Use the latest syntax for React 19. Avoid outdated patterns, such as those from React 13.
  - ⁠Keep the code clean, organized, and easy to read. Avoid unnecessary clutter or redundant code.
  - ⁠Ensure there are no issues when refreshing the page. Test how the code behaves in such scenarios and resolve any issues beforehand.
  - ⁠Make sure that all features are correctly displayed and functional in the frontend. Avoid leaving gaps or missing components.
