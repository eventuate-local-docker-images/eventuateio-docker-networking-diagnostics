# Diagnose Docker container <=> host connectivity

Many of the [Eventuate demos](http://eventuate.io/exampleapps.html) require you to [set the `DOCKER_HOST_IP` environment variable](http://eventuate.io/docs/usingdocker.html) to the IP address of the Docker host.
You need to do this because some services - specifically, Apache Kafka - need to know their "public" IP address.
If you are using Docker Toolbox, this would be the IP address of the Virtual Box VM.
In other environments, such as Linux, it is the IP address (or resolvable hostname) of the machine.
See [this document](http://eventuate.io/docs/usingdocker.html) for more details.


The goal of this project is to diagnose a common Docker networking: whether a container can connect (e.g. an application service) to another container  (e.g. Apache Kafka) using the IP address specified by `DOCKER_HOST_IP`.

You build a container that runs a simple NodeJS application that verifies that it can connect to itself using `DOCKER_HOST_IP`.

To verify that `DOCKER_HOST_IP` is set correctly, simply run `docker-compose up`
The application will display success or error information.
