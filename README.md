(progress overview at the bottom)

# BOT-O-MAT
Use any language to complete this challenge. The implementation is up to you: it can be a command-line application or have a graphical interface.

Your application should collect a name and robot type from the types we list below. For each, it should create a Robot of the type the user chooses, e.g. Larry, Bipedal. 

Given the list of tasks below, your application should then assign the Robot a set of five tasks, all of which complete after a duration that we show in milliseconds. 



- Collect a name and robot type from user.
- Instantiate a Robot of the type provided by the user with the name provided by the user
  - for example: Bipedal, Larry
- Set up methods on Robot to complete tasks from the provided list

## Robot
Robot completes tasks and removes them from the list when they are done (i.e. enough time has passed since starting the task).

## Tasks
Tasks have a description and an estimated time to complete.

```
[
  {
    description: 'do the dishes',
    eta: 1000,
  },{
    description: 'sweep the house',
    eta: 3000,
  },{
    description: 'do the laundry',
    eta: 10000,
  },{
    description: 'take out the recycling',
    eta: 4000,
  },{
    description: 'make a sammich',
    eta: 7000,
  },{
    description: 'mow the lawn',
    eta: 20000,
  },{
    description: 'rake the leaves',
    eta: 18000,
  },{
    description: 'give the dog a bath',
    eta: 14500,
  },{
    description: 'bake some cookies',
    eta: 8000,
  },{
    description: 'wash the car',
    eta: 20000,
  },
]
```

## Types
```
{ 
  UNIPEDAL: 'Unipedal',
  BIPEDAL: 'Bipedal',
  QUADRUPEDAL: 'Quadrupedal',
  ARACHNID: 'Arachnid',
  RADIAL: 'Radial',
  AERONAUTICAL: 'Aeronautical'
}
```

## Features to add once the core functionality is complete
Be creative and have fun! Use this list or create your own features.
- Allow users to create multiple robots at one time
- Create a leaderboard for tasks completed by each Robot
- Create tasks specific for each robot type, this could work in conjunction with the leaderboard. For e.g. robots that are assigned tasks that their type can’t perform won’t get “credit” for finishing the task.
- Add persistance for tasks, bots and leaderboard stats

## Privacy Guidelines
Due to the creative nature of this project, please do not post the prompt or your solution publicly. Feel free to privately fork it to your personal GitHub or download it for future reference, as this workspace is cleared every few months.

## Authors
- Scott Hoffman <https://github.com/scottshane>
- Olivia Osby <https://github.com/oosby>

## Update 1:
first I completed the program by using a simple Python command line interface. I asked the user for the robot input, and then prompted them for which task they would like the robot to complete until the robot completed all tasks. to demo, git clone the first commit and enter `python3 robot.py` into the terminal.

### Example output
![image](https://user-images.githubusercontent.com/55301871/222633244-69a6c76f-895f-4e17-9e9c-8a7ac3ed3beb.png)
![image](https://user-images.githubusercontent.com/55301871/222633314-e048ad4e-9ac9-4e77-a8fe-7e3b06ebb62e.png)

## Update 2:
I added a front-end webpage for users to interact with. To do this, I used React, and then Flask to connect my existing Python code.
To run, download this repo, run `npn install` then `npm start`. To run the backend, `cd backend` and then run `python3 app.py`

### Example output


https://user-images.githubusercontent.com/55301871/222710980-f6e9864e-4c76-410f-a579-4c952413ef28.mov


