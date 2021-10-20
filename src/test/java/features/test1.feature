Feature: TF login functionality validation 
#Given: "Set SkyBlue Background" button exists; When: I click on the button; Then: the background color will change to sky blue
#Given: "Set SkyWhite Background" button exists; When: I click on the button; Then: the background color will change to white

Scenario: Sky Blue Background
	Given Set Sky Blue Background button exists
	When I click on set Sky Blue Background button 
	Then the background color will change to sky blue
	
Scenario: White Background Change 
	Given Set SkyWhite Background button exists 
	When I click on set White Background button 
	Then the background color will change to white
