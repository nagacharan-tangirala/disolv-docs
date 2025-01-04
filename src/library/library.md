# Library

Library contains the implementation that all the simulators can use.
Because of the abstract nature, most of the following crates are used by all the simulators.
Only the preparation crates do no use the entire available library crates.

### Core

Contains the core logic of the scheduler and the agent definitions according to the ABM.

### Models

Contains logic to control the model definitions in the rest of the simulator and provides some implementations of the core models that are common for all simulators.

### Input

Contains code to read the input data in the form of parquet files.

### Output

Contains code to output data from any of the simulators.

### Runner

Contains the code that is responsible to run the given ABM scheduler.
