// Write your package code here!
Package.describe({
  name: "firfi:tcomb-form",
  version: "0.0.1",
  summary: "tcomb-form port for meteor",
  git: "https://github.com/firfi/tcomb-form-meteor/",
  documentation: "README.md"
});

var tcombVer = "0.4.5";

Npm.depends({
  "tcomb-form": tcombVer
});

Package.onUse(function(api) {
  api.use('reactjs:react@0.2.1', ['client', 'server']);
  api.addFiles('dist.js', ['client', 'server']);
  api.export('t', ['client', 'server']);

  //api.addFiles([
  //  "vendor/react-with-addons-" + reactVersion + ".js",
  //  "vendor/react-with-addons-" + reactVersion + ".min.js"
  //], "client", {
  //  isAsset: true
  //});

  //api.addFiles([
  //  // On the client, we inject a <script> tag to load the appropriate
  //  // version of React according to process.env.NODE_ENV.
  //  "src/inject-react.js",
  //  // On the server, we use the modules that ship with react.
  //  "src/require-react.js"
  //], "server");

  // This React variable is defined in src/require-react.js.
  //api.export("React", "server");

  // Meteor-enabled components should include the ReactMeteor mixin via
  // React.createClass({ mixins: [ReactMeteor.Mixin], ... }) or just
  // ReactMeteor.createClass({ ... }).
  //api.addFiles("src/ReactMeteor.js", ["server", "client"]);
  //api.export("ReactMeteor", ["server", "client"]);
});

Package.onTest(function(api) {
  //api.use("tinytest");
  //api.use("reactjs:react");
  //api.addFiles("react-tests.js");
});