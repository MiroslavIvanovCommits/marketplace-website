# :shopping: Clothing deals

Link to the site ➜ [Clothing Deals](https://marketplace-website-beta.vercel.app)

A web page where you can share the best clothing deals you have found with other people, saving them time and money for free.<br/>
You can check all posts without the need of having website registration, thus giving you more options to protect your privacy and security online.

### :scroll: Application has the following functionalities:
- **`Home page(/)`** with quick buttons for registration and about information.
- **`About page(/about)`**
- **`Catalog page(/catalog)`** where you can access all posts and their corresponding detail pages.
- **`Stats page(/stats)`** where you can check the total number of posts and site visits for the last month.
- **`Login page(/login)`** where you can log in.
- **`Register page(/register)`** where you can sign up.
- **`Logout page(/logout)`** which logs the current user out and redirects to the Home page.
- **`Details page(/details/:postId)`** with likes count and description of the post, option to like it if the user is register and options to edit and delete if the user is also the owner.
- **`Create page(/create)`** for adding a new post.
- **`Edit page(/edit/:postId)`** for editing an existing post.
- **`Delete page(/delete/:postId)`** for deleting and existing post.
- **`Like button`** for liking another user's posts.
- **`Header`** with navbar for easy navigation.
- **`Footer`** with additional referances.
- **`Error404 page`** for unvalid addresses.

Unregistered Visitors can access the following pages: `Home`, `About`, `Catalog`, `Stats`, `Details`, `Login`, `Register`.

If the Visitor registers, he'll become User. The User can access the following pages: `Home`, `About`, `Catalog`, `Stats`, `Details`, `Create`, `Logout`, `Edit`, `Delete` and can also like other user's posts (`Edit` and `Delete` only if the User is the creator of the post and `like` functionality only if he is not the creator).

Once registered, using the `Create page` takes you to a form where you can submit only after filling it with valid information. There is a verification. The deal name must be between 8 and 60 characters long, description must be between 30 and 2000 characters long, valid imageUrl must be provided and deal type selected.<br/>
`Edit page` requires the same validations as `Create page`.<br/>
`Delete`... well deletes :wink:

The images and pdf files are uploaded to the deployed SoftUni practice server.

The site takes you to the `Error404 page` if you try to access a non-existent url.

The `Footer` has links to different social media pages, which, when clicked, will open in a new tab.

All data is stored on Heroku, where SoftUni Practice Server with hard code data is running.<br/>
**The data doesn't persist for more than 24 hours!**

 🔨 Made using:
 --
 
- IDE:
  - [Visual Studio Code](https://code.visualstudio.com)
- Front-End:
  - [ReactJS](https://reactjs.org)
- Web Server:
  - [Slightly modified version of SoftUni Practice Server](https://github.com/MiroslavIvanovCommits/softuni-practice-server-marketplace-website)
- Web Hosting:
  - [Heroku](https://softuni-practice-server-market.herokuapp.com)
  - [Vercel](https://marketplace-website-beta.vercel.app)
- Back-End:
  - [Node.js](https://nodejs.org/en)
- Markup Languages:
  - [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- NPM packages:
  - [react](https://www.npmjs.com/package/react)
  - [react-dom](https://www.npmjs.com/package/react-dom)
  - [react-router-dom](https://www.npmjs.com/package/react-bootstrap)
  - [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
  - [node-uuid](https://www.npmjs.com/package/node-uuid)
  - [react-hook-form](https://www.npmjs.com/package/react-hook-form)
  - [react-scripts](https://www.npmjs.com/package/react-scripts)
  - [web-vitals](https://www.npmjs.com/package/web-vitals)
  - [yup](https://www.npmjs.com/package/yup)
  - [hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
  - [testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)
  - [testing-library/react](https://www.npmjs.com/package/@testing-library/react)
  - [testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event)

- Additionals:
  - [Font Awesome](https://fontawesome.com)
  - [Stock images from Pexels.com](https://www.pexels.com)
  - [Basic Skeleton by NIM V1.0 Free Website Template](https://www.free-css.com)
  - [Error404 by Colorlib 404 v3](https://colorlib.com/wp/free-404-error-page-templates)


<!-- ## :camera: Preview:

### Home Page

![Home](https://i.imgur.com/zx6WBrF.png) -->


<!-- LICENSE -->
## :black_nib: License

Distributed under the GNU v2.0 License. See `LICENSE` for more information.
