/** @jsx Recreact.parsenodes */

class Recreact {
    static parsenodes(nodeName, attributes, ...args) {
        let children = args.length ? [].concat(...args) : null;
        return { nodeName, attributes, children };
    }
    static render(vnode) {
        if (vnode.split) return document.createTextNode(vnode);
        let node = document.createElement(vnode.nodeName);
        let attributes = vnode.attributes || {};
        Object.keys(attributes).forEach((k) => node.setAttribute(k, attributes[k]));
        (vnode.children || []).forEach((c) => node.appendChild(this.render(c)));
        return node;
    }
    static createApp(vdom) {
        let dom = this.render(vdom);
        document.body.appendChild(dom);
    }
}
const Component = () => {
    const world = "world";
    return (
        <div>
            Hello <a href="/">{world}</a>
        </div>
    );
};

const app = Component();
Recreact.createApp(app);
