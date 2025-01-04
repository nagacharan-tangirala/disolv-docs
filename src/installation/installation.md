# Installation

Disolv is tested in Ubuntu and Macbook Pro. It should technically work with Windows but that is not tested.

## Prerequisites

If you are on a new installation of Ubuntu, install the necessary build tools using the command:
```
sudo apt-get install build-essential
```

For Mac, you need homebrew and Xcode. Get the XCode from the App store. Install Homebrew with the command:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Check the latest command from the [official Homebrew site](https://brew.sh/) if the above command fails.

The rest of the steps are common for any system.
## Rust toolchain

Rust toolchain is essential for the simulator to work. At the time of writing this, you can use the following command to install the necessary toolchain: 

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Check the [official link](https://www.rust-lang.org/tools/install) if the above command fails.

## Disolv

1. Download the latest **main** branch using the command:
```
git clone https://github.com/nagacharan-tangirala/disolv.git
```

2. Navigate to the folder and build all possible executables of the simulator using the command:
```
cargo build --release
```

3. To build a specific package/executable, use the command:
```
cargo build --package <package_name> --release
```

## Executables

Disolv is a single repo with multiple executables. Depending on the application, you can select the packages for compilation. More about the executables is described in the [Executables section](../execs/execs.md).
