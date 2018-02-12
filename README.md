# Custom-URL-Online-Intake
Grab a get parameter from the URL to set a select drop down. Useful for giving customized intake links to different groups to track referral source. We created this to mark certain intakes as intakes designated for an upcoming clinic rather than a client that needed to be placed. If we had a clinic in Wicomico county that was coming up and they were starting to do intakes, we would give the lead of that project our regular online intake link with "&clinic=Wicomico" added to the end. When the link is clicked, the code embedded on the first page of our online intake would run and check to see if the clinic parameter is set in the URL. If it is set, it would check to make sure that the value of clinic is one of the values available in a lookup field set with all the possible options. If the value was a possible option in the lookup, it would select that option and then hide the field so the user never sees it. The reason for a lookup was to prevent the possible injection of some unknown code as the value of clinic.


## Set Up
1) Create a field called with a look up. The one I created was called "Remote Clinics".
2) Add a lookup for that field with all the possible values of your GET parameter.
3) Add that field to the first page on your intake.
4) Add the script from main.js into an instruction block on the first page of your online intake. Make sure to have the read as HTML box checked on the instruction block on Legal Server.
5) Add "&clinic=" and then one of your possible lookup values to test it out. (For testing you may want to comment out the lines 24 and 25 that hide the Remote Clinics field to make sure it's setting properly.
6) Now the field is set and you can use it like any other Legal Server field.
