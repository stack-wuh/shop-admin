import {
  Message
} from 'element-ui';

/**
 * [_toast description]
 * @method _toast
 * @param  {String} [msg='这是一条提示信息哦!'] [提示信息的内容]
 * @param  {String} [type='success']   [提示信息的类型]
 * @param  {Number} [duration=1]       [提示信息显示的时长]
 * @return {[type]}                    [description]
 */
export const _toast = ({msg = '这是一条提示信息哦!', type = 'success', duration = 1}) => {
  return Message({
    message: msg,
    type,
    duration: duration * 1000,
  })
}


export default  {
  _toast
}
