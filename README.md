# Javascript Challenge

## Background

The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though...the collection is too large to search through manually. Even the most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

This project provides a code that will create a table dynamically based upon a [provided dataset](StarterCode/static/js/data.js). Users should be able to filter the table data for specific values. 

This code uses JavaScript, HTML, and CSS, and D3.js on our web pages. 

## Automatic Table and Date Search

* This code creates a basic HTML web page using the UFO dataset provided in the form of an array of JavaScript objects

* The  code appends a table to the web page and then adds new rows of data for each UFO sighting.

  * Columns include `date/time`, `city`, `state`, `country`, `shape`, and `comment`.

* The a date form was used in the HTML document as well as JavaScript code that listened for events and search through the `date/time` column to find rows that match user input.
