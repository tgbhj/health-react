import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Button, Avatar} from 'antd'
import RegSign from './RegSign'
import {getUser} from '../actions/user'
import {connect} from 'react-redux'
import ErrorBoundary from '../components/ErrorBoundary'

const style = {
    border: 0,
    lineHeight: '64px',
    height: '64px'
};

const {SubMenu} = Menu;

function mapStateToProps(state) {
    return {
        token: state.userTodo.token,
        user: state.userTodo.user
    }
}

class NavMenu extends React.Component {
    async componentDidMount() {
        if (this.props.token != null) {
            await this.props.dispatch(getUser(this.props.token))
        }
    }

    Greeting() {
        if (this.props.token != null) {
            return <Menu mode="horizontal" style={style}>
                <SubMenu title={<Avatar src={this.props.user.face} style={{marginBottom: 7}} size="large"/>}>
                    <Menu.Item key="setting:1" style={{textAlign: 'center', margin: '0 auto'}}>
                        <Link to={'/user/' + this.props.user._id}>用户中心</Link>
                    </Menu.Item>
                    <Menu.Item key="setting:2" style={{textAlign: 'center', margin: '0 auto'}}>
                        <Link to={'/recharge/' + this.props.user._id}>充值</Link>
                    </Menu.Item>
                    <Menu.Item key="setting:3" style={{textAlign: 'center', margin: '0 auto'}}>
                        <Link to={'/'}>出国就医</Link>
                    </Menu.Item>
                    <Menu.Item key="setting:4" style={{textAlign: 'center', margin: '0 auto'}}>
                        <Link to={'/'}>健康筹</Link>
                    </Menu.Item>
                    <Menu.Item key="setting:5" style={{textAlign: 'center', margin: '0 auto'}}>
                        <Link to={'/'}>康养中心</Link>
                    </Menu.Item>
                    <Menu.Item key="setting:6" style={{textAlign: 'center', margin: '10px auto'}}>
                        <Link to='/logout'>
                            <Button type='danger' onClick={this.logout}>登出</Button>
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        } else {
            return <ErrorBoundary><RegSign/></ErrorBoundary>
        }
    }

    logout = () => {
        localStorage.removeItem('health-token');
        window.location.replace('/');
    };

    render() {
        return <span style={{float: "right"}}>
                {
                    this.Greeting()
                }
            </span>
    }
}

export default connect(mapStateToProps)(NavMenu)