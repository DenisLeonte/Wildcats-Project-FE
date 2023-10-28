# Login Page

The login page is meant to contain just the fields for a name, password and a submit button.

## Technical details

The ```Login``` class is composed 4 methods: ```constructor()```, ```render()```, ```handleInputChanges()``` ```handleSubmit()```.  

### constructor(props)
Calls the ```super(props)``` method to initialize the ```React Component``` class and to set up the states name and password.

### render()
First sets up the states name and password then sets the submit button availability. The former is set according to the 
existence of both the name and password in the input fields.  
It then renders the HTML components and form. 

### handleInputChange()
One of the more important methods, it constantly updates the state of the name and password.

### handleSubmit()
Arguably the most important method, it takes the input and executes the logic, API calls and further data elaboration.