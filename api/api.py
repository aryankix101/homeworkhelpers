import os
import time
from flask import Flask, jsonify, request, abort, render_template, redirect, url_for
# Google Sheets API Setup
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = Flask(__name__)

credential = ServiceAccountCredentials.from_json_keyfile_name("credentials.json",
                                                              ["https://spreadsheets.google.com/feeds",                                                               "https://www.googleapis.com/auth/spreadsheets",                                                        "https://www.googleapis.com/auth/drive.file",                                                        "https://www.googleapis.com/auth/drive"])
client = gspread.authorize(credential)
gsheet = client.open("Certificate Data").sheet1

@app.route('/spreadsheet-data', methods=["GET"])
def get_spreadsheet_data():
    #get_all_records needs to be replaced, it should instead get the information from the username in the login method. Get the data from its row.
    return jsonify(gsheet.get_all_records())


@app.route('/login', methods=['GET', 'POST'])
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
            error = 'Invalid Credentials. Please try again.'
        else:
            return redirect(url_for('home'))
    return render_template('login.html', error=error)