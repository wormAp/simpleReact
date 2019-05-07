/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
class ReactElement{
    constructor(type,props,children){
        this.type = type;
        this.props = props;
        this.children = children;
    }
}
export const React={
    createElement:(type,props,...children)=>{
       return(new ReactElement(type,props,children));
    }
};