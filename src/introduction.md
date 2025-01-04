<p align="center">
    <img style="max-width: 80%; max-height: 60%;" src="./resources/images/intro/disolv_logo.svg"
</p>

## Disolv

Disolv stands for Dataflow-centric Integrated Simulator Of Large-scale VANETs.
Disolv is a VANET simulator implemented in Rust to enable large scale simulation studies of connected traffic applications.
This documentation contains the description and the design of the simulator.

```admonish info title="Source Code"
Simulator is available as open-source on [GitHub](https://github.com/nagacharan-tangirala/disolv)
```

### Research

Disolv is developed as a tool necessary for my dissertation research.
Disolv is used in generating the results in the following publications:

```
@inproceedings{tangirala2024simulation,
    author = {Tangirala, Nagacharan Teja and Sommer, Christoph and Knoll, Alois},
    title = {{Simulating Data Flows of Very Large Scale Intelligent Transportation Systems}},
    booktitle = {2024 ACM SIGSIM International Conference on Principles of Advanced Discrete Simulation (SIGSIM-PADS 2024)},
    address = {Atlanta, GA},
    month = Jun,
    publisher = {ACM},
    year = {2024},
}

@inproceedings{tangirala2025optimizing,
    author = {Tangirala, Nagacharan Teja and Rishert, Rouven and Sommer, Christoph and Knoll, Alois},
    title = {{Optimizing Very Large Scale ITS Applications With Fast Fitness Evaluation}},
    booktitle = {IEEE Wireless Communications and Networking Conference 2025}
    address = {Milan, Italy}
    month = March,
    publisher = {IEEE},
    year = {2025},
}
```

Article links and other details about my work are available in my website.

```admonish info title="About me"
You can learn more about me at [my website.](https://nagacharan.phd)
```


### Capabilities

Disolv is primarily a [VANET](./basics/vanet.md) simulator.
It has a simplified implementation of the network protocol so that the user can focus on applications.
To demonstrate these strengths, I have developed scenarios that can be found at [disolv-scenarios](https://github.com/nagacharan-tangirala/disolv-scenarios).
The documentation will help to understand how to install, compile and use Disolv for different scenarios.


