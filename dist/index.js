"use strict";var _graphqlYoga=require("graphql-yoga");var _nodeHttp=require("node:http");var _resolvers=_interopRequireDefault(require("./graphql/resolvers"));var _typeDefs=_interopRequireDefault(require("./graphql/type-defs"));var _datas=_interopRequireDefault(require("./datas"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}//Datas
var yoga=(0,_graphqlYoga.createYoga)({landingPage:false,graphqlEndpoint:"/console",schema:(0,_graphqlYoga.createSchema)({typeDefs:_typeDefs["default"],resolvers:_resolvers["default"]}),context:{db:_datas["default"]}});var server=(0,_nodeHttp.createServer)(yoga);server.listen(4000,function(){return console.log("Server is running on localhost:4000")});