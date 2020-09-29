import os
import time
from flask import Flask, jsonify, request, abort, render_template, redirect, url_for, json
from datetime import datetime 
from flask_cors import CORS
# Google Sheets API Setup
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = Flask(__name__)


credential = ServiceAccountCredentials.from_json_keyfile_name("credentials.json",
                                                              ["https://spreadsheets.google.com/feeds",                                                               "https://www.googleapis.com/auth/spreadsheets",                                                        "https://www.googleapis.com/auth/drive.file",                                                        "https://www.googleapis.com/auth/drive"])
client = gspread.authorize(credential)
gsheet = client.open("Student Data").sheet1

CORS(app)

@app.route('/login_user', methods=['POST'])
def login():
    #username = request.form.get('username')
    username = request.json
    print((username))
    if username:
        data = get_spreadsheet_data(username)
        print(data)
        return data
    return {"error": "No username entered."}

@app.route('/spreadsheet-data', methods=["GET"])
def get_spreadsheet_data(username):
    username_list = gsheet.col_values(8)
    usernames = username_list[1:]
    length = len(gsheet.get_all_values())
    for idx in range(0, len(usernames)):
        if usernames[idx]==username:
            i = idx+2
            return {"badge": gsheet.acell('G'+str(i)).value, "completed_pathway": gsheet.acell('F'+str(i)).value, "date": gsheet.acell('A'+str(i)).value, "email": gsheet.acell('D'+str(i)).value, "first_name": gsheet.acell('B'+str(i)).value, "last_name": gsheet.acell('C'+str(i)).value, "grade": gsheet.acell('E'+str(i)).value}
    return {"error": "No information with this account."}


@app.route('/')
def home():
    return "Success!"  # return a string

"""@app.route('/login', methods=['GET', 'POST'])
def login():
    username_list = gsheet.col_values(8)
    usernames = username_list[1:]
    error = None
    if request.method == 'POST':
        isFalse = True
        for username in usernames:
            if request.form['username']==username:
                isFalse = False 
        
        if isFalse or request.form['password'] != 'ilovehomeworkhelpers':
            return jsonify({"error":"Invalid credentials. Please try again."})
            
    return render_template('login.html', error=error)"""