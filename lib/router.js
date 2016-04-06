Router.configure({layoutTemplate: 'layout'});
+

+
+Router.route('/new', {name: "newForm"});
+
+Router.route('/:name', {name: "bCard"});