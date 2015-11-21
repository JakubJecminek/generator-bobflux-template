'use strict';
var util = require('util');
var mkdirp = require('mkdirp');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  promptUserDialog: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the bobflux application generator.'
      ));

    var prompts = [
      {
        name: 'appName',
        message: 'What is your app\'s name ?'
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;      
      done();
    }.bind(this));
  },

  scaffoldFolders: function () {
    mkdirp.sync("src");
    mkdirp.sync("src/actions");
  },

  copyNeededFiles: function () {
    this.copy("_gulpfile.js", "gulpfile.js");
    this.copy("_tsconfig.json", "tsconfig.json");
    this.copy("_tslint.json", "tslint.json");
    this.copy("_readme.md", "readme.md");
    this.copy("_app.ts", "src/app.ts");
    this.copy("_state.ts", "src/state.ts");
    this.copy("_cursors.ts", "src/cursors.ts");
    var context = {
      app_name: this.appName
    };
    this.template("_package.json", "package.json", context);
    this.template("_page.ts", "src/page.ts", context);
  },
});
