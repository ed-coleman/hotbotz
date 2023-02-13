# Hotbotz

## Get started

```
npm i
npm run seed

``` 

## Description

Hotsauce database with reviews
 
## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **sauces list** - As a user I want to see all the hot sauces available
- **sauces add** - As a user I want to add a hotsauce so myself and others can review it
- **sauces detail** - As a user I want to see the hotsauce details
- **reviews add** - As a user I want to be able to add a review to a hotsauce in the database

## Backlog

List of other features outside of the MVPs scope

Filters:
-sort hot sauces by several options including review scores



## ROUTES:

- GET / 
  - renders the homepage
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - username
    - password
- GET /auth/login
  - redirects to / if user logged in
  - renders the login form
- POST /auth/login
  - redirects to / if user logged in
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)

- GET /sauces/home
  - renders randomly selected hot sauces, add sauce button and recently added hot sauces
- GET /sauces/add
  - renders form for user to add/search by hotsauce name
- POST /sauces/add 
  - redirects to / if user is anonymous
  - body: 
    - name
- GET /sauces/add-detail
  - renders larger form for user to add more details of their hotsauce they want to add to the database
- POST /sauces/add-detail
  - redirects to / if user is anonymous
  - body: 
    - name
	- manufacturer
	-image
	-ingredients
	-peppers
	-description-scoville
	-country
	-link
	
- GET /sauces/:id
  - renders the specific hotsauce detail page
  - includes details, reviews and other hot sauces



More info on reviews coming soon

## Models

User model
 
```
username: String
password: String
```

Sauces model

```
    name::String 
    image:String
	ingredients: String
    peppers: String
    description: String
    scoville: Number
    originCountry:String (enum)
    manufacturer:String
    link: String
    addedBy: [ObjectId<User>]

``` 

Reviews model

```
COMING SOON

``` 

## Links

### Trello

[Link to our trello board](https://trello.com/b/xujDbGE6/hot-kanban)

### Git

[Repository Link](https://github.com/sorfbourt/sauce-code)

[Deploy Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com)

### Jamboard

[Jamboard Link](https://jamboard.google.com/d/1ggvDK6B08BrLkbLSlpbDpr_J_ZDV6GAcBokeK6s58OE/viewer?ts=63e4d7aa&actionButton=1&f=0)

### Project Brief

[IronHack Project Brief Link](https://docs.google.com/presentation/d/1wVshcIEj0g_DzH5tzNfThzMd3-EFDnwA/edit#slide=id.p1)
