# Netflix + GPT
- Header
- Routing of App
- login form
- signup form
- form validation
- useRef Hook
- Firebase setup
- implmented sign up user
- implemented sign in user
- created store and userslice
- when user sign up we updated the display name 
- after update dispachted action to add user in store
- after user sign out user gets deleted from store
- then after signin or sign up page is redirected to home i.e. movie page

# Features
- LogIn / SignUp
    - LogIn / SignUp page
    - redirect to browse page after sign in.

- Browse (After authentication)
    - Header
    - Main Movie
       - Trailer in background
       - Title and Description and a play button
       - Movie Suggestion
         - MovieLists * n

- GPT
    - Search Bar
    - Movie Suggestion

# Active Bug
- error for valid email password
- on closing the tab it is signing out but the store still has the user information
- sign out showing in sign in/sing up page

# Solved bug
- on multiple sign in / sign up the error msg is not showing
- when i enter email and password in sign in/ sign up then after changing to either the value of email and password remains there in input field 
- after sign out user still able to go "/browse"  