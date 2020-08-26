import os
from flask import Flask, jsonify, request, abort
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
    return jsonify(gsheet.get_all_records())