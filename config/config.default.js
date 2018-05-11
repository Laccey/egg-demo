module.exports = appInfo => {
    const config = {};

    config.keys = appInfo.name + '_1511926934724_1128';

    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    }

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
          '.tpl': 'nunjucks'
        },
    }

    return config;
}
