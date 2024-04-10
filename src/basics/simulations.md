# Simulation

In general terms, simulation is a representation of a real-world phenomenon.
Any process that is observed in the world can be represented in a simulation provided its behavior can be captured in the form of a mathematical model.
The evolution of the model over time is observed using simulations.

## Time

Models that are defined with changes occuring in continuous time are simulated in the continuous time paradigm. 
Typically, the models are represented using differential equations.
Inherently, the simulation of continuous time models can be expensive in terms of computational cost.
While time can be theoretically defined as a continuous quantity, the empirical measurements are often measured at a specific time instants.
Based on this idea, time can be modeled as a discrete quantity in the simulations.
An added benefit is that the simulations are better in terms of scalability.

Two paradigms are possible with discrete time representation -

#### Discrete-Time Simulation (DTS)

The models that undergo changes at discrete time instants are called discrete-time simulation models.
After every pre-defined time interval, the behavior of the models are updated.


#### Discrete Events Simulation (DES)

The models are updated whenever a certain _event_ happens at any discrete-time instant.
While this is similar to discrete-time simulation, _event_ oriented models can be used to represent inter-dependent behavior of multiple models.
An added benefit is that the simulation can skip model updates of time instants with no events.


## Agent-based Model (ABM) Simulation

Real-world systems are often a combination of several individual components with their own properties.
In ABM simulation, each component and its behavior is modeled as an individual component.
Each agent is allowed to behave based on its parameters and can optionally interact with other agents.
Although the interaction is optional, typically ABM representation is incorporated where agent interactions are essential modeling requirements.
In simple scenarios, the interactions between various components can be easily determined and represented with simple simulation models.
However, in most of the real-world processes, the interplay between the components are extremely complex and are hard to determine with simple mathematical equations.
In such cases, ABM can be a powerful tool that allows the observation of emergence of the behavior over a period.
Time can be represented in either continuous or discrete fashion, although, discrete time is commonly selected for its performance benefits.

Several general purpose ABM simulators exist - 

- [mesa](https://mesa.readthedocs.io/en/stable/)
- [krABMaga](https://krabmaga.github.io/)
- [MASON](https://cs.gmu.edu/~eclab/projects/mason/)
- [Agents.jl](https://juliadynamics.github.io/Agents.jl/stable/)

Custom behavior models can be implemented using the frameworks.
Some of the processes that can be candidates for simulation are vehicular traffic, mobile network communications, crowd movement simulations, infection propagation simulation etc.
