FlowRouter.route([
	'/', '/home'
], {
	action: function () {
		FlowLayout.render('layout', {
			main: 'Mixed_Elements'
		});
	}
});