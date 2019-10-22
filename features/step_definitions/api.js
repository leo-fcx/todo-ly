import assert from 'assert';
import { Given, When, Then } from 'cucumber';
import Token from '../../services/token';
import Projects from '../../services/projects';

let PROJECTS;
let TOKEN;

Given('I have an authentication Token', function (done) {
  if (TOKEN) return done();

  Token
    .get()
    .then((token) => {
      TOKEN = token;
      done();
    });
});

Then('I can get all projects that I have created', function (done) {
  Projects.setToken(TOKEN);
  Projects
    .get()
    .then(projects => {
      PROJECTS = projects;
      assert(projects.length > 0);
      done();
    });
});

Then('I can see Home project as part of default projects', function () {
  const project = PROJECTS.find(project => project.Content === 'Home');
  assert(project !== undefined);
});

Then('I can create a new project', function (done) {
  const data = { Content: `My new project ${Date.now()}`};

  Projects.setToken(TOKEN);
  Projects
    .create(data)
    .then(project => {
      assert.equal(project.Content, data.Content);
      done();
    });
});
