define(['knockout', 'text!./template.html'], function(ko, template) {
    function ProjectViewModel(params) {
      this.name = params.project.name;
      this.displayContent = ko.observable(false);
    }

    ProjectViewModel.prototype.toggleExpanded = function() {
      this.displayContent(!this.displayContent());
    };

    return { viewModel: ProjectViewModel, template: template };
});
