<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center"> Restaurant Reviewer </h1>
  <table>
    <tr>
      <td align="center">
        Mobile
      </td>
      <td align="center">
        Desktop
      </td>
    </tr>
    <tr>
     <td width="37%" align="center">
        <a href="https://venture.web.app">
          <img src="screenshots/Mobile_Demo.gif" alt="Tablet Demo">
        </a>
      </td>
      <td align="center">
        <a href="https://venture.web.app">
          <img src="screenshots/Tablet_Demo.gif" alt="Tablet Demo">
        </a>
      </td>
    </tr>
  <table>
  <h4> TopTal - Screening Project </h4>
  <p align="center">
    A React app to review restaurants from Google Places API.
    <br />
    <a href="https://venture.web.app"><strong>View demo site »</strong></a>
    <br />
    <br />
  </p>
<!-- TABLE OF CONTENTS -->
    <h3> Table of Contents </h3>
  <div><a href="#built-with">Built With</a></div>
  <div><a href="#requirements">Requirements</a></div>
  <div><a href="structure">Project Structure</a></div>
  <div><a href="#getting-started">Getting Started</a></div>
</div>



<div id="built-with">
  <h2>Built With</h2>
  <p  align="right">
    (<a href="#top">back to top</a>)
  </p>
</div>

  <table >
    <tr>
      <td height="300" align="center">
        <img src="screenshots/slideshow.gif" alt="Tablet Demo" >
      </td>
      <td>
        <table>
          <tr>
            <td align="center">
              <img src="screenshots/React.png" alt="Reactjs" width="50px">
            </td>
            <td>
              <a href="https://reactjs.org/">React</a>
            </td>
          </tr>
          <tr>
            <td align="center">
              <img src="screenshots/Chakra-UI.png" alt="ChakraUI" width="100px">
            </td>
            <td>
              <a href="https://chakra-ui.com/">Chakra-UI</a>
            </td>
          </tr>
          <tr>
            <td align="center">
              <img src="screenshots/Firebase.png" alt="Firebase" width="100px">
            </td>
            <td>
              <a href="https://firebase.google.com/">Firebase</a>
            </td>
          </tr>
          <tr>
            <td align="center">
              <img src="screenshots/Places_API.png" alt="Places API" height="40px">
            </td>
            <td>
              <a href="https://developers.google.com/maps/documentation/places/web-service/overview">Places API</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

<br />
<br />
<div id="requirements">
  <h2>Project Requirements</h2>
  <p  align="right">
    (<a href="#top">back to top</a>)
  </p>
</div>

<h4> Screens </h4>
  <div><a href="#Login">Login Page</a></div>
  <div><a href="#Signup">Signup Page</a></div>
  <div><a href="#List">List Page</a></div>
  <div><a href="#Dashboard">Dashboard Page</a></div>
<h4> Forms </h4>
  <div><a href="#Review">Review</a></div>
  <div><a href="#CRUD">Create/Edit</a></div>

  <br />

