# MongoDB Fitness Tracker
![Github license](https://img.shields.io/badge/License-MIT-green.svg) ![VSCode](https://img.shields.io/badge/Made%20w-VSCode-0A0E77.svg)

## Description
This application allows users to add workouts and then add exercises to any particular workout. When a user creates a workout, a button with that workout's name is dynamically generated and appears on the bottom of the screen. The user can then click on the button to view a modal. From the modal, the user can add either a cardio or weights exercise. The modal will also display any exercises the user has already added to that workout. The navbar includes links to view the JSON formatted database entries for the workouts, exercises, and workouts populated with exercises. 

## Table Of Contents
- [Access and Installation](#Access-and-Installation)
- [Usage](#Usage)
- [Features](#Features)
- [License](#License)
- [Contribution Guidelines](#Contribution-Guidelines)
- [Test Instructions](#Test-Instructions)
- [Questions](#Questions)

## Access and Installation

No external software or servers are necessary to install this project except for a text editor and a working browser. You can git clone this repository to your local computer and open the code files using a text editor. Once the correct npm packages are installed, the program can be run from the command line as long as you are in the same directory as the code files. The repository includes the package.json file needed to install the correct npm pacakges/dependencies. 

This project can be accessed either via the GitHub Repository.

- [GitHub Repository](https://github.com/sophia2798/mongo_fitness_planner)

To open and edit code files, you will need a text editor. The one used to create this page was Visual Studio Code (https://code.visualstudio.com/).

To install this repository, you can git clone the repository using the green "Code" button. You can copy and paste either the HTML or SSH URL.

If you only wish to use the application without editing it or examining the code, you can just visit the "Deployed Page" link above.

## Usage
This project can be used to track your exercises and progress and also organize your workouts. Each exercise tracks distance and duration, if cardio, or weights, reps, and sets if weights. Logging this information can help a user track their improvements through time or help them pick up from where they left off. 

This project also utilizes MongoDB and mongoose. So, it can also be used as a template to learn more about MongoDB and how to implement it with mongoose and other npm packages.

## Features
This project includes...

- The ability for a user to add a workout

- A modal that allows the user to add an exercise and view old exercises when clicked

- Links to show JSON formatted collections from the MongoDB database for workouts, exercises, and workouts populated with exercises

- A animated CSS background

## License
MIT
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

## Contribution Guidelines
Currently, this repository is not set up for contributions. A development branch, to which all merges can be made while protecting the master branch, must be made first. Therefore, please contact the owner(s) of this repository to start and manage such a branch.

Please ensure that PRIOR to any new contributions, you discuss your desired/planned changes via email with the owner(s) of the repository. Contact information can be found in the [Questions](#Questions) section. Changes should be reflected in an updated README as well. To ensure a high quality of code and minimal conflicts, pull requests can only be merged after being approved by another developer. 

To ensure a welcoming working environment, any contributor to this project must help maintain a harassment-free and safe environment. This includes:
    - Using inclusive language
    - Being respectful of various backgrounds and opinions
    - Accepting constructive criticism without aggression or anger
    - Being aware of what benefits the whole community
    - Showing kindness and empathy to one another

## Test Instructions
As the package.json file exists in this repository, only the following line is needed to install the necessary pacakges

    npm install

To run the program, input the following code into the command line

    npm start

## Questions
If you have any questions, please feel free to reach out to the creators via the GitHub page.

- [Sophia Jung](https://github.com/sophia2798) 