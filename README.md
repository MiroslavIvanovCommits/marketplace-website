# :shopping: Clothing deals

Link to the site ➜ [Clothing Deals](https://)

A web page where you can share the best clothing deals you have found with other people, saving them time and money for free.<br/>
You can check all posts without the need of having website registration, thus giving you more options to protect your privacy and security online.

### Application has the following functionalities:
- `Home page(/)` with quick buttons for registration and about information.
- `About page(/about)`
- `Catalog page(/catalog)` where you can access all posts and their corresponding detail pages.
- `Stats page(/stats)` where you can check the total number of posts and site visits for the last month.
- `Login page(/login)` where you can log in.
- `Register page(/register)` where you can sign up.
- `Logout page(/logout)` which logs the current user out and redirects to the Home page.
- `Details page(/details/:postId)` with likes count and description of the post, option to like it if the user is register and options to edit and delete if the user is also the owner.
- `Create page(/create)` for adding a new post.
- `Edit page(/edit/:postId)` for editing an existing post.
- `Delete page(/delete/:postId)` for deleting and existing post.
- `Like button` for liking another user's posts.
- `Header` with navbar for easy navigation.
- `Footer` with additional referances.

Unregistered Visitors can access the following pages: `Home`, `About`, `Catalog`, `Stats`, `Details`, `Login`, `Register`.

If the Visitor registers, he'll become User. The User can access the following pages: `Home`, `About`, `Catalog`, `Stats`, `Details`, `Create`, `Logout`, `Edit`, `Delete` and can also like other user's posts (`Edit` and `Delete` only if the User is the creator of the post and `like` functionality only if he is not the creator).







## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
