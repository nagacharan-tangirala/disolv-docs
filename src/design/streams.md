# Streaming

As we saw in the [mobility](./mobility.md) and [links](./links.md) sections, disolv needs several input files for a simulation.
Because of the large-scale support goals, the size of the individual files can be significantly large.
Mobility trace files for a city like Cologne take 20GB.
If we add three to five different link files (vehicle-vehicle, vehicle-rsu, rsu-vehicle), then the input size is enormous.
On the output side, such large scenarios also generate significant data.
This can prove to be detrimental both for the performance as well as the memory.

Disolv is designed to overcome this issue through data streaming abilities.
Both the input and output files can be streamed at regular intervals of configurable time steps.
Input and output are handled in the form of chunks.
This solves the memory issues as the amount of data to be kept in the memory is only one chunk of the entire simulation duration.
This is similar to digital twins.

Parquet files are used for their robust and performant behavior.
Disolv can be extended to support any file format as requried by the user.

