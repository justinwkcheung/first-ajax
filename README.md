# Your First (Several) Asynchronous Requests

[See assignment in Alexa.](https://alexa.bitmaker.co/cohorts/67/assignments/2055/latest)

1. What HTTP method did your browser use to make the request?
- GET

2. How many milliseconds did it take your browser to complete it?
88ms

3. What HTTP status code did the server return? What does that mean?
- 200 OK

4. Look at the "Initiator" and "Type" columns. Was this an xhr/JavaScript/AJAX request or a normal browser request?
-normal

STEP 1

1. What are the values in the "Method" and "Status" columns? Compare these values to Step 0.
- GET, 200 OK

2. What are the values in the "Type" and "Initiator" columns? Compare these values to Step 0.
- script, index.html:7

Step 3

3. Click on the request. This displays a detailed view of this one request. Investigate the "Response" and "Preview" sub-tabs. What was the content of the response?
- Wow what a ride! I came all the way from the server!

Step 4

3. What is the new HTTP status code?
- 500 Internal Server Error

Step 6

2. Switch back and forth between the /ping and /pong URLs, reloading the page and running your request each time. What do you see in your Developer Tools? What messages show up in your console?
- both have XHR finished loading - but fail has 500 internal server error

Step 9

3. Investigate the Request and Response "Headers" in your Network Tab. What is the 'Accepts' of the Request, and the 'Content-Type' of the response?

- Accepts text/html
- content-type: text/html 
