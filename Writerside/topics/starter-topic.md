# The true home page

Basically all this is just a glorified switch, where the path is checked
and redirections happen. There are 4 predefined paths: ```/home```,```/login```,
```/register``` and ```/webapp```.  
If you enter anything else you will be redirected to ```/home```,
but this will change in the future.

### The boring part
All there is to this page is a literal portal to everything else.  
There might be a navbar in the future, but this is a job for the design team.
Be advised that everything you add here will be displayed in each page, which can be handy
for headers and footers, not so much for anything else.  
We use the ```react-router-dom``` module to make this happen, with the ```Router```,
```Switch``` and ```Route``` tags in this order. The ```Route``` tag is responsible for each route, meanwhile the former
are responsible for the set-up.  
You can add this module with ```npm i react-router-dom@5``` for the sake of simplicity.

### Author
Leonte Denis