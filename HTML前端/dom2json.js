function dom2json() {
   function createObj(node) {
        var tag = node.nodeName.toLocaleLowerCase();
        var obj = {};
        //过滤子节点
        const childList = Array.from(node.childNodes).filter(item => {
            const name = item.nodeName;
            return (name === "#text" && item.data.trim() !== '') || name !== '#text';
        })
        //生成tag
        if (tag === '#text') {
            obj.tag = 'text';
            obj.content = node.data.trim();
        } else {
            obj.tag = tag;
        }
        //生成attributes
        if (node.attributes) {
            obj.attributes = {};
            for (let i = 0; i < node.attributes.length; i++) {
                const { name, value } = node.attributes[i];
                obj.attributes[name] = value;
            }
        }
        //生成children
        if (childList.length !== 0) {
            console.log(childList);
            obj.children = [];
            for (var i = 0; i < childList.length; i++) {
                obj.children.push(createObj(childList[i]))
            }
        }
        return obj;
    }
    var jsContainer = document.getElementById('jsContainer');
    return createObj(jsContainer)
}
