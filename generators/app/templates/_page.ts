import * as b from '../node_modules/bobril/index';

export let page = b.createComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode, oldMe?: b.IBobrilCacheNode): void {
        me.children = [
            { tag: 'h1', children: '<%= app_name %>' }            
        ];
    }
});
