import time
import random

allTasks = [
  {
    'description': 'do the dishes',
    'eta': 1000,
  },{
    'description': 'sweep the house',
    'eta': 3000,
  },{
    'description': 'do the laundry',
    'eta': 10000,
  },{
    'description': 'take out the recycling',
    'eta': 4000,
  },{
    'description': 'make a sammich',
    'eta': 7000,
  },{
    'description': 'mow the lawn',
    'eta': 20000,
  },{
    'description': 'rake the leaves',
    'eta': 18000,
  },{
    'description': 'give the dog a bath',
    'eta': 14500,
  },{
    'description': 'bake some cookies',
    'eta': 8000,
  },{
    'description': 'wash the car',
    'eta': 20000,
  },
]

allRobotypes = {
  1: 'UNIPEDAL',
  2: 'BIPEDAL',
  3: 'QUADRUPEDAL',
  4: 'ARACHNID',
  5: 'RADIAL',
  6: 'AERONAUTICAL'
}

class Robot:
  def __init__(self, name, robotype):
    self.name = name
    self.type = allRobotypes[robotype]
    self.tasks = []

    # randomly assign robot 5 tasks
    taskNums = random.sample(range(0, len(allTasks)-1), 5)
    for i in range(len(taskNums)):
      self.tasks.append(allTasks[taskNums[i]])
      self.tasks[i]['status'] = 0 # 0 = incomplete, 1 = completed

  # accepts a task number, waits the corresponding amount of time, and then sets status to complete
  def complete_task(self, taskNum):
    task = self.tasks[taskNum]
    time.sleep(task['eta']/1000)
    self.tasks[taskNum]['status'] = 1

  # prints task description and eta in a tasklist
  def printTasks(self, tasklist):
    print('---------------------------')
    for i in range(len(tasklist)):
      print('Task ' + str(i+1) + ': ' + tasklist[i]['description'])
      print('ETA: ' + str(tasklist[i]['eta']) + '\n')
    print('---------------------------')
