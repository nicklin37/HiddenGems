# HiddenGems

As avid adventurers who desire to make the most out of a vacation or some location, it is often frustrating to have to sift through multiple websites to find the most worthwhile points of interests. What if you have limited time to visit a city, for example? This project provides a solution to these problems by using crowdsourced data to generate the most worthwhile and valuable attractions at a glimpse of the map! The lower quality attractions get filtered out while the higher quality attractions stand out, in terms of popularity and the rating of the point of interest.

## Instructions
To run this project, git clone this repository by running the following command in terminal:

`git clone https://github.com/kylewong975/HiddenGems.git`

Then, go to the directory

`$ cd HiddenGems/`

Before running the server, I readacted my own Google Maps API key, so follow the instructions from the Google Maps API documentation to obtain your own key in this website: https://developers.google.com/maps/documentation/javascript/get-api-key

Go to map.html and at the bottom, insert your API key, replacing the placeholder.

After that, in the HiddenGems root folder, run: 

`$ node server.js`

This will start the server at port 3000 locally.

Navigate to your browser and type `localhost:3000` to view the website. 

Enjoy!
