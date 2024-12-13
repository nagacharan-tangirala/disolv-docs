# Messages

Any realistic VANET simulator represents the interactions through packets.
This is required to also model the failures due to the network resource constraints.
Since we are only modeling interactions, packet-level modelling is not necessary.
Instead, we model the interactions using a compact structure called Message.

Message is built mainly with the metadata regarding the information that is transmitted.
It contains the statistic such as size, counts, type regarding the data.
Although this leads to unrealistic network, application studies that are not focussed on these aspects can reasonably benefit from this simplification.
Any forwarded data from the downstream is also aggregated and forwarded to the upstream.

For instance, consider the scenario where vehicles are uploading images to the RSU.
RSUs are all connected to a central entity that is responsible to collect the images from the vehicles.
Disolv can model this scenario.
Vehicles can upload their data to the nearest RSU as they travel along the network.
RSUs collect all the data that the vehicles uploaded into a single message and forward that to the controller.
If we modelled this in the form of packets, we need too many packet instances to represent the interaction.
Instead, we represent all of that with one single message.

### Message structure
One message is exchanged between a source and target agent.
It contains the following information:

```
Message = {
    message_type: Enum,
    message_units: List,
    gathered_units: List,
    metadata: Struct,
    actions: List,
}
```

#### Message Type
Indicates the message type that is being sent.


#### Message Units
This is an individual unit of a message that needs to be transmitted.
Think of it as a unit of application data.
Hence, this is a list to support scenarios where multiple applications want to communicate (voice, data, video).

#### Gathered Units
These are all the application data that were forwarded by the agents in the upstream/downstream.

#### Metadata
This contains all the necessary statistics of the message, including size, counts, selected link etc.
The metadata is updated based on the message units that are supposted to be followed to the target.

#### Actions
Actions are integral to the interactions between the agents.
Each agent can receive either one or more messages from other agents.
What to do with each individual message unit is indicated by the action.
For instance, we can ask an agent to consume all **image** type messages but forward all **video** message types.
This is entirely configurable by the user.

