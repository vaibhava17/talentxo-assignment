# TalentXO React Challenge

This repository contains a React application that implements a functionality involving an item list and corresponding actions. The application includes GitHub Pages deployment configuration, unit testing for components, and all the described features. Below, you'll find information on how to set up and use the application, as well as details about the implemented functionality.

## Features

### Click on Add Button
- Clicking the "Add New Item to List" button will add an item to the item list in the left panel.
- It will also dynamically add the newly added item as an option in the dropdown menu.

### Jump to Item Action
- Selecting an option from the dropdown will scroll the left panel to the corresponding item.
- The selected item will be highlighted to indicate its selection.

### Click on Previous Button
- Clicking the "Previous Item" button will select the item just before the currently selected one in the left panel.
- The previously selected item will be highlighted.

### Click on Next Button
- Clicking the "Next Item" button will select the item just after the currently selected one in the left panel.
- The next item will be highlighted.

### Click on Delete Button
- Clicking the "Delete Item" button will remove the currently selected item from the left panel.
- The next item in the list will automatically be selected and highlighted.

### Click on Any Item in the Left Panel
- Clicking on any item in the left panel will display the corresponding "ITEM X" in the right panel.
- The value of X corresponds to the item number and will be dynamically updated.
- For example, clicking on "Item 1" will display "Item 1" in the right panel.

## Setup and Deployment

1. Clone the repository: `git clone https://github.com/vaibhava17/talentxo-assignment.git`
2. Navigate to the project directory: `cd talentxo-assignment`
3. Install dependencies: `npm install`
4. Run the application locally: `npm start`

## GitHub Pages Deployment

The application can be deployed using GitHub Pages. This repository already contains a GitHub Actions workflow configuration (`deploy.yml`) for automated deployment. To set up GitHub Pages deployment:

1. Push your changes to the `dev` branch.
2. The GitHub Actions workflow will automatically build and deploy your app to GitHub Pages.

## Unit Testing

Unit testing for components is implemented using a testing framework such as Jest and React Testing Library. You can run the unit tests using the following command:

```sh
npm test
```
