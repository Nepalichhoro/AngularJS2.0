Angular2.0-EPL 
##############
This application is written via typescript which is a superset of javascript.
- It uses decorators ( also called annotations) which add metadata about the components/classes.
************** 

Four big players in AngularJS:
a) Components
b) Directives
c) Routers
d) Services
************** 

Components:
- It is just a javascript object { } that encapsulates templates, data, and the behavior of a view.
- For those people who are coming from object oriented programming background ( i.e. Java), a component is simply a class with some attributes/properties and methods.
- It is completely decoupled of Document Object Model (DOM).

Services:
- It is just a javascript object { } that is assigned with responsibilities such as data access ( http calls, talking to backend), logging, and business logic independent of view.

Directives:
- It is a class that allows us to extend  or control Document Object Model (DOM). In other words, it modifies DOM elements and/or extends their behaviors by adding new attributes.
- There are several built-in directives that allow us to add/remove DOM elements, add CSS classes/styles, and remove them. I highly recommend checking out their official documentation for a detailed list of directives
- Please keep in mind that directives don’t have template/html markup for the view.
- Directives = Components – Templates

Routers:
- They are responsible for navigation. As the user navigates from one page to another, it will figure out what component to display based on the changes in URL pattern.
************** 

This introduction shows us how to create a basic application using these three of of these four features. We will talk about routers later when we create a Single Page Application (SPA). By the end of this section, we would be able to achieve following things:
a) How to create a component.
	- Check out how root component (app) and child components ( clubs and players ) are created.  
b) How to set the properties on a component.
c) How to use interpolation.
	- {{ }}
d) How to create a service.
	- Check out services ( clubs and players ) are created and are injected into the components.
e) How to use dependency injection.
f) How to create a custom directive.
	- Check out how custom directive auto-grow is created to attach an extra behavior to the html input element.
************** 

Steps:
- Clone this repo on to your local computer.
- Go to the home folder.
- Go to your command line and enter: npm update
- Then npm installs all of the dependencies of this application.
- Enter: npm start to start the application.
************** 

Future:
- More styling will be done to make this application more prettier than this.
- Dynamic data will be fetched from the RESTful API.
- Dynamic and Interactive Single Page Application (SPA) will be created where fourth feature router will be discussed.
- Users should be able to congratulate Leicester City for winning the title.
- These comments will be persisted into the MongoDB database.
