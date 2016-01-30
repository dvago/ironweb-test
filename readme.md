# Iron web front end test 

Assuming you have already set up your machine with Node JS, before launch the script you must install the dependencies through **npm i**

###How to run the app:

```javascript
  ~: gulp
```

_navigate to your localhost on port 4000 http://localhost:4000_

Et voila!

###How it works:

Courses.json send the course list, for each course there is a field called "level" where you can find the relationship with the 3 different levels **débutants**, **intermédiaires**, **avancés**.

Just edit the array and remove/add 0,1,2 if you'd like to display different courses per group.

###Extra

- All the images have been optimised using Kraken.io
- No sprite needed, the logo and the pattern on top of the stage image have been converted in base64
- I didn't implemented a slider as stage because there weren't different images/contents
- The mobile version has been completely invented, the test zip had no mobile layouts.
