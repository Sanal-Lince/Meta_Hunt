from flask import Flask, render_template, request, redirect, url_for
import os, json
from werkzeug.utils import secure_filename

app = Flask(__name__)
UPLOAD_FOLDER = 'snapshots'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['snapshot']
    if file:
        filename = secure_filename(file.filename)
        path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(path)
        with open(path) as f:
            data = json.load(f)
        return render_template('report.html', data=data)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)