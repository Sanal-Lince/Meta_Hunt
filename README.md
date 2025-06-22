# MetaHunt: Browser Metadata Leak Analyzer & Incident Response Toolkit

MetaHunt is a lightweight browser plugin + forensic toolkit that detects and analyzes metadata leakage from browser activity, helping users and forensic teams understand what sensitive information is silently shared through browser headers, JS APIs, and extensions.

## Key Features:

### Real-Time Metadata Monitoring:

  Tracks HTTP request headers, WebRTC leaks, Canvas fingerprints, and browser APIs.

  Alerts on exposure of internal IPs, device names, screen info, or geolocation data.

### Forensic Timeline Builder:

  Logs user interaction + metadata exchange over time for forensic investigation.

  Generates a timestamped JSON/CSV report that can be imported into ELK or Splunk.

### Extension Tamper Detection:

  Detects malicious or suspicious browser extensions based on known IOCs (Indicators of Compromise).

### Incident Snapshot Export:

  Captures and exports an “incident snapshot” — open tabs, extensions, cookies, and metadata — for analysis in forensic labs.

### Offline Analysis Mode (For Investigators):

  Load exported reports for analysis without internet access.

  Visualizes metadata leak paths and threat vectors via graphs.

## Target Use Case:

### Forensic investigators who need a browser-specific activity timeline.

Pentesters/Red Teams to demonstrate client-side metadata leaks.

Privacy-aware users or journalists in high-risk environments.


## Tech Stack:

Frontend: JavaScript, WebExtensions API (Chrome/Firefox)

Backend: Python + Flask (for offline analysis dashboard)

Storage: SQLite or JSON-based local storage

Visualization: D3.js or Chart.js

## Security Concepts Covered:

Metadata leakage

Web privacy

Client-side forensics

Malicious browser extensions

Incident response


## Project Architecture

        ┌────────────┐
        │  Browser   │
        │ Extension  │
        └────┬───────┘
             │
      ┌──────▼──────────┐
      │ Metadata Sniffer│
      └──────┬──────────┘
             │
      ┌──────▼────────┐
      │ Local Storage │◄────────┐
      └──────┬────────┘         │
             │                  │
      ┌──────▼──────────┐       │
      │ Snapshot Export │──────►│ Offline Analysis Toolkit
      └─────────────────┘       │   (Flask Web App)
                                │
                      ┌────────▼────────┐
                      │ Visual Report   │
                      │ & Leak Graphs   │
                      └─────────────────┘
##   Installation
###  Part 1: Install & Run the Flask Toolkit (Offline Forensic Analysis)

#### Requirements:

    Python 3.8+

    pip (Python package manager)
#### Step-by-Step Installation:
    git clone https://github.com/Sanal-Lince/Meta_Hunt.git
    cd Meta_Hunt
#### Create a virtual environment (optional but recommended):
    python3 -m venv venv
    source venv/bin/activate   # On Windows use: venv\\Scripts\\activate
#### Install dependencies:
    pip install -r requirements.txt
#### Run the Flask app:
    cd toolkit
    python app.py
#### Visit in Browser:
Open http://localhost:5000 to upload .json snapshots and view analysis.

###  Part 2: Load the Browser Extension (Chrome/Brave/Edge)

#### Tested on:

Chrome v100+
Brave
Firefox (with minor modification to manifest)

###  Load Extension in Chrome:

#### Open Chrome and go to:
    chrome://extensions/
#### Enable Developer Mode (top right)
#### Click “Load unpacked” and select the metahunt/extension/ folder

### To Test Extension:

Visit websites.

Open DevTools > Console to view leaked headers.

You can extend popup.html to manually export logs or trigger analysis.

### Output & Snapshot:

Browser extension collects metadata

You can export logs (as JSON manually or programmatically)

Upload snapshot JSON to Flask dashboard for forensic timeline & leak analysis.

## Conclusion
MetaHunt is designed to bridge the gap between browser-based privacy awareness and real-world forensic investigation. By combining a lightweight browser extension for metadata capture with an offline analysis toolkit, MetaHunt empowers security researchers, incident responders, and privacy advocates to:

  Uncover silent data leaks like WebRTC IPs, Canvas Fingerprinting, and Referrer exposures

  Perform forensic timeline analysis on collected metadata

  Assess privacy risks based on risk scoring and behavioral patterns

  Educate end users on how everyday browsing can unintentionally disclose sensitive information

Whether you're conducting VAPT assessments, validating client-side tracking behavior, or teaching cyber forensics, MetaHunt offers a powerful and transparent approach to browser metadata analysis.
