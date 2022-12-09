![Electron](https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=9FEAF9)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)

# LockIt - A secure password manager

![image](https://user-images.githubusercontent.com/46485459/206547908-a472b81c-585a-427f-a354-cf85007571e4.png)

## Summary

- ### [LockIt](#LockIt)
- ### [Installation](#installation)
- ### [Development](#development)

## LockIt

- ### LockIt is a password generator inspired by dashlane.

- It integrates a secure generator with a random generation and has a verification of the strength of your password.
- It is made in HTML/CSS/JS and is embed a window in electron, the interface is simple, efficient and modern.
- It's light, practical and compatible with almost all operating systems.

## Installation

### To install LockIt you need to download the release file here and start the installation:

* #### Linux :
    * ##### Pacman :
        ```
        sudo pacman -U lockit-1.0.0-1-x86_64.pkg.tar.zst
        ```
    * ##### Snapd :
        ```
        sudo snap install lockit_1.0.0_amd64.snap --dangerous
        ```
    * ##### AppImage : 
        ```
        chmod +x lockit-1.0.0-x86_64.AppImage && ./lockit-1.0.0-x86_64.AppImage
        ```
* #### Windows : 
    ```
    Click on the installer file and follow the instructions
    ```

## Development

#### Bug reports and pull requests welcome!

```
git clone https://github.com/dropbox/zxcvbn.git
```

- LockIt is built with Typescript, and Electron. All the source files is in src and web, they will be compiled and bundled in the dist folder.

```shell
npm run build    # build typescript to dist
npm run start    # start app for development
npm run dist    # compile and bundle the app to installer
```
