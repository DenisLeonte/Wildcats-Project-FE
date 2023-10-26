# Installation Steps

There are 2 ways you can run this app:
1. Running locally
2. Running with ```Docker```

### Running Locally
You can easily run this app if you have the necessary modules. Issue is not everyone has them
so before you run the app, execute ```npm install``` to make sure you have all the dependecies, then
run with ```npm start``` to start the development server.  

### Running with Docker
This is the more complicated step but its the better step in terms of stability and performance.  
If you pulled from the master branch then you already have a ```Dockerfile``` there. In
the command line execute ```docker image build -t wildcats-project:latest .``` to create a Docker image.  
Then to run the image you execute ```docker run -dp 8000:3000 --name wildcats-container wildcats-project:latest```.  
The ```-dp``` argument has 2 roles: it runs the docker detatched meaning you dont see anything in the terminal and
it forwards the port 3000 to the port 8000, meaning we will be able to access the app at ```localhost:8000```.  
The ```--name``` flag simply specifies the name of the container. Also if you have Docker Desktop installed all the running
containers and an image list will appear there.