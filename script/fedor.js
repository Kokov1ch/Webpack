export default function sayHello(parent) {
    const node = document.createElement('div');
    node.innerText = 'fedor fet';
    parent.append(node);
}