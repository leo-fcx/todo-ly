import {By, until} from 'selenium-webdriver';

export default class ErrorMessage {
  static getMessage(driver) {
    return driver
      .findElement(By.css('#ErrorMessageText'))
      .then(errorMessage => {
        return driver
          .wait(until.elementIsVisible(errorMessage))
          .then(() => {
            return errorMessage.getText();
          });
      });
  }
}