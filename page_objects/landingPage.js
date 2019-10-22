import { By, until } from 'selenium-webdriver';

export default class LandingPage {
  /**
   * Checks whether Landing Page after login is visible. This check is done against the
   * input field to create new Todo item.
   *
   * @param driver
   * @return {*}
   */
  static isVisible(driver) {
    return driver
      .findElement(By.css('#NewItemContentInput'))
      .then(newTodoInput => {
        return driver
          .wait(until.elementIsVisible(newTodoInput))
          .then(() => {
            return newTodoInput.isDisplayed();
          });
      });
  }
}