# Links

The next important component after Mobility is the connectivity.
To simulate the communication between agents, each agent must know who is in their vicinity.
This is an **O(N<sup>2</sup>)** operation because every agent should know about every other agent's position and determine if it is in the vicinity.
Because of the motion of the agents, this calculation is essential at each time step.
A significant time of the simulation is spent in this operation when the scale of the simulation is extremely large.

Disolv addresses the issue by allowing an input of neighbour information.
Similar to vehicular positions, the data for each agent and its neighbours can be fed as an input to the simulation.
For the convenience of the users, Disolv comes with an executable that enables preparation of this file.
This is a one-time step performed for each simulation and is required whenever there is a change in the positions file.

