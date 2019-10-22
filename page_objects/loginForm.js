import {By, until} from 'selenium-webdriver';

export default class LoginForm {
  static setUsername(driver, username) {
    return driver
      .findElement(By.css('#ctl00_MainContent_LoginControl1_TextBoxEmail'))
      .then(usernameInput => {
        return driver
          .wait(until.elementIsVisible(usernameInput))
          .then(() => {
            return usernameInput.sendKeys(username)
          });
      });
  }

  static setPassword(driver, password) {
    return driver
      .findElement(By.css('#ctl00_MainContent_LoginControl1_TextBoxPassword'))
      .then(passwordInput => {
        return driver
          .wait(until.elementIsVisible(passwordInput))
          .then(() => {
            return passwordInput.sendKeys(password);
          });
      });
  }

  static submit(driver) {
    return driver
      .findElement(By.css('#ctl00_MainContent_LoginControl1_ButtonLogin'))
      .then(loginSubmitButton => {
        return driver
          .wait(until.elementIsVisible(loginSubmitButton))
          .then(() => {
            return loginSubmitButton.click();
          });
      });
  }
}