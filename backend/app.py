from flask import Flask, request
import robot
import json
from flask_cors import CORS, cross_origin

# currRobot = None

app = Flask(__name__)
# CORS(app) # comment out for deployment

@app.route('/')
def hello_world():
    return 'welcome to the bot-o-mat backend'
 
@app.route('/setup', methods=['POST'])
def setup():
    request_data = json.loads(request.data)
    global currRobot
    currRobot = robot.Robot(request_data['robotname'],request_data['type'])
    print(request_data)
    return 'success'

@app.route('/get_tasks', methods=['GET'])
def get_tasks():
    return currRobot.tasks

@app.route('/finish_task', methods=['POST'])
def finish_task():
    request_data = json.loads(request.data)
    currRobot.complete_task(request_data['tasknum'])
    return 'success'


if __name__ == '__main__':
    app.run(port=8000, debug=True)