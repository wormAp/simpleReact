/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
export default class ReactClass{
    constructor(props){
        this.props = props;
        this.state = null;
    }
    setState(stateChange){
        Object.assign( this.state, stateChange );
        this._render(this);
    }
}