/* eslint valid-jsdoc: "off" */

'use strict';
const fecha = require('fecha');
const isNumber = require('lodash/isNumber');
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
  
  //mysql配置开始
  config.sequelize = {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      dialectOptions: {
        charset: 'utf8mb4',
      },
      database: 'jshop',
      host: '127.0.0.1',
      port: '3306',
      username: 'root',
      password: '',
      timezone: '+08:00',
    };
    //mysql配置结束
	
    //cors配置开始
  config.security = {
      csrf: {
        enable: false,
      },
      //domainWhiteList: [ 'http://localhost:8080' ],
    };
	
    config.cors = {
      credentials: true,
    };
      //cors配置结束

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
 // 数据库
 const  mysql = {
      client: {
        host: '127.0.0.1',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '',
        // 数据库名
        database: 'jshop',
      },
      // 所有数据库配置的默认值
      default: {},

      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    }

 const sequelize = {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'weapp-vue-eggjs-shop-demo',
      host: '127.0.0.1',
      port: '3306',
      username: 'root',
      password: '209cfcfaf6',
      timezone: '+08:00',
      define: {
        createdAt: 'createdTime',
        updatedAt: 'lastModifiedTime',
        freezeTableName: true,
        underscored: false,
        getterMethods: {
          createdTime() {
            const createdTime = this.getDataValue('createdTime');
            if (createdTime) {
              return fecha.format(createdTime, 'YYYY-MM-DD HH:mm:ss');
            }
          },
          lastModifiedTime() {
            const lastModifiedTime = this.getDataValue('lastModifiedTime');
            if (lastModifiedTime) {
              return fecha.format(lastModifiedTime, 'YYYY-MM-DD HH:mm:ss');
            }
          },
        },
        setterMethods: {
          version(value) {
            if (isNumber(value)) {
              this.setDataValue('version', value + 1);
            }
          },
        },
      },
    }
  return {
	//...mysql,  
	//...sequelize,
	...swagger2,
    ...config,
    ...userConfig,
  };
};
