# Angular TODO 

Angular todo list, built upon redux

### Core concepts

* This was built using Angular 1.6, Redux and Webpack
* All code are located at `webapp/src`, and all tests are located at `webapp/spec`
* All components are located at `webapp/src/components`, and a component has to be simple, just a view layer
* All state changes, and all business rules are located at `webapp/src/state`
* Files are organized by domain, not by stereotype

## Get this running

### System requirements

  * docker `curl -sSL https://get.docker.com/ | sh`
  * docker-compose `sudo apt-get install docker-compose`

### Building all services

    $ docker-compose pull
    $ docker-compose build

### Installing dependencies

    $ docker-compose run --rm webapp yarn install

### Running the application

    $ docker-compose up webapp

Now the app is running on http://localhost:3000

### Running unit tests

    $ docker-compose run --rm webapp yarn test
