module.exports = app => {
    const { router, controller } =app;
    router.get('/news', controller.home.index);
    router.get('/news/list', controller.news.list);
}