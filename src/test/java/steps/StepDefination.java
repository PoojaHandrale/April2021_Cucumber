package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;


public class StepDefination {
	WebDriver driver;

	@Before
	public void init() {

		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();

		driver.get(" http://techfios.com/test/101/");

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	@Given("^Set Sky Blue Background button exists$")
	public void Set_Sky_Blue_Background_button_exists() {
		System.out.println("Set Sky Blue Background button exists");
	}

	@When("^I click on set Sky Blue Background button$")
	public void I_click_on_set_Sky_Blue_Background_button() {
		driver.findElement(By.xpath("//button[@onclick='myFunctionSky()']")).click();
		System.out.println("I click on set Sky Blue Background button");
	}

	@Then("^the background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue() {
		System.out.println("the background color is changed to sky blue");
	}

	@Given("^Set SkyWhite Background button exists$")
	public void set_SkyWhite_Background_button_exists() {
		System.out.println("Set White Background button exists");

	}

	@When("^I click on set White Background button$")
	public void I_click_on_set_White_Background_button() {
		driver.findElement(By.xpath("//button[@onclick='myFunctionWhite()']")).click();
		System.out.println("I click on set White Background button");

	}

	@Then("^the background color will change to white$")
	public void the_background_color_will_change_to_white() {
		System.out.println("the background color is changed to white");
	}

	@After
	public void tearDown() {
		 driver.close();// it will close last or recently used window that was open
		 driver.quit();//it will kill the driver and close all the windows

	}

}
