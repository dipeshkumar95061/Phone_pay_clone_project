# Phone_pay_clone_project

An educational PhonePe-style payment simulation: scan any QR code, edit the receiver’s name and amount, then tap “Proceed to Pay” to display a mock “Payment Successful” screen with a success tone. This is for learning/demo purposes only—no real transactions.

## Demo
https://newphonepay.netlify.app/

## Screenshots
![home](https://github.com/user-attachments/assets/7e6b5947-1814-442b-aaf9-9975579e6fc6)
![scanner](https://github.com/user-attachments/assets/3db7a55c-3ded-4cdf-972d-ee97c05d0a07)
![edit_name_amount](https://github.com/user-attachments/assets/0f6405ee-c31c-486a-8a3b-8e284d6fb528)
![payment_success](https://github.com/user-attachments/assets/5f9af0dd-9ae0-45f4-91db-07ea96f57424)
![edit_history](https://github.com/user-attachments/assets/c358c02b-6bfc-44a8-a3db-828e7a914374)



## Table of Contents
- About
- Features
- Tech Stack
- Getting Started
- Usage
- Screenshots
- Contributing
- Credits
- Disclaimer

## About
Phone_pay_clone_project simulates a simple payment flow. After scanning a QR, a default receiver name appears, which can be edited by tapping the name field; the amount can be set by tapping the money field. On “Proceed to Pay,” a “Payment Successful” screen is shown and a success tone is played. This project is strictly for education and demonstrations, not real financial use.

## Features
- Scan a QR code to autofill receiver details; tap the default name to edit.
- Tap the amount field to set or update the amount; basic sanity checks for empty/zero.
- “Proceed to Pay” triggers a mock success screen and plays a success tone.
- Clean, PhonePe-inspired UI for a familiar flow; no backend or real payments.
- Tap Home, Scanner, History, or the editable Name to auto-enter full-screen for an immersive, app-like view; the browser UI/URL bar is hidden where supported.

## Tech Stack
- Languages: HTML, CSS, JavaScript
- Approach: Plain JS/DOM APIs and integrate a QR scanning library
- Run Mode: Static site (open index.html) or serve locally with a simple HTTP server

## Getting Started 
Prerequisites: 
- Modern browser (Chrome/Edge/Firefox) with camera permission enabled.

## Usage
1) Open the app and allow camera permissions to enable QR scanning.  
2) Scan any QR; a default receiver name appears—tap it to change the name.  
3) Tap the amount field to set the amount; then press “Proceed to Pay.”  
4) A “Payment Successful” screen appears and a success tone plays.  
Notes:
- This is a mock simulation; it does not initiate real payments.  
- For demos, sample QR images or plain-text also work.

## Contributing
Contributions are welcome!
- Fork → create a branch → commit → open a PR
- Keep commits focused and avoid unrelated changes
- Ensure any UI/audio assets are license-friendly

## Credits
- Built with HTML, CSS, JavaScript,
- Assistance: ChatGPT for scaffolding and documentation.
- Inspiration: PhonePe UI patterns (educational reference only).

## Disclaimer
This project is for educational and demonstration purposes only. It does not process real payments and is not affiliated with PhonePe.

## Contact
Author: Deepesh
Email:  dipeshkumar95061@gmail.com
Project Link: https://newphonepay.netlify.app/
