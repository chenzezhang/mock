'use strict';

const express = require('express');
const app = express();

const { log4js, expressLogger } = require('./utils/logger')

app.use(log4js.connectLogger(expressLogger, { level: log4js.levels.INFO }));
app.use('/static', express.static('src/static'));
app.use('/mock', require('./server/routers'));

app.get('/*', function(req,res,next){ // 载入mock规则
    console.log(req.url);
    debugger;
    next();
});


app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
