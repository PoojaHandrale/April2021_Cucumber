package runners;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="classpath:features", // Location of features file
		glue="steps", //package name of steps
		//tags="@Colourchange",
		monochrome=true, // provides correct path and links the features with testbase methods
		dryRun=false, //checks compilation error
		plugin= {
			"pretty",
			"html:target/cucumber",
			"json:target/cucumber.json"
		}
		)


public class Test1_Runner {

}
