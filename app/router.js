'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
// module.exports = app => {
//   const { router, controller } = app;
//   router.get('/', controller.home.index);
// };

 // {app_root}/app/router.js
  module.exports = app => {
    const { router, controller, swagger } = app;
    router.post('/', controller.home.index);
    swagger.post('/', {
        tags: [
          'admin',
        ],
        summary: 'Login a admin',
        description: '',
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'admin\'s username & password',
            required: true,
            schema: {
              type: 'object',
              required: [ 'username', 'password' ],
              properties: {
                username: {
                  type: 'string',
                  description: 'admin\'s username',
                },
                password: {
                  type: 'string',
                  description: 'admin\'s password',
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'SUCCEED',
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'string',
                  description: 'status',
                },
                data: {
                  type: 'object',
                  description: 'data',
                  properties: {
                    token: {
                      type: 'string',
                      description: 'token',
                    },
                  },
                },
              },
            },
          },
        },
      });
    router.get('/', controller.home.index);
    swagger.get('/', {
      tags: [
        'role',
      ],
      summary: 'search role by page',
      description: '',
      parameters: [
        {
          in: 'query',
          name: 'name',
          description: 'role\'s name',
        },
        {
          in: 'query',
          name: 'pageIndex',
          description: 'pageIndex',
        },
        {
          in: 'query',
          name: 'pageSize',
          description: 'pageSize',
        },
      ],
      responses: {
        200: {
           description: 'SUCCEED',
           schema: {
             type: 'object',
             properties: {
               status: {
                 type: 'string',
                 description: 'status',
               },
               datas: {
                 type: 'array',
                 description: 'result datas',
                 properties: {
                   token: {
                     type: 'string',
                     description: 'token',
                   },
                 },
               },
               pageIndex:{
                 type: 'number',
                 description: 'pageIndex',
               },
               pageSize:{
                 type: 'number',
                 description: 'pageSize',
               },
               totalCount:{
                 type: 'number',
                 description: 'totalCount',
               },
             },
           },
         },
      },
    });
 
    // 测试
	  router.post('/api/collect',controller.collect.create)
	  router.delete('/api/collect/:id',controller.collect.destroy)
	  router.put('/api/collect/:id',controller.collect.update)
	  router.get('/api/collect',controller.collect.list)
	  router.get('/api/collect/:id',controller.collect.find)
 
  };