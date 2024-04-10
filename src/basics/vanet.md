# VANET


### VANET 
VANET stands for Vehicular Ad-hoc Network.
In simple words, VANET is a wireless network formed by _installing_ a wireless radio to vehicles.
Further, the traffic infrastructure can also be _installed_ with a wireless radio.
The interactions between the vehicles and the infrastructure happens through VANET.
A wide range of applications are enabled by connecting the vehicles to various components of the infrastructure.
Collectively, these applications are called Intelligent Transportation System (ITS) applications.
VANET opens up endless possibilities of ITS applications.
The introduction of new communication protocols (5G and beyond), vehicles (Autonomous vehicles), and infrastructure (drones) contribute towards explosive growth of possible ITS applications.
This necessitates a thorough evaluation of ITS applications.
Hence, study of the ITS applications is one of the popular research topics.


### VANET Simulations

Due to the futuristic nature of the applications, field trials can be expensive if all possible what-if scenarios must be covered.
Simulations are an inexpensive and time-saving approach to perform initial evaluations for ITS applications.
Hence, VANET studies are carried out using simulations.
The general-purpose simulators are not used because of the sheer complexity involved in the modeling of network and mobility models.
For example, in network simulations, the order of agent communication events plays a crucial role in accurately replicating the real-world behavior.
Hence, network simulators such as __ns-3__ employ a combination of ABM with DES, where each entity is represented as an agent and the behavior is triggered at specific time instants through events.

Several open-source simulators are available for VANET studies.
Depending on the application, a simple mobility simulator with custom extensions can also be used for VANET studies.
Similarly, a network simulator with a simple mobility representation can also be used.
Some examples are - 

- [VEINS](https://veins.car2x.org/)
- [Eclipse MOSAIC](https://eclipse.dev/mosaic/)
- [ns-3](https://www.nsnam.org/)
- [SUMO](https://www.nsnam.org/)

