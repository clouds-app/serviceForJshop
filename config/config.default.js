/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577960311283_7628';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

 
 const swagger2 = {
    enable:false, // disable swagger , default true
    base: {
      /* default config,support cover
      schemes: [
          'http',
      ],
      host: '127.0.0.1:7001',
      basePath: '/',
      consumes: [
      'application/json',
      ],
      produces: [
      'application/json',
      ],
      */
      info: {
        description: 'This is a test swagger-ui html',
        version: '1.0.0',
        title: 'TEST',
        contact: {
          email: 'caandoll@aliyun.com',
        },
        license: {
          name: 'Apache 2.0',
          url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
        },
      },
      tags: [
        {
          name: 'admin',
          description: 'Admin desc',
        },
        {
          name: 'role',
          description: 'Role desc',
        },
      ],
      definitions:{
      // model definitions
      },
      securityDefinitions:{
      // security definitions
      }
    },
  }

  return {
	...swagger2,
    ...config,
    ...userConfig,
  };
};
