# Software Decisions

### Rust

The goal of scalability necessitates the selection of programming language capable of supporting high-performance application.
Naturally, the choices are C++ and Rust.
C++ is a tried and tested tool in the simulation development domain (SUMO and ns-3 are C++ based).
However, the memory management issues can hinder a new user from exploiting the full capabilites of the simulator.
The borrow-checker of Rust prevents many memory-safety issues that a user will inevitably commit in C++.
We implemented Disolv in Rust to enable contributions through extensions with minimal barriers.
An added benefit is that Rust inherently supports AI applications through an evolving ecosystem. 
This facilitates high performance evaluations of AI oriented studies.
Further, support for interoperability with Python plugs any gaps in the AI ecosystem of Rust.

### Links

There is no detailed protocol stack implementation.
However, it is necessary for the agents to know their surrounding agents.
This operation can be expensive and does not scale well for city scale scenarios.
An agent is said to have a link with a neighbour if it can interact with the neighbour in that particular instant.
This does not concern with any _link_ in the context of networking.
In other words, the link data is a mere information of neighbors available to each agent, not the channel characteristics.
Our initial implementation of the link calculation module was in Python. 
Considering the enormous time consumed by this process, we ported the implementation to Rust, which resulted in substantial performance gains.
The table highlights the performance gains obtained by porting the link calculation module to Rust.

| Nodes | Simulation Duration | Python | Rust |
| :--- | :----: | :----: |    ---: |
| 2200 | 3800s | 2400s | 120s |


### Traces

Vehicular traces can be obtained from any mobility simulator or real-world sources.
A pre-processing module is provided to convert the mobility traces to Disolv-readable format.
This can be extended to support a new trace source.
Since this is a one-time process, the implementation is carried out in Python.

