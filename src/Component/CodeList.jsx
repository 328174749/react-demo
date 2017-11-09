import React, {
    Component,
    PropTypes
} from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
    Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';


class CodeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDeposit: 0
        }
    }
    componentWillUpdate(nextProps, nextState) {}
    render() {
        return (
            <div> 
                <div class='head'>toubu</div>
                <div>wocaoao</div>
                <div className='deposit_tip'>每笔提现金额不超过200元，每天最多3次</div>
                <div className='deposit_detail'>
                    <div className='detail_tip'>可提现金额（元）</div>
                    <div className='detail_num'><span>{this.state.allDeposit}</span></div>
                </div>
                <Link to={'/applyDeposit?allDeposit='+this.state.allDeposit} className='trans_apply'>提现</Link>
            </div>
        );
    }
}
export default CodeList;