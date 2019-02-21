import {
  Message
} from 'element-ui';
import router from '@/router';

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

export const $to = ({method = 'push', name, params, path, query}, deply = 1) => {
  setTimeout(() => {
    router[method]({name, params, path, query})
  }, deply * 1000)
}

export const ObjNotNull = obj => {
  let _obj = {}
  if(typeof obj !== 'object') return new Error('argus expect Object! please try again after validate params.')
  for (var k in obj) {
    if(obj[k] !== undefined && obj[k] !== '' && obj[k] !== null){
      _obj[k] = typeof obj[k] === 'boolean' ? ( obj[k] === true ? 1 : 0 ) : obj[k]
    }
  }
  console.log(_obj)
  return _obj
}

export default  {
  _toast,
  $to,
}
