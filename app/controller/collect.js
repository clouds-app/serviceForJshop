'use strict';

const Controller = require('egg').Controller;

class CollectController extends Controller {
    async create(){
        const {ctx} = this;
        const body = ctx.request.body;
        ctx.body = await ctx.service.collect.create(body);
    }
    
    async destroy(){
        const {ctx} = this;
        const id = +ctx.params.id;
        ctx.body = await ctx.service.collect.destroy(id)
    }

    async update(){
        const {ctx} = this;
        const id = +ctx.params.id;
        const body = ctx.request.body;
        ctx.body = await ctx.service.collect.update({
            id,
            body
        })
    }

    async find() {
        const {ctx} = this;
        const id = +ctx.params.id;
        ctx.body = await ctx.service.collect.find(id)
      }

    async list(){
        const {ctx} = this;
        const query = ctx.query;
        ctx.body = await ctx.service.collect.list(query)
    }
}

module.exports = CollectController;