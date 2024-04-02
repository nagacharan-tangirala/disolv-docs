# VANET


### VANET 
VANET stands for Vehicular Ad-hoc Network.
To define in a simple way, VANET is a wireless network formed by _installing_ a wireless radio to vehicles.
Several with such wireless radios together with the traffic infrastructure form a VANET.

### VANET Simulations
Vehicles can communicate with other vehicles through VANETs.
To assist vehicles, wireless radios are also installed on the traffic infrastructure such as traffic signals.
This opens up endless possibilities of traffic applications.
Collectively, these applications are called Intelligent Transportation System (ITS) applications.
The fast movement of the vehicles creates a challenging channel environment. 
This necessitates a thorough validation of ITS applications.
Simulations are an inexpensive and time-saving approach to perform initial evaluations for ITS applications.
Advaitars is a simulator built for this purpose. 

### VANET Entities

Below are some of the key participants in VANETs.
This is not an exhaustive list.

#### Vehicles
Vehicles are the primary _consumers_ of a majority of ITS applications.
They can also act as providers of valuable input data for some of the traffic management applications. 
They can communicate with neighbouring vehicles and the infrastructure within a certain range.

#### Base Stations
These are the enabling infrastructure for all the ITS components.
Sometimes, they can come with their own backlinks to the central server. 
The location of the Base Station is important, in particular, for the newer protocols such as 5G.
The services offered to the devices in the vicinity depends on the Base Station.

#### Road Side Units
Road Side Unit (RSU) is an ITS infrastructure component installed at strategies locations.
From the perspective of VANET, a vehicle and RSU has similar radio capabilities but serve different purposes.

#### Controller
This is a virtual component analogoous to the traffic management centre in the real world.
It is possible that a large city can have multiple hierarchies of control centres. 
It serves the vehicles with their requests and takes decisions on traffic management based on the collected data.

![Sample VANET Scenario](images/architectures/vanet_structure.png)

