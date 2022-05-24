from Google import Create_Service
import base64
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from retrieveData import getMessage
import os
from flask import Flask, redirect, url_for, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

#Global Vars
CLIENT_SECRET_FILE = 'C:\\Users\\brian\\Desktop\\fullstack\\backend\\client_secret.json'
API_NAME = 'gmail'
API_VERSION = 'v1'
SCOPES = ['https://mail.google.com/']

service = Create_Service(CLIENT_SECRET_FILE, API_NAME, API_VERSION, SCOPES)
#verizon vtext.com
#at&t txt.att.net
@app.route("/send_message/<number>", methods=["GET"])
def send_message(number, carrier="txt.att.net"):
    emailMsg = getMessage()
    #Create a MIME object
    mimeMessage = MIMEMultipart()

    #Sample Phone numbers
    #7607150467@txt.att.net
    #9167640884@tmomail.net

    mimeMessage['to'] = f"{number}@{carrier}"
    mimeMessage['from'] = 'Brian <bale4@uci.edu>'
    mimeMessage['subject'] = ''
    mimeMessage.attach(MIMEText(emailMsg, 'plain'))

    raw_string = base64.urlsafe_b64encode(mimeMessage.as_bytes()).decode()

    #Send Message
    message = service.users().messages().send(userId='my.fav.baby.mochi@gmail.com', body={'raw': raw_string}).execute()
    return redirect("http://localhost:3000")

@app.route('/submitted', methods=["POST"])
def submitted():
    phonenum = request.form.get('number') 
    return redirect(url_for('send_message', number = phonenum))

if __name__ == '__main__':

    # print(send_message('7607150467', 'txt.att.net'))
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))