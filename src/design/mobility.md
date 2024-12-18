# Mobility

One of the components of a VANET simulator is the mobility component.
Mobility modeling is a complex task in itself and has a dedicated community behind it.
Some of the mobility simulators are [CityMoS](https://citymos.net/), [PTV VISSIM](https://www.ptvgroup.com/en/products/ptv-vissim),
[SUMO](https://sumo.dlr.de/docs/index.html), [MATSim](https://www.matsim.org/) etc.
This is unlike the wireless mobile network simulations, where the node mobility can be easily modeled with a random mobility model.
Hence, the modeling complexity is high and comes with a performance cost.

On a broad level, ITS applications can be classified into two types.
The first type is where explicit control of the vehicles is essential.
An example would be [truck platooning](https://ieeexplore.ieee.org/abstract/document/8280871) studies.
The second type is where no control of the vehicles is required in the study.
For example, network planning studies about the infrastructure placement.
Disolv is designed to cater to the applications where explicit control of the vehicles is NOT essential.
Hence, the mobility modeling is greatly simplified.
Only vehicular traces are sufficient to represent the vehicular mobility.
This removes a significant performance overhead from the simulations, thereby allowing the user to spend the computing on their application.
If the application is simple enough, then it allows room for extensive scalability.

The approach restricts the usability of Disolv for the applications that control the vehicles.
Fortunately, we cover planning studies category which is one of the majorly studied categories by the community.
The introduction of 5G and 6G will further explode the possible studies under the category.
AI is expected to be a major player in both network management as well as on the application side.
The introduction of smart city paradigm and the continued embracing of its ideas put more onus on mobility to interact with other smart city systems.
This increases the possibilities even more and leads to several new auxiliary use cases that do not require vehicular control.
Based on this intuition, we imagine Disolv to remain usable for plenty of use cases.

The process of converting a mobility trace to Disolv-readable format is supported by our pre-processing pipeline.
Any mobility simulator output can be converted to Disolv-readable format. 
As of now, SUMO is supported.
This has an advantage of feeding a real-world mobility data as an input to the simulator.

<p align="center">
  <img style="max-width: 75%; height: auto;" src="../resources/images/design/mobility-pre.png">
</p>
