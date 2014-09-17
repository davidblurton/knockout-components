require.config({
    baseUrl: 'js',
    paths: {
      domReady: 'lib/requirejs-domready/domReady',
      text: 'lib/requirejs-text/text',
      knockout: 'lib/knockout/dist/knockout',
    }
});

require(['knockout', 'components/project/index', 'domReady!'], function(ko, project) {
    function ApplicationViewModel() {
      this.projects = ko.observableArray([
        {
          name: 'Database'
        }
      ]);
    }

    ko.components.register('project', project);
    ko.applyBindings(new ApplicationViewModel());
});
