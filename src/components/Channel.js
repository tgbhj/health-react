import React from 'react'
import {withRouter} from 'react-router-dom'
import 'dplayer/dist/DPlayer.min.css'
import Hls from 'hls.js'
import DPlayer from 'dplayer/dist/DPlayer.min'
import {Row, Col} from 'antd'
import axios from 'axios'
import {addChannel} from '../actions/vod_live'
import {channelPlayer} from '../actions/vod_live_ui'
import {connect} from 'react-redux'
// import io from 'socket.io-client'

function mapStateToProps(state) {
    return {
        channel: state.vodliveTodo.channel,
        channel_player: state.vodliveUi.channel_player,
        lines: state.lineTodo
    }
}

class Channel extends React.Component {
    constructor(props) {
        super(props);
    }

    async getChannel() {
        await axios.get('/api/channel', {headers: {'id': this.props.match.params.id}})
            .then(res => {
                this.props.dispatch(addChannel(res.data.cb))
            }).catch(err => {
                console.log(err)
            })
    }

    async componentDidMount() {
        // const socket = io('http://192.168.1.118');
        await this.getChannel();
        await this.props.dispatch(channelPlayer(new DPlayer({
            container: document.getElementById('player'),
            lang: 'zh-cn',
            autoplay: true,
            hotkey: false,
            live: true,
            video: {
                // url: 'http://dnionh265.seei.tv/health/YveKZe8SHsRjssWsO8d6DaxMcBGuksMn/index.m3u8',
                // url: 'https://seeihealth.com/videos/YveKZe8SHsRjssWsO8d6DaxMcBGuksMn.mp4',
                url: 'https://www.seeihealth.com/live/' + this.props.channel.user + '/playlist.m3u8',
                // url: 'https://www.seeihealth.com/live/channel_1/playlist.m3u8',
                pic: this.props.channel.poster,
                type: 'customHls',
                customType: {
                    'customHls': (video, player) => {
                        const hls = new Hls();
                        hls.loadSource(video.src);
                        hls.attachMedia(video);
                    }
                }
            },
            danmaku: false
        })))
    }

    render() {
        return <Row type="flex" justify="center" align="middle" style={{marginTop: 20}}>
            <Col xs={24} sm={16} md={16} lg={16} xl={16} xxl={16}>
                <div id='player'/>
            </Col>
            <Col xs={24} sm={16} md={16} lg={16} xl={16} xxl={16}>
                <h1>直播间信息</h1>
                <span>{this.props.channel.detail}</span>
            </Col>
        </Row>
    }
}

export default connect(mapStateToProps)(withRouter(Channel))