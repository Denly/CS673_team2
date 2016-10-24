## Table of Contents
**[Road Map and Mile Stone](#road-map-and-mile-stone)**  
**[Design Guide](#design-guide)**  
**[Work Break Down Structure-basic tasks](#work-break-down-structure-basic-tasks)**  
**[Application File Structure](#application-file-structure)**  
**[SPPP](#sppp)**  

## Road Map and Mile Stone
1. Iteration 1
  0. Finish Landing Page, Profile Page, and Discover page.  
  1. User Sign_in by FB.  
  2. and he can see/edit his own profile.  
  3. His profile show in Discover page.  
2. Iteration 2  
  0. Finish Message
  1. User click message link in header, it pop out message list
  2. click one message room, jump to the room and chat with people
  3. get notifications if someone send new message

3. Iteration 3
  0. Finish Searching by location, matching people, and extra features.

## Design Guide
  **[Material Design Document](http://materializecss.com/)**  
  **[Material Design Guide](https://material.google.com/)**   
  **[Prototype in mobile browser](http://adobe.ly/2cFoq2a)**   


## Work Break Down Structure-basic tasks
```sh
Base & Header/
  Client/
    Links                 # To own Profile, Discover Page and pop out Message room list.
                          # In smaller screen, a side-bar can pop out,
    Routing               # Define react-router

Landing Page/
  Client/
    Sign_in -button       # Call New_User_Profile
    layouts -img,text     # introduction, pure static text and img
    Tests                 #
  Server/
    User_Collection       # Define User database
    New_User -api_method  # Create new user and profile by FB info, Call GetFacebook_info
    GetFacebook_info -private_method  # return FB information and user photo
    Tests                 #

Profile Page/
  Client/
    Links                 # to a message room
    render_profile data   # Call Publish_A_User and Render Profile Data on layouts
    layouts               # try to do re-useable components
    Tests                 #
  Server/
    Publish_A_User        # Send a user to Profile
    Tests                 #

Discover Page/
  Client/
    Links                 # to Profile, to Message
    render_profiles data  # Call Publish_A_User and Render Profile Data on layouts
    Tests                 #
  Server/
    Publish_User_List     # Send a list to user to Discover
    Tests                 #

Message Page/
  Client/
    Links                 # To Profile, to a Message_Room
                          # show notification if has new message
    Message_Room_List_Layout  # A side-bar can pop out a list of msg room
                              # label msg room has new message
    Render_Message_Room_List  # Call Publish_Message_Room and Render it
    Message_Room_layout   # The page chatting to other user
    Render_Message_Room   # Call Publish_Message_Room
    Input Box             # To input new message in Message_Collection
                          # if chatting first time, Message_Room_Collection too
    Tests                 #
  Server/
    Message_Collection    # declare messages of each Message Room
    Message_Room_Collection # declare message rooms
    Publish_Message       #
    Publish_Message_Room  #
    Tests                 #

```

## Application File Structure
```sh
imports/
  startup/
    client/
      index.js                 # import client startup through a single index entry point
      routes.js                # set up all routes in the app
      useraccounts-configuration.js # configure login templates
    server/
      fixtures.js              # fill the DB with example data on startup
      index.js                 # import server startup through a single index entry point

  api/
    <feature>/                 # a unit of domain logic,
                               # that're Discover, message, profile, landing_page
      server/
        publications.js        # all list-related publications
        publications.tests.js  # tests for the list publications
      <feature>.js                 # definition of the Lists collection
      <feature>.tests.js           # tests for the behavior of that collection
      methods.js               # methods related to lists
      methods.tests.js         # tests for those methods

  ui/
    components/                # all reusable components in the application
                               # can be split by domain if there are many
    layouts/                   # wrapper components for behaviour and visuals
    pages/                     # entry points for rendering used by the router

client/
  main.js                      # client entry point, imports all client code

server/
  main.js                      # server entry point, imports all server code

```
ref. https://guide.meteor.com/structure.html


#sppp
https://docs.google.com/document/d/1Pn6UN9nLJ4sN6E9OLnwXgXzBspwcz5t4loeIvXXFb6Q/edit?usp=sharing