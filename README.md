#### Project Name:

Shopping Cart 

A webpage used to order form list of hamburgers based on price, built with React, JavaScript, HTML and CSS.

## Project Status
1. Implemented Add To Cart Feature
2. Collapsible Sidebar 
3. Responsive
4. Populated data from ProductData.json

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

#### Example:  

This was a 46 hour project built with multiple components in React and familiarizing myself with documentation for new features.  

I started this process by using the `create-react-app` boilerplate.  

The Project is divided into four major components 

## Sidebar
This component is a collapsible sidebar which includes list of menus having arrow at top to hide/show the sidebar.

## Topbar
This component is placed at the top of the page with two more components 
1. searchbar - A component showing input with icons 
2. iconText - A component showing icon with text with different classes to show border,background

## Products
This component is below the topbar.
It has predefined ProductData.json (having list of hamburgers with price & image ) which gets populated in a card format on import. 
User can click on the hamburger card to add it to the cart.

## Cart-Sidebar
This component is created when user clicks on the hamburger card. 
It shows list of selectedProduct with options to add and remove.
Total is calculated at the bottom using calculateTotal method. 
User can add quantity of the hamburger and also remove it.
