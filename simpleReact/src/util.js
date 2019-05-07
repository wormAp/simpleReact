/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
const utils={
    _getType(data){
        let temp=Object.prototype.toString.call(data);
        return temp.substring(8,temp.length-1).toLowerCase();
    },
    isNumber(data){
        return utils._getType(data)==="number";
    },
    isString(data){
        return utils._getType(data)==="string";
    },
    isFunction(data){
        return utils._getType(data)==="function";
    },
    setAttribute(dom,props){
        Object.keys(props||{}).forEach((key)=>{
            if(props.hasOwnProperty(key)){
                let attributeKey = key;
                if(key.toLowerCase()=="style"){
                    dom.style.cssText  =Object.keys(props[key]).map((_key)=>{
                        return `${_key}:${props[key][_key]}`;
                    }).join(";");
                }else{
                    if(key==="className"){
                        attributeKey="class";
                    }else if(/on\w+/.test(key)){
                        dom.addEventListener(key.toLowerCase().substring(2,key.length),props[key])
                    }
                    dom.setAttribute(attributeKey,props[key]);
                }

            }

        })
    }
};
export default utils;