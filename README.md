## Setup on your machine

Clone the repo onto your machine, then head into the frontend directory.<br />  
Remove the node_modules folder, and in that directory run:

### `npm install`

This will install all the dependencies needed.<br />
It will re-add the node_modules.

### Run Spring Boot

Head into the backend directory.<br />
Run BackendApplication.java.<br />
Open http://localhost:8080 to view it in the browser.

### `npm start`

Runs the app in the development mode.<br />
Open http://localhost:3000 to view it in the browser.

## Technologies

- [Spring Boot](https://spring.io/projects/spring-boot)
- [React js](https://reactjs.org/)
- [SQLite ](https://www.sqlite.org/index.html)

## Project Description

| Contributor         | Feature                    | Benefit                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Leinier Perez       | Book Browsing and Sorting  | Users will have a simple and enjoyable way to discover new books and Authors and sort results. Allow user to browse books by genre, top sellers in our book store, and book rating with pagination based on 10 or 20 results. Allow Sort by book title, author, price, book rating, and release date.                                                                                                                                                                                                                                                                                                                                                       |
| Dailen Perez        | Profile Management         | Users can create and maintain their profiles rather than enter in their information each time they order. Users can manage their login credentials (ID, password), personal information (name, email address, home address), nickname for book rating and commenting, credit card information (multiple), and shipping address (multiple). Physical addresses, email addresses, and credit card info should be verified as valid. Passwords must meet our current security standards.                                                                                                                                                                       |
| Julia Pranckevicius | Shopping Cart              | Users can manage items in a shopping cart for immediate or future Purchase. Users can easily access their cart from any page, view the same information displayed in the book list, change the quantity, remove it from their cart or save it for later. A subtotal for all items in their shopping cart should be displayed at the bottom. Items saved for later should appear below that.                                                                                                                                                                                                                                                                 |
| Maricela Ramirez    | Book Details               | Users can see informative and enticing details about a book. Display book name, book cover (which can be enlarged when clicked), author and bio, book description, genre, publishing info (publisher, release date, etc.), book rating, and comments. Hyperlink author’s name to a list of other books by the same author.                                                                                                                                                                                                                                                                                                                                  |
| Joseph Pizza        | Book Rating and Commenting | Users can rate AND comment on books they’ve purchased to help others in their selection. For Rating: Use a five-star rating system. Users can only rate a book if they’ve purchased it, and may select whether they show their nickname (defined in their profile) or remain anonymous. For Commenting: A single comment should be limited to the number of characters, which can fit within half the browser window (so that there are at least two comments which can appear at the same time). Users can only comment on a book if they’ve purchased it, and may select whether they show their nickname (defined in their profile) or remain anonymous. |
| Maria Perez         | Wish List Management       | Users can create and have 3 different wish lists which can have books moved to from the primary list. There will be a section called wish lists, in which the user can create up to 3 new lists and give them different names. Each list can show the items that have been added to the list and each item can be added to the cart. Items can be added to the different lists from the item details page. Items can be removed from any list in this section. Items can be transferred from one wish list to another.                                                                                                                                      |

### The application must have the following components:

- Front End: A front end UI of your choice which will make calls to the REST API.
- RESTful API: An API service that is exposed to the front using HTTPS exposing functional endpoints.
- Backend Database: A Database of your choice to store the data which can only be accessed by the API.
