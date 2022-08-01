import nunjucks from 'nunjucks';

nunjucks.configure('src/views', { autoescape: true });
// nunjucks.render('index.njk', { condition: true });

// var template = nunjucks.compile('Hello {{ username }}');
// template.render({ username: 'James' });
