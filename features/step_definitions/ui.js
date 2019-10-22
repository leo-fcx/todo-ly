import assert from 'assert';
import { Given, When, Then } from 'cucumber';
import ErrorMessage from "../../page_objects/errorMessage";
import TodoLy from "../../page_objects/todoLy";
import LoginForm from "../../page_objects/loginForm";
import LandingPage from "../../page_objects/landingPage";

Given('I load Todo.ly page', function () {
  return TodoLy.load(this.driver);
});

Then('I click on Login button', function () {
  return TodoLy.clickLogin(this.driver);
});

Then('I introduce non-valid credentials in the login form', function () {
  return LoginForm
    .setUsername(this.driver, 'invalid@email.com')
    .then(() => {
      return LoginForm.setPassword(this.driver,'password');
    });
});

Then('I submit the login form', function () {
  return LoginForm.submit(this.driver);
});

Then('I should see an invalid credentials notification message', function () {
  return ErrorMessage
    .getMessage(this.driver)
    .then((errorMessage) => {
      const expected = 'Wrong email or password. Please try again. Forgot ' +
        'your password? You can retrieve it using the form below.';
      assert.equal(errorMessage, expected);
    });
});

Then('I close the browser', function () {
  return TodoLy.close(this.driver);
});

Given('I introduce valid credentials in the login form', function () {
  return LoginForm
    .setUsername(this.driver, 'todo.ly.alsie@gmail.com')
    .then(() => {
      return LoginForm.setPassword(this.driver,'todoly123');
    });
});

Then('I should see lading page', function () {
  return LandingPage
    .isVisible(this.driver)
    .then(isVisible => assert(isVisible));
});
