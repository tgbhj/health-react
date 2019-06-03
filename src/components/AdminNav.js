import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Icon, Button} from 'antd'
import AdminSign from './AdminSign'
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
                <SubMenu title={<Icon type="bars" style={{fontSize: 24}}/>}>
                    <Menu.Item key="setting:1" style={{textAlign: 'center', margin: '0 auto'}}>
                        <span>{this.props.user.username}</span>
                    </Menu.Item>
                    <Menu.Item key="setting:2" style={{textAlign: 'center', margin: '10px auto'}}>
                        <Link to='/logout'>
                            <Button type='danger' onClick={this.logout}>登出</Button>
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        } else {
            return <ErrorBoundary><AdminSign/></ErrorBoundary>
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