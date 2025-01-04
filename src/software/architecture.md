# Architecture

Disolv is designed as an ensemble of [simulators](../simulators/simulators.md) with [preparators](../preparators/preparators.md) 
and [library](../library/library.md) playing a supportive role.
There are two main components in the implementation - 

## Simulators 

These are the crates that result in a binary upon compilation.
Each simulator is catered to a specific type of scenario.
Depending on the application, the user can choose appropriate simulator to compile.
Among all the simulators, there is a lot of redundant logic that is crucial for the correct operation of simulator.
Such core logic is extracted into its own library crate.

## Library

This is the backbone of the simulator containing all the primitive definitions and the trait declarations.
The implementation details of the library are further segregated into multiple crates according to the function.
Library is designed to be as abstract as possible to support multiple simulation executable files to be built on top of them.

## Preparators

These are used to prepare appropriate input files for the simulators.
They take input of various kinds and convert them into simulator-readable formats.
Earlier, these were implemented in Python.
However, due to performance reasons, they are now implemented using Rust.

