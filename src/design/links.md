# Links

The next important component after Mobility is the connectivity.
To simulate the communication between agents, each agent must know who is in their vicinity.
This is an **O(N<sup>2</sup>)** operation because every agent should know about every other agent's position and determine if it is in the vicinity.
Because of the motion of the agents, this calculation is essential at each time step.
A significant time of the simulation is spent in this operation when the scale of the simulation is extremely large.

Disolv addresses the issue by allowing an input of neighbour information.
Similar to vehicular positions, the data for each agent and its neighbours can be fed as an input to the simulation.
For the convenience of the users, Disolv comes with an [executable](../execs/links.md) that enables preparation of this file.
This is a one-time step performed for each simulation and is required whenever there is a change in the positions file.

Links are calculated between two classes of agents.
The first class of the agent is the source with respect to which the second class agents are assigned as neighbours.
There are several types of links that can be calculated:

### Static
If the source and target agent classes are static (RSUs, Edge Servers), then the links need not be calculated for every time step.
In such cases, only the links at time step 0 are calculated.

### Dynamic
This will calculate links between source and target for all the time step.
This is required when one of the agent classes are moving (vehicles, drones).

### Unicast
If a source agent can talk to only one agent of the target class at each time step, then such links must be calculated using Unicast method.
Depending on the choice, user can assign the nearest target agent. 

### Circular
This gives all the target agents around a given source agent at each time step.
This is similar to a broadcast.

### Extensions
Further models can also be easily added for calculating the links.

## Real-world Traces
Any real-world traces can also be provided.
For instance, an ns-3 scenario can be used to generate the links data.
Whenever, there was a packet failure, we can assign no link in this case.
What this enables is a realistic communication and vehicular scenario, on top of which other planning applications can be evaluated.
In other words, disolv can be used a simulation replay tool.

