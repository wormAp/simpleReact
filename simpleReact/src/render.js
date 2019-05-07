/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
import utils from "./util";
function _render(vnodes) {
    let dom;
    if(utils.isString(vnodes) || utils.isNumber(vnodes)){
        dom = document.createTextNode(vnodes);
    }else if(utils.isString(vnodes.type)){
        dom = document.createElement(vnodes.type);
        utils.setAttribute(dom,vnodes.props);
    }else if(utils.isFunction(vnodes.type)){
        var ins = new vnodes.type(vnodes.props);
        ins._render = _renderComponent;
        dom = _renderComponent(ins);
    }
    vnodes.children && vnodes.children.forEach((_vnodes)=>{
       let temp =  _render(_vnodes)
        dom.appendChild(temp);
    })
    return dom;
}
function _renderComponent(ins) {
    let isMount = true;
    let parentNode = null;
    if(!ins._renderElement){
        if(ins.componentWillMount){
            ins.componentWillMount();
        }
        isMount=true;
    }else{
        parentNode = ins._dom.parentNode;
        parentNode.removeChild(ins._dom)
        isMount=false;
        if ( ins._renderElement && ins.componentWillUpdate ) {
            ins.componentWillUpdate();
        }
    }
    ins._renderElement = ins.render();
    let dom = _render(ins._renderElement);
    ins._dom = dom;
    if(isMount){
        if(ins.componentDidMount){
            ins.componentDidMount();
        }
    }else{
        parentNode.appendChild(ins._dom);
        if (ins.componentDidUpdate ) {
            ins.componentDidUpdate();
        }
    }
    return dom;
}
export default function render(vnodes,container) {
    container.innerHTML="";
    let dom = _render(vnodes,container);
    container.appendChild(dom);
}