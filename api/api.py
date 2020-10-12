import os
import time
from flask import Flask, jsonify, request, abort, render_template, redirect, url_for, json
from datetime import datetime 
# Google Sheets API Setup
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = Flask(__name__, static_folder='../build', static_url_path='/')


credential = ServiceAccountCredentials.from_json_keyfile_name("credentials.json",
                                                              ["https://spreadsheets.google.com/feeds",                                                               "https://www.googleapis.com/auth/spreadsheets",                                                        "https://www.googleapis.com/auth/drive.file",                                                        "https://www.googleapis.com/auth/drive"])
client = gspread.authorize(credential)
gsheet = client.open("Student Data").sheet1

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/login_user', methods=['POST'])
def login():
    #username = request.form.get('username')
    username = request.json
    print((username))
    if username:
        data = get_spreadsheet_data(username)
        print(data)
        return data
    return {"error": "No username entered."}

@app.route('/api/spreadsheet-data', methods=["GET"])
def get_spreadsheet_data(username):
    username_list = gsheet.col_values(8)
    usernames = username_list[1:]
    length = len(gsheet.get_all_values())
    for idx in range(0, len(usernames)):
        if usernames[idx]==username:
            i = idx+2
            return {"badge": gsheet.acell('G'+str(i)).value, "completed_pathway": gsheet.acell('F'+str(i)).value, "date": gsheet.acell('A'+str(i)).value, "email": gsheet.acell('D'+str(i)).value, "first_name": gsheet.acell('B'+str(i)).value, "last_name": gsheet.acell('C'+str(i)).value, "grade": gsheet.acell('E'+str(i)).value}
    return {"error": "No information with this account."}