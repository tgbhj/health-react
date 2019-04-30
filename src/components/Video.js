import React from 'react'
import {withRouter} from 'react-router-dom'
import 'dplayer/dist/DPlayer.min.css'
// import Hls from 'hls.js'
import DPlayer from 'dplayer/dist/DPlayer.min'
import {Row, Col} from 'antd'
import axios from "axios"
import {addVideo} from '../actions/vod_live'
import {videoPlayer} from '../actions/vod_live_ui'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {
        video: state.vodliveTodo.video,
        video_player: state.vodliveUi.video_player,
        lines: state.lineTodo.lines
    }
}

class Video extends React.Component {
    async getVideo() {
        await axios.get('/api/video', {headers: {'id': this.props.match.params.id}})
            .then(res => {
                this.props.dispatch(addVideo(res.data.cb));
            })
            .catch(err => {
                console.log(err)
            })
    }

    async componentDidMount() {
        await this.getVideo();
        this.props.dispatch(videoPlayer(new DPlayer({
            container: document.getElementById('player'),
            lang: 'zh-cn',
            hotkey: false,
            video: {
                // url: 'http://dnionh265.seei.tv/health/' + this.props.video.name + '/index.m3u8',
                url: 'https://seeihealth.com/videos/' + this.props.video.name,
                pic: this.props.video.poster,
                // type: 'customHls',
                // customType: {
                //     'customHls': (video, player) => {
                //         const hls = new Hls();
                //         hls.loadSource(video.src);
                //         hls.attachMedia(video);
                //     }
                // }
            },
            danmaku: {
                id: 'DIYgod',
                api: '/api/danmu/v3?id=DIYgod'
            }
        })))
    }

    render() {
        return <Row type="flex" justify="center" align="middle" style={{marginTop: 20}}>
            <Col xs={24} sm={16} md={16} lg={16} xl={16} xxl={16}>
                <div id='player'/>
            </Col>
        </Row>
    }
}

export default connect(mapStateToProps)(withRouter(Video))