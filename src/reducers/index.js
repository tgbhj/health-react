import {combineReducers} from 'redux'
import {adminTodo} from '../reducers/admin'
import {adminUi} from '../reducers/admin_ui'
import {doctorTodo} from '../reducers/doctor'
import {doctorUi} from '../reducers/doctor_ui'
import {huataiTodo} from '../reducers/huatai'
import {infoTodo} from '../reducers/info'
import {infoUi} from '../reducers/info_ui'
import {pageTodo} from '../reducers/page'
import {pageUi} from '../reducers/page_ui'
import {questionTodo} from '../reducers/question'
import {questionUi} from '../reducers/question_ui'
import {userTodo} from '../reducers/user'
import {userUi} from '../reducers/user_ui'
import {vodliveTodo} from '../reducers/vod_live'
import {vodliveUi} from '../reducers/vod_live_ui'
import {lineTodo} from '../reducers/line'

const todoApp = combineReducers({
    adminTodo,
    adminUi,
    doctorTodo,
    doctorUi,
    huataiTodo,
    infoTodo,
    infoUi,
    pageTodo,
    pageUi,
    questionTodo,
    questionUi,
    userTodo,
    userUi,
    vodliveTodo,
    vodliveUi,
    lineTodo
});

export default todoApp