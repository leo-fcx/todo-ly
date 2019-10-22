import {By, until} from 'selenium-webdriver';

export default class TodoLy {
  static load(driver) {
    return driver.get('http://todo.ly');
  }

  static close(driver) {
    return driver.close();
  }

  static clickLogin(driver) {
    return driver
      .findElement(By.css('.HPHeaderLogin a'))
      .then(loginButton => {
        return driver
          .wait(until.elementIsVisible(loginButton))
          .then(() => {
            return loginButton.click();
          });
      });
  }
}