<table >
  <tr>
  <td align="center">
  <h3>
    Screens
  </h3>
  </td>
  </tr>
  <tr>
    <td align="center" id="Login">
      <img src="screenshots/Login_Page.png" alt="Login page" height="300px">
    </td>
    <td align="center">
    <h3>
      <a href="https://git.toptal.com/screening/Kenneth-Lai/-/blob/master/src/screens/Login.js">Login Page</a>
    </h3>
      <h4> Requires </h4>
      <ol align="left">
        <li>  User must be able to log in. </li>
      </ol>
      <h4> Edge cases</h4>
      <ol align="left">
        <li>  Input validation with `yup` </li>
        <li>  Alerts on failed login </li>
        <li>  Suggests signup if new account </li>
      </ol>
    </td>
  </tr>
  <tr>
    <td align="center" id="Signup">
      <img src="screenshots/Signup_Page.png" alt="Sign up" height="500px">
    </td>
    <td align="center">
    <h3>
      <a href="https://git.toptal.com/screening/Kenneth-Lai/-/blob/master/src/screens/Signup.js">Signup Page</a>
    </h3>
    <h4> Requires </h4>
      <ol align="left">
        <li> User must be able to create an account </li>
        <li> Implement 2 roles with different permission levels </li>
      </ol>
      <h4> Edge cases</h4>
      <ol align="left">
        <li>  Confirm password validation with `yup` </li>
        <li>  Alerts on email already in use </li>
        <li>  Navigate back to `/login` </li>
      </ol>
    </td>
  </tr>
  <tr>
    <td align="center" id="List">
      <img src="screenshots/User_Restaurants_Page.png" alt="List Restaurant Page" width="400px">
      <img src="screenshots/User_Reviews_page.png" alt="List Reviews Page" width="400px">
    </td>
    <td align="center">
    <h3>
      <a href="https://git.toptal.com/screening/Kenneth-Lai/-/blob/master/src/screens/List/List.js">List Page (User view)</a>
    </h3>
    <h4> Requires </h4>
      <ol align="left">
        <li> Can rate and leave a comment for a restaurant </li>
        <li> When a Regular User logs in he will see a Restaurant List ordered by Rate Average </li>
        <li>When a restaurant is selected, a detailed view should be presented showing:
          <ol>
            <li>The overall average rating</li>
            <li>The highest rated review</li>
            <li>The lowest rated review</li>
            <li>Latest review showing with rate and comment</li>
          </ol>
        </li>
      </ol>
      <h4> Edge cases</h4>
      <ol align="left">
        <li> Additional sort options </li>
        <li> Additional fuzzy search by name with `fuze.js` </li>
        <li> On no reviews yet, call to action applied to add new review button </li>
        <li> On New reviews, live updates to new average rating for restaurant </li>
        <li> Additional tab to view the current user's reviews </li>
      </ol>
    </td>
  </tr>
  <tr>
    <td align="center" id="Dashboard">
      <img src="screenshots/Admin_Reviews_Page.png" alt="Admins page" width="400px">
    </td>
    <td align="center">
    <h3>
      <a href="https://git.toptal.com/screening/Kenneth-Lai/-/blob/master/src/screens/Dashboard/Dashboard.js">Dashboard Page (Admin view)</a>
    </h3>
    <h4> Requires </h4>
      <ol align="left">
        <li> Admin: Can add/edit/delete:
          <ol>
            <li>Restaurants</li>
            <li>Users</li>
            <li>Reviews</li>
          </ol>
        </li>
      </ol>
      <h4> Edge cases</h4>
      <ol align="left">
        <li> Search locally for restaurants through Google Places API </li>
      </ol>
    </td>
  </tr>
  <tr>
  <td align="center">
  <h3>
    Forms
  </h3>
  </td>
  </tr>
  <tr>
    <td align="center" id="Review">
      <img src="screenshots/Add_Review.png" alt="Add review" width="400px">
    </td>
    <td align="center">
    <h3>
      <a href="https://git.toptal.com/screening/Kenneth-Lai/-/blob/master/src/screens/List/Tabs/UserDrawer.js">Add Review (User)</a>
    </h3>
    <h4> Requires </h4>
      <ol align="left">
        <li> Reviews should have:
          <ol>
            <li>A 5 star based rate</li>
            <li>Date of the visit</li>
            <li>Comment</li>
          </ol>
        </li>
      </ol>
      <h4> Edge cases</h4>
      <ol align="left">
        <li> Handles updating restaurant's new average rating </li>
      </ol>
    </td>
  </tr>
  <tr>
    <td align="center" id="CRUD">
      <img src="screenshots/Edit_Restaurant.png" alt="Edit restaurant" width="400px">
      <img src="screenshots/Edit_Review.png" alt="Edit review" width="400px">
      <img src="screenshots/Add_Restaurant.png" alt="Add Restaurant" width="400px">
    </td>
    <td align="center">
    <h3>
      <a href="https://git.toptal.com/screening/Kenneth-Lai/-/blob/master/src/screens/List/Tabs/UserDrawer.js">CRUD Forms (Admin)</a>
    </h3>
    <h4> Requires </h4>
      <ol align="left">
        <li> Reviews should have:
          <ol>
            <li>A 5 star based rate</li>
            <li>Date of the visit</li>
            <li>Comment</li>
          </ol>
        </li>
      </ol>
      <h4> Edge cases</h4>
      <ol align="left">
        <li> Handles updating restaurant's new average rating </li>
      </ol>
    </td>
  </tr>
</table>


<div id="structure">
  <h2>Project Structure</h2>
  <p  align="right">
    (<a href="#top">back to top</a>)
  </p>
</div>
<div align="left">

```
    ├── ...
    ├── _templates              # hygen generators (for `components` or `screens`)
    ├── src
    │   ├── api/Firestore       # Firestore class factories for `users`,`places` and `reviews`
    │   ├── components          # Shared front-end components using @Chakra/react
    │   ├── contexts            # Shared contexts for `Auth`,`Resize`,`Firestore`,`Places API`
    │   └── screens             # Screens for routes `/login`,`/dashboard`-admin,`/list`-user
    └── ...
```
</div>
<br />
<div id="getting-started">
  <h2>Getting started</h2>
  <p  align="right">
    (<a href="#top">back to top</a>)
  </p>
</div>

#### Step 1:
Install NPM packages
### `npm install` or `yarn`
#### Step 2:
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `npm start` or `yarn start`
