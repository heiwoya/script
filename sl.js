/*
  下载链接：https://autovideo.autohome.com.cn/signnew/register/index.html?uid=105091440&pvareaid=6850761&shareplatform=weixin
[rewrite_local]
#闪辆
https://newvideo.autohome.com.cn/openapi/activity-api url script-request-body https://ghproxy.com/https://github.com/LubooC/Script/blob/main/sl.js
[MITM]
hostname = newvideo.autohome.com.cn
#loon
https://newvideo.autohome.com.cn/openapi/activity-api url script-request-body https://ghproxy.com/https://github.com/LubooC/Script/blob/main/sl.js, requires-body=true, timeout=10, tag=萝卜闪辆
*/

// [task_local]
//#闪辆
// 10 0 * * * https://ghproxy.com/https://github.com/LubooC/Script/blob/main/sl.js, tag=闪辆, enabled=true
const _0xeb6c71=_0x4a45;function _0x45f7(){const _0x3ddec3=['&version=1.4.0','@chavy_boxjs_userCfgs.httpapi','deviceid=','194nfTSLD','resolve','taskDetailDtoList','catch','\x0a开始【闪辆账户\x20','getScript','undefined','&uticket=','object','@chavy_boxjs_userCfgs.httpapi_timeout','application/x-www-form-urlencoded','post','finally','&deviceid=','body','getdata','headers','个账号-------------\x0a','个账号','dataFile','existsSync','parse','_appid=ydsp.iosv2&_sign=27867EE9CDD9C4C53C53898477A91853&_timestamp=1635927486&deviceid=','taskName','81kzqSHC','fetch','-------------共','decode','isLoon','cron','substr','看视频任务：','您选择的是用\x22@\x22隔开\x0a','getval','Content-Length','split','reduce','logs','fhxzstatus','CookieJar','setval','method','indexOf','join','isMuteLog','toString','哈哈哈','write','&rcontent=','status','setValueForKey','test','rawBody','redirect','env','appid=','logSeparator','box.dat','cwd','285XdoYHe','16488kcdAXo','setCookieSync','forEach','result','round','writedata','replace','set-cookie','toStr',',\x20开始!','got','read','234160hUCkYi','萝卜闪辆','opts','https://newvideo.autohome.com.cn/openapi/recommend/task_hot_video','isArray','readFileSync','==============📣系统通知📣==============','stringify','loaddata','https://newvideo.autohome.com.cn/openapi/activity-api/task/task_video_commit','data','isMute','getjson','当前进度：','uid=','name','taskId','totalNum','push','13241536OtZLMy','exec','uticket=','concat','match','*/*','&taskType=0','评论任务：','abs','_appid=ydsp','lodash_get','Content-Type','completeNum','timeout','done','&playDuration=60&pm=1&taskId=1&uid=','lodash_set','writeFileSync','log','13EkOTyn','tough-cookie','9918boGKeG','then','1140vLdoKr','url','&imei=5c4cf4e7668b9986c2a201c2a498ebc38e93397b&is_like=1&uticket=','https://newvideo.autohome.com.cn/openapi/activity-api/task/query_list?uid=','&vid=','path','index','去完成','isNode','setjson','startTime','cktough','statusCode','https://newvideo.autohome.com.cn/openapi/activity-api/checkin/checkin?_appid=ydsp&deviceid=&version=1.4.0&pm=1','encoding','http://','media-url','slice','call',',\x20结束!\x20🕛\x20',',\x20错误!','25190dqusEX','trim','initGotEnv','utf-8','.$1','slcount','Cookie','getMonth','length','https://newvideo.autohome.com.cn/openapi/activity-api/task/start_task?deviceid=','------------------任务结束------------------','mediaUrl','assign','getSeconds','POST','send','logErr','任务失败','isQuanX','cookieJar','exports','message','setdata','runScript','wait','ckjar','182WwIyle','http','get','524010OzBjkb','458340cZUCsF','&taskId=','getTime','iconv-lite','/v1/scripting/evaluate','isNeedRewrite','map','slurl','getFullYear','openUrl','isSurge','floor'];_0x45f7=function(){return _0x3ddec3;};return _0x45f7();}(function(_0x373402,_0x5a0de7){const _0x3e1aa9=_0x4a45,_0x46cf06=_0x373402();while(!![]){try{const _0x2faaaa=-parseInt(_0x3e1aa9(0x229))/0x1*(-parseInt(_0x3e1aa9(0x1e5))/0x2)+parseInt(_0x3e1aa9(0x264))/0x3*(parseInt(_0x3e1aa9(0x265))/0x4)+-parseInt(_0x3e1aa9(0x1fc))/0x5*(-parseInt(_0x3e1aa9(0x1e7))/0x6)+parseInt(_0x3e1aa9(0x216))/0x7*(-parseInt(_0x3e1aa9(0x271))/0x8)+-parseInt(_0x3e1aa9(0x241))/0x9*(-parseInt(_0x3e1aa9(0x219))/0xa)+-parseInt(_0x3e1aa9(0x1d0))/0xb+-parseInt(_0x3e1aa9(0x21a))/0xc*(parseInt(_0x3e1aa9(0x1e3))/0xd);if(_0x2faaaa===_0x5a0de7)break;else _0x46cf06['push'](_0x46cf06['shift']());}catch(_0x1b93fd){_0x46cf06['push'](_0x46cf06['shift']());}}}(_0x45f7,0xbe4d2));const $=new Env(_0xeb6c71(0x272));let status;status=(status=$[_0xeb6c71(0x24a)](_0xeb6c71(0x24f))||'1')>0x1?''+status:'';let slckArr=[],time=Math[_0xeb6c71(0x269)](Date['now']()/0x3e8),slck=$[_0xeb6c71(0x1ef)]()?process['env']['slurl']?process[_0xeb6c71(0x25f)][_0xeb6c71(0x221)]:'':$['getdata'](_0xeb6c71(0x221))?$[_0xeb6c71(0x238)]('slurl'):'',slcks='',rcontent=['哇~','爱了',_0xeb6c71(0x257)],uid='',taskId='',sp_list,i,deviceid='',slurl,uticket='';!(async()=>{const _0x2de1de=_0xeb6c71;if(typeof $request!==_0x2de1de(0x22f))fhxzck();else{if(!$[_0x2de1de(0x1ef)]()){slckArr['push']($[_0x2de1de(0x238)](_0x2de1de(0x221)));let _0x1296ef=$[_0x2de1de(0x24a)](_0x2de1de(0x201))||'1';for(let _0x446a94=0x2;_0x446a94<=_0x1296ef;_0x446a94++){slckArr[_0x2de1de(0x1cf)]($[_0x2de1de(0x238)]('slurl'+_0x446a94));}console['log'](_0x2de1de(0x243)+slckArr['length']+_0x2de1de(0x23a));for(let _0x34d863=0x0;_0x34d863<slckArr[_0x2de1de(0x204)];_0x34d863++){slckArr[_0x34d863]&&(slck=slckArr[_0x34d863],$['index']=_0x34d863+0x1,console[_0x2de1de(0x1e2)](_0x2de1de(0x22d)+$[_0x2de1de(0x1ed)]+'】'),uid=slurl['match'](/uid=(\S*)&/)[0x1],deviceid=slurl[_0x2de1de(0x1d4)](/deviceid=(\S*)&ver/)[0x1],uticket=slurl['match'](/uticket=(\S*)/)[0x1],await rw(),$[_0x2de1de(0x1e2)](_0x2de1de(0x206)));}}else{process[_0x2de1de(0x25f)][_0x2de1de(0x221)]&&process[_0x2de1de(0x25f)][_0x2de1de(0x221)]['indexOf']('@')>-0x1?(slckArr=process[_0x2de1de(0x25f)][_0x2de1de(0x221)][_0x2de1de(0x24c)]('@'),console[_0x2de1de(0x1e2)](_0x2de1de(0x249))):slcks=[process['env']['slurl']];;Object['keys'](slcks)[_0x2de1de(0x267)](_0xcd30f8=>{const _0x39caeb=_0x2de1de;slcks[_0xcd30f8]&&slckArr[_0x39caeb(0x1cf)](slcks[_0xcd30f8]);}),console[_0x2de1de(0x1e2)]('共'+slckArr[_0x2de1de(0x204)]+_0x2de1de(0x23b));for(let _0x3b5e3e=0x0;_0x3b5e3e<slckArr[_0x2de1de(0x204)];_0x3b5e3e++){$['message']='',slurl=slckArr[_0x3b5e3e],$[_0x2de1de(0x1ed)]=_0x3b5e3e+0x1,console[_0x2de1de(0x1e2)](_0x2de1de(0x22d)+$['index']+'】'),uid=slurl[_0x2de1de(0x1d4)](/uid=(\S*)&/)[0x1],deviceid=slurl[_0x2de1de(0x1d4)](/deviceid=(\S*)&ver/)[0x1],uticket=slurl[_0x2de1de(0x1d4)](/uticket=(\S*)/)[0x1],await rw(),$['log'](_0x2de1de(0x206));}}}})()[_0xeb6c71(0x22c)](_0x23bb95=>$[_0xeb6c71(0x20c)](_0x23bb95))[_0xeb6c71(0x235)](()=>$[_0xeb6c71(0x1de)]());function fhxzck(){const _0x12840f=_0xeb6c71;if($request[_0x12840f(0x1e8)][_0x12840f(0x253)]('checkin')>-0x1&&$request[_0x12840f(0x1e8)][_0x12840f(0x253)]('query_list')>-0x1&&$request[_0x12840f(0x1e8)]['indexOf'](_0x12840f(0x260))>-0x1){const _0x44c7d0=$request[_0x12840f(0x1e8)];if(_0x44c7d0)$[_0x12840f(0x212)](_0x44c7d0,_0x12840f(0x221)+status);$[_0x12840f(0x1e2)](_0x44c7d0),$['msg']($['name'],'','闪辆'+status+'数据获取成功');}}async function rw(){return new Promise(_0x570add=>{const _0xfc3433=_0x4a45;let _0x5321fa={'url':_0xfc3433(0x1ea)+uid+_0xfc3433(0x236)+deviceid+_0xfc3433(0x1d6)};$[_0xfc3433(0x218)](_0x5321fa,async(_0x32b0f3,_0x148aa1,_0x4e2298)=>{const _0x4dd1d3=_0xfc3433;try{result=JSON['parse'](_0x4e2298);let _0x160d1e=result['result'][_0x4dd1d3(0x22b)];await daka();for(let _0x697fd3=0x0;_0x697fd3<_0x160d1e[_0x4dd1d3(0x204)];_0x697fd3++){console[_0x4dd1d3(0x1e2)]('任务：'+_0x160d1e[_0x697fd3][_0x4dd1d3(0x240)]),_0x160d1e[_0x697fd3][_0x4dd1d3(0x1dc)]<_0x160d1e[_0x697fd3][_0x4dd1d3(0x1ce)]?(console[_0x4dd1d3(0x1e2)](_0x4dd1d3(0x1ca)+_0x160d1e[_0x697fd3]['completeNum']+'/'+_0x160d1e[_0x697fd3][_0x4dd1d3(0x1ce)]),console['log'](_0x4dd1d3(0x1ee)),await kqrw(_0x160d1e[_0x697fd3][_0x4dd1d3(0x1cd)],_0x160d1e[_0x697fd3]['totalNum']-_0x160d1e[_0x697fd3][_0x4dd1d3(0x1dc)]),await $[_0x4dd1d3(0x214)](0x3e8)):console[_0x4dd1d3(0x1e2)]('已完成');}}catch(_0x1100ee){$[_0x4dd1d3(0x20c)](_0x1100ee,_0x148aa1);}finally{_0x570add();}},0x0);});}function kqrw(_0x49a99c,_0x33d52f){return new Promise(_0x2d61a2=>{const _0x75bb94=_0x4a45;let _0x454457={'url':_0x75bb94(0x205)+deviceid+_0x75bb94(0x1d9),'body':_0x75bb94(0x1cb)+uid+_0x75bb94(0x21b)+_0x49a99c,'headers':{'Content-Type':_0x75bb94(0x233)}};$[_0x75bb94(0x234)](_0x454457,async(_0x22e2c2,_0x5334ba,_0x29dc9)=>{const _0x587989=_0x75bb94;try{result=JSON['parse'](_0x29dc9);if(result['returncode']==0x0){await splist(),await $[_0x587989(0x214)](0x3e8);let _0x136592=0x0;do{_0x49a99c==0x1&&(await ksp(),_0x136592++,await $[_0x587989(0x214)](0x3e8)),_0x49a99c==0x78&&(await dzsp(_0x136592),_0x136592++,await $[_0x587989(0x214)](0x3e8)),_0x49a99c==0x79&&(await fbpl(_0x136592),_0x136592++,await $[_0x587989(0x214)](0xbb8));}while(_0x136592<_0x33d52f);}else console[_0x587989(0x1e2)](_0x587989(0x20d));}catch(_0x2ec532){$[_0x587989(0x20c)](_0x2ec532,_0x5334ba);}finally{_0x2d61a2();}},0x0);});}function _0x4a45(_0xc12c74,_0x1a48d4){const _0x45f787=_0x45f7();return _0x4a45=function(_0x4a4536,_0x3939a1){_0x4a4536=_0x4a4536-0x1c0;let _0x131de8=_0x45f787[_0x4a4536];return _0x131de8;},_0x4a45(_0xc12c74,_0x1a48d4);}i;function dzsp(_0x1bbc14){return new Promise(_0x46988d=>{const _0x32e381=_0x4a45;let _0x5579c7={'url':'https://newvideo.autohome.com.cn/api/like/dolike','body':_0x32e381(0x228)+deviceid+_0x32e381(0x1e9)+uticket+'&vid='+sp_list[_0x1bbc14]['id'],'headers':{'Content-Type':_0x32e381(0x233)}};$[_0x32e381(0x234)](_0x5579c7,async(_0x18813d,_0x484388,_0x3c3c0c)=>{const _0x390ce9=_0x32e381;try{result=JSON['parse'](_0x3c3c0c),console[_0x390ce9(0x1e2)]('点赞：'+result['message']);}catch(_0x1118d4){$[_0x390ce9(0x20c)](_0x1118d4,_0x484388);}finally{_0x46988d();}},0x0);});}function daka(){return new Promise(_0x3d6b8e=>{const _0x2645c4=_0x4a45;let _0x5bf258={'url':_0x2645c4(0x1f4),'body':_0x2645c4(0x1d2)+uticket,'headers':{'Content-Type':_0x2645c4(0x233)}};$[_0x2645c4(0x234)](_0x5bf258,async(_0x134faf,_0x300a0a,_0x190a6c)=>{const _0x1b8929=_0x2645c4;try{result=JSON['parse'](_0x190a6c),console[_0x1b8929(0x1e2)]('签到：'+result['message']);}catch(_0x365105){$[_0x1b8929(0x20c)](_0x365105,_0x300a0a);}finally{_0x3d6b8e();}},0x0);});}function splist(){return new Promise(_0x34540c=>{const _0x2e56a5=_0x4a45;let _0x529273={'url':_0x2e56a5(0x1c0)};$[_0x2e56a5(0x218)](_0x529273,async(_0x362b3d,_0x1f93d2,_0x5aa58e)=>{const _0x3f88d3=_0x2e56a5;try{result=JSON['parse'](_0x5aa58e),result['returncode']==0x0&&console[_0x3f88d3(0x1e2)]('获取视频列表成功！'),sp_list=result[_0x3f88d3(0x268)];}catch(_0x3ade16){$['logErr'](_0x3ade16,_0x1f93d2);}finally{_0x34540c();}},0x0);});}function fbpl(_0x10adb5){return new Promise(_0x1c5f8f=>{const _0x3a98a6=_0x4a45;let _0x2b2c31={'url':'https://newvideo.autohome.com.cn/api/comment/add','body':_0x3a98a6(0x228)+deviceid+_0x3a98a6(0x259)+rcontent[_0x10adb5]+_0x3a98a6(0x230)+uticket+_0x3a98a6(0x1eb)+sp_list[_0x10adb5]['id'],'headers':{'Content-Type':_0x3a98a6(0x233)}};$[_0x3a98a6(0x234)](_0x2b2c31,async(_0x2b3b7c,_0x5cacdb,_0x4c1c9d)=>{const _0x27b383=_0x3a98a6;try{result=JSON[_0x27b383(0x23e)](_0x4c1c9d),console['log'](_0x27b383(0x1d7)+result[_0x27b383(0x211)]);}catch(_0xbb90bd){$[_0x27b383(0x20c)](_0xbb90bd,_0x5cacdb);}finally{_0x1c5f8f();}},0x0);});}function ksp(){return new Promise(_0xefa7fa=>{const _0x33ba46=_0x4a45;let _0x3dea42={'url':_0x33ba46(0x1c6),'body':_0x33ba46(0x23f)+deviceid+_0x33ba46(0x1df)+uid+_0x33ba46(0x226),'headers':{'Content-Type':_0x33ba46(0x233)}};$[_0x33ba46(0x234)](_0x3dea42,async(_0x144a8c,_0x1ab943,_0x3c7172)=>{const _0x41eb95=_0x33ba46;try{result=JSON[_0x41eb95(0x23e)](_0x3c7172),console[_0x41eb95(0x1e2)](_0x41eb95(0x248)+result['message']);}catch(_0x460fb2){$[_0x41eb95(0x20c)](_0x460fb2,_0x1ab943);}finally{_0xefa7fa();}},0x0);});}function Env(_0x22318b,_0x5b2dcd){const _0x3a7557=_0xeb6c71;class _0x4b8224{constructor(_0x1bbb4a){this['env']=_0x1bbb4a;}['send'](_0x4c92ba,_0x4b4347='GET'){const _0x21aa7a=_0x4a45;_0x4c92ba='string'==typeof _0x4c92ba?{'url':_0x4c92ba}:_0x4c92ba;let _0x4b2009=this[_0x21aa7a(0x218)];return _0x21aa7a(0x20a)===_0x4b4347&&(_0x4b2009=this['post']),new Promise((_0x24c519,_0x2cf6f3)=>{const _0x3743c5=_0x21aa7a;_0x4b2009[_0x3743c5(0x1f9)](this,_0x4c92ba,(_0x2d5aeb,_0x481c31,_0x41be40)=>{_0x2d5aeb?_0x2cf6f3(_0x2d5aeb):_0x24c519(_0x481c31);});});}['get'](_0x513307){const _0x2fb870=_0x4a45;return this['send'][_0x2fb870(0x1f9)](this[_0x2fb870(0x25f)],_0x513307);}['post'](_0x490f41){const _0x2a53fb=_0x4a45;return this[_0x2a53fb(0x20b)][_0x2a53fb(0x1f9)](this[_0x2a53fb(0x25f)],_0x490f41,'POST');}}return new class{constructor(_0x12767f,_0x42a4d8){const _0x577805=_0x4a45;this[_0x577805(0x1cc)]=_0x12767f,this[_0x577805(0x217)]=new _0x4b8224(this),this[_0x577805(0x1c7)]=null,this[_0x577805(0x23c)]=_0x577805(0x262),this[_0x577805(0x24e)]=[],this[_0x577805(0x1c8)]=!0x1,this[_0x577805(0x21f)]=!0x1,this[_0x577805(0x261)]='\x0a',this['encoding']=_0x577805(0x1ff),this['startTime']=new Date()['getTime'](),Object[_0x577805(0x208)](this,_0x42a4d8),this[_0x577805(0x1e2)]('','🔔'+this[_0x577805(0x1cc)]+_0x577805(0x26e));}[_0x3a7557(0x1ef)](){const _0x580703=_0x3a7557;return _0x580703(0x22f)!=typeof module&&!!module[_0x580703(0x210)];}[_0x3a7557(0x20e)](){const _0x147768=_0x3a7557;return _0x147768(0x22f)!=typeof $task;}[_0x3a7557(0x224)](){const _0x534e6d=_0x3a7557;return _0x534e6d(0x22f)!=typeof $httpClient&&_0x534e6d(0x22f)==typeof $loon;}[_0x3a7557(0x245)](){const _0x28f3a7=_0x3a7557;return _0x28f3a7(0x22f)!=typeof $loon;}['isShadowrocket'](){const _0x1f3ac4=_0x3a7557;return _0x1f3ac4(0x22f)!=typeof $rocket;}['toObj'](_0x393b8e,_0x2dfab5=null){const _0x42ac19=_0x3a7557;try{return JSON[_0x42ac19(0x23e)](_0x393b8e);}catch{return _0x2dfab5;}}[_0x3a7557(0x26d)](_0x505a97,_0x572680=null){try{return JSON['stringify'](_0x505a97);}catch{return _0x572680;}}[_0x3a7557(0x1c9)](_0x844daa,_0x2afdb8){const _0x11a4ea=_0x3a7557;let _0x22d298=_0x2afdb8;const _0xb4bfea=this[_0x11a4ea(0x238)](_0x844daa);if(_0xb4bfea)try{_0x22d298=JSON[_0x11a4ea(0x23e)](this[_0x11a4ea(0x238)](_0x844daa));}catch{}return _0x22d298;}[_0x3a7557(0x1f0)](_0x5da474,_0x6da03b){const _0x1af967=_0x3a7557;try{return this[_0x1af967(0x212)](JSON['stringify'](_0x5da474),_0x6da03b);}catch{return!0x1;}}[_0x3a7557(0x22e)](_0x251fab){return new Promise(_0x3c6bd6=>{const _0x63b6a5=_0x4a45;this[_0x63b6a5(0x218)]({'url':_0x251fab},(_0x50c8d5,_0x1f3aaa,_0x53ddc2)=>_0x3c6bd6(_0x53ddc2));});}[_0x3a7557(0x213)](_0x3a6561,_0x2b0366){const _0x3513dd=_0x3a7557;return new Promise(_0xf9e812=>{const _0x17b946=_0x4a45;let _0x863c43=this[_0x17b946(0x238)](_0x17b946(0x227));_0x863c43=_0x863c43?_0x863c43[_0x17b946(0x26b)](/\n/g,'')[_0x17b946(0x1fd)]():_0x863c43;let _0x31cbf2=this[_0x17b946(0x238)](_0x17b946(0x232));_0x31cbf2=_0x31cbf2?0x1*_0x31cbf2:0x14,_0x31cbf2=_0x2b0366&&_0x2b0366['timeout']?_0x2b0366[_0x17b946(0x1dd)]:_0x31cbf2;const [_0x3f3a50,_0x244b18]=_0x863c43['split']('@'),_0x5b289c={'url':_0x17b946(0x1f6)+_0x244b18+_0x17b946(0x21e),'body':{'script_text':_0x3a6561,'mock_type':_0x17b946(0x246),'timeout':_0x31cbf2},'headers':{'X-Key':_0x3f3a50,'Accept':_0x17b946(0x1d5)}};this['post'](_0x5b289c,(_0x5c5dcf,_0x9d48d,_0x45b55e)=>_0xf9e812(_0x45b55e));})['catch'](_0x5bd758=>this[_0x3513dd(0x20c)](_0x5bd758));}[_0x3a7557(0x1c5)](){const _0x58b4bd=_0x3a7557;if(!this['isNode']())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this[_0x58b4bd(0x1ec)]?this[_0x58b4bd(0x1ec)]:require(_0x58b4bd(0x1ec));const _0x281b0=this[_0x58b4bd(0x1ec)][_0x58b4bd(0x22a)](this[_0x58b4bd(0x23c)]),_0xdc4da7=this[_0x58b4bd(0x1ec)][_0x58b4bd(0x22a)](process[_0x58b4bd(0x263)](),this[_0x58b4bd(0x23c)]),_0x3c15e7=this['fs']['existsSync'](_0x281b0),_0x574cfd=!_0x3c15e7&&this['fs'][_0x58b4bd(0x23d)](_0xdc4da7);if(!_0x3c15e7&&!_0x574cfd)return{};{const _0x1b4b85=_0x3c15e7?_0x281b0:_0xdc4da7;try{return JSON['parse'](this['fs'][_0x58b4bd(0x1c2)](_0x1b4b85));}catch(_0x49a7a7){return{};}}}}['writedata'](){const _0x4ea41d=_0x3a7557;if(this['isNode']()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x4ea41d(0x1ec)]=this[_0x4ea41d(0x1ec)]?this[_0x4ea41d(0x1ec)]:require(_0x4ea41d(0x1ec));const _0x473789=this[_0x4ea41d(0x1ec)][_0x4ea41d(0x22a)](this['dataFile']),_0x46e7af=this[_0x4ea41d(0x1ec)][_0x4ea41d(0x22a)](process['cwd'](),this[_0x4ea41d(0x23c)]),_0x69ffc=this['fs'][_0x4ea41d(0x23d)](_0x473789),_0x379770=!_0x69ffc&&this['fs'][_0x4ea41d(0x23d)](_0x46e7af),_0x22e40f=JSON['stringify'](this[_0x4ea41d(0x1c7)]);_0x69ffc?this['fs']['writeFileSync'](_0x473789,_0x22e40f):_0x379770?this['fs']['writeFileSync'](_0x46e7af,_0x22e40f):this['fs'][_0x4ea41d(0x1e1)](_0x473789,_0x22e40f);}}['lodash_get'](_0x362cd1,_0x14fa42,_0x14e0ff){const _0x23e057=_0x3a7557,_0xdd8eed=_0x14fa42[_0x23e057(0x26b)](/\[(\d+)\]/g,_0x23e057(0x200))['split']('.');let _0x9f6373=_0x362cd1;for(const _0xa42728 of _0xdd8eed)if(_0x9f6373=Object(_0x9f6373)[_0xa42728],void 0x0===_0x9f6373)return _0x14e0ff;return _0x9f6373;}[_0x3a7557(0x1e0)](_0x537772,_0x250d3d,_0x285830){const _0x5229ae=_0x3a7557;return Object(_0x537772)!==_0x537772?_0x537772:(Array[_0x5229ae(0x1c1)](_0x250d3d)||(_0x250d3d=_0x250d3d['toString']()[_0x5229ae(0x1d4)](/[^.[\]]+/g)||[]),_0x250d3d[_0x5229ae(0x1f8)](0x0,-0x1)[_0x5229ae(0x24d)]((_0xdd6bf4,_0x17c0ec,_0x17fbf9)=>Object(_0xdd6bf4[_0x17c0ec])===_0xdd6bf4[_0x17c0ec]?_0xdd6bf4[_0x17c0ec]:_0xdd6bf4[_0x17c0ec]=Math[_0x5229ae(0x1d8)](_0x250d3d[_0x17fbf9+0x1])>>0x0==+_0x250d3d[_0x17fbf9+0x1]?[]:{},_0x537772)[_0x250d3d[_0x250d3d['length']-0x1]]=_0x285830,_0x537772);}['getdata'](_0x4c3fc2){const _0x47b21b=_0x3a7557;let _0x50a903=this[_0x47b21b(0x24a)](_0x4c3fc2);if(/^@/[_0x47b21b(0x25c)](_0x4c3fc2)){const [,_0x4dec4f,_0x1bfc8c]=/^@(.*?)\.(.*?)$/[_0x47b21b(0x1d1)](_0x4c3fc2),_0x37916e=_0x4dec4f?this[_0x47b21b(0x24a)](_0x4dec4f):'';if(_0x37916e)try{const _0x424065=JSON[_0x47b21b(0x23e)](_0x37916e);_0x50a903=_0x424065?this[_0x47b21b(0x1da)](_0x424065,_0x1bfc8c,''):_0x50a903;}catch(_0x51119a){_0x50a903='';}}return _0x50a903;}[_0x3a7557(0x212)](_0x3eef14,_0x1922a4){const _0x3b2a73=_0x3a7557;let _0x10bf39=!0x1;if(/^@/['test'](_0x1922a4)){const [,_0x27f270,_0x14f8a4]=/^@(.*?)\.(.*?)$/['exec'](_0x1922a4),_0x40e398=this[_0x3b2a73(0x24a)](_0x27f270),_0x231dcf=_0x27f270?'null'===_0x40e398?null:_0x40e398||'{}':'{}';try{const _0x289f99=JSON[_0x3b2a73(0x23e)](_0x231dcf);this[_0x3b2a73(0x1e0)](_0x289f99,_0x14f8a4,_0x3eef14),_0x10bf39=this[_0x3b2a73(0x251)](JSON[_0x3b2a73(0x1c4)](_0x289f99),_0x27f270);}catch(_0x1a7ee0){const _0x49c29f={};this[_0x3b2a73(0x1e0)](_0x49c29f,_0x14f8a4,_0x3eef14),_0x10bf39=this['setval'](JSON['stringify'](_0x49c29f),_0x27f270);}}else _0x10bf39=this[_0x3b2a73(0x251)](_0x3eef14,_0x1922a4);return _0x10bf39;}[_0x3a7557(0x24a)](_0x57320c){const _0x344393=_0x3a7557;return this[_0x344393(0x224)]()||this[_0x344393(0x245)]()?$persistentStore[_0x344393(0x270)](_0x57320c):this[_0x344393(0x20e)]()?$prefs['valueForKey'](_0x57320c):this[_0x344393(0x1ef)]()?(this[_0x344393(0x1c7)]=this[_0x344393(0x1c5)](),this[_0x344393(0x1c7)][_0x57320c]):this[_0x344393(0x1c7)]&&this[_0x344393(0x1c7)][_0x57320c]||null;}[_0x3a7557(0x251)](_0x59bd29,_0x4cdd6e){const _0x14e810=_0x3a7557;return this['isSurge']()||this['isLoon']()?$persistentStore[_0x14e810(0x258)](_0x59bd29,_0x4cdd6e):this[_0x14e810(0x20e)]()?$prefs[_0x14e810(0x25b)](_0x59bd29,_0x4cdd6e):this[_0x14e810(0x1ef)]()?(this[_0x14e810(0x1c7)]=this[_0x14e810(0x1c5)](),this[_0x14e810(0x1c7)][_0x4cdd6e]=_0x59bd29,this[_0x14e810(0x26a)](),!0x0):this[_0x14e810(0x1c7)]&&this[_0x14e810(0x1c7)][_0x4cdd6e]||null;}[_0x3a7557(0x1fe)](_0x344527){const _0x2fc84c=_0x3a7557;this[_0x2fc84c(0x26f)]=this[_0x2fc84c(0x26f)]?this[_0x2fc84c(0x26f)]:require(_0x2fc84c(0x26f)),this[_0x2fc84c(0x1f2)]=this[_0x2fc84c(0x1f2)]?this['cktough']:require(_0x2fc84c(0x1e4)),this[_0x2fc84c(0x215)]=this['ckjar']?this['ckjar']:new this[(_0x2fc84c(0x1f2))][(_0x2fc84c(0x250))](),_0x344527&&(_0x344527[_0x2fc84c(0x239)]=_0x344527[_0x2fc84c(0x239)]?_0x344527[_0x2fc84c(0x239)]:{},void 0x0===_0x344527[_0x2fc84c(0x239)][_0x2fc84c(0x202)]&&void 0x0===_0x344527[_0x2fc84c(0x20f)]&&(_0x344527['cookieJar']=this[_0x2fc84c(0x215)]));}['get'](_0x9c71f2,_0x1e0496=()=>{}){const _0x6d7a36=_0x3a7557;if(_0x9c71f2[_0x6d7a36(0x239)]&&(delete _0x9c71f2['headers']['Content-Type'],delete _0x9c71f2[_0x6d7a36(0x239)][_0x6d7a36(0x24b)]),this['isSurge']()||this['isLoon']())this['isSurge']()&&this['isNeedRewrite']&&(_0x9c71f2[_0x6d7a36(0x239)]=_0x9c71f2[_0x6d7a36(0x239)]||{},Object[_0x6d7a36(0x208)](_0x9c71f2['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x6d7a36(0x218)](_0x9c71f2,(_0x230a85,_0x57d529,_0x51bc64)=>{const _0x5eb90c=_0x6d7a36;!_0x230a85&&_0x57d529&&(_0x57d529[_0x5eb90c(0x237)]=_0x51bc64,_0x57d529[_0x5eb90c(0x1f3)]=_0x57d529[_0x5eb90c(0x25a)]),_0x1e0496(_0x230a85,_0x57d529,_0x51bc64);});else{if(this[_0x6d7a36(0x20e)]())this[_0x6d7a36(0x21f)]&&(_0x9c71f2[_0x6d7a36(0x273)]=_0x9c71f2[_0x6d7a36(0x273)]||{},Object[_0x6d7a36(0x208)](_0x9c71f2[_0x6d7a36(0x273)],{'hints':!0x1})),$task[_0x6d7a36(0x242)](_0x9c71f2)[_0x6d7a36(0x1e6)](_0x37cf29=>{const {statusCode:_0x206bc7,statusCode:_0x51cabf,headers:_0x22fd02,body:_0x31c6f9}=_0x37cf29;_0x1e0496(null,{'status':_0x206bc7,'statusCode':_0x51cabf,'headers':_0x22fd02,'body':_0x31c6f9},_0x31c6f9);},_0x3eeb29=>_0x1e0496(_0x3eeb29));else{if(this[_0x6d7a36(0x1ef)]()){let _0xaac7b8=require('iconv-lite');this['initGotEnv'](_0x9c71f2),this['got'](_0x9c71f2)['on'](_0x6d7a36(0x25e),(_0x3efcfc,_0x286564)=>{const _0x2e1a5a=_0x6d7a36;try{if(_0x3efcfc[_0x2e1a5a(0x239)][_0x2e1a5a(0x26c)]){const _0x140c77=_0x3efcfc[_0x2e1a5a(0x239)][_0x2e1a5a(0x26c)][_0x2e1a5a(0x220)](this[_0x2e1a5a(0x1f2)][_0x2e1a5a(0x202)]['parse'])[_0x2e1a5a(0x256)]();_0x140c77&&this[_0x2e1a5a(0x215)][_0x2e1a5a(0x266)](_0x140c77,null),_0x286564[_0x2e1a5a(0x20f)]=this['ckjar'];}}catch(_0x5ae082){this['logErr'](_0x5ae082);}})[_0x6d7a36(0x1e6)](_0x3ccf6d=>{const _0x307216=_0x6d7a36,{statusCode:_0x8ee48e,statusCode:_0x38eb6a,headers:_0x576b4b,rawBody:_0x3c7304}=_0x3ccf6d;_0x1e0496(null,{'status':_0x8ee48e,'statusCode':_0x38eb6a,'headers':_0x576b4b,'rawBody':_0x3c7304},_0xaac7b8[_0x307216(0x244)](_0x3c7304,this['encoding']));},_0x4d940a=>{const _0x1de5d1=_0x6d7a36,{message:_0xea4269,response:_0x51a40d}=_0x4d940a;_0x1e0496(_0xea4269,_0x51a40d,_0x51a40d&&_0xaac7b8[_0x1de5d1(0x244)](_0x51a40d[_0x1de5d1(0x25d)],this[_0x1de5d1(0x1f5)]));});}}}}[_0x3a7557(0x234)](_0x27ac34,_0x4f676a=()=>{}){const _0x1bf27d=_0x3a7557,_0x58a8ca=_0x27ac34[_0x1bf27d(0x252)]?_0x27ac34[_0x1bf27d(0x252)]['toLocaleLowerCase']():_0x1bf27d(0x234);if(_0x27ac34['body']&&_0x27ac34[_0x1bf27d(0x239)]&&!_0x27ac34['headers']['Content-Type']&&(_0x27ac34[_0x1bf27d(0x239)][_0x1bf27d(0x1db)]=_0x1bf27d(0x233)),_0x27ac34[_0x1bf27d(0x239)]&&delete _0x27ac34[_0x1bf27d(0x239)][_0x1bf27d(0x24b)],this[_0x1bf27d(0x224)]()||this[_0x1bf27d(0x245)]())this['isSurge']()&&this['isNeedRewrite']&&(_0x27ac34['headers']=_0x27ac34[_0x1bf27d(0x239)]||{},Object['assign'](_0x27ac34[_0x1bf27d(0x239)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x58a8ca](_0x27ac34,(_0x52136e,_0x4f5f71,_0x3482ce)=>{const _0x3b92cd=_0x1bf27d;!_0x52136e&&_0x4f5f71&&(_0x4f5f71[_0x3b92cd(0x237)]=_0x3482ce,_0x4f5f71[_0x3b92cd(0x1f3)]=_0x4f5f71[_0x3b92cd(0x25a)]),_0x4f676a(_0x52136e,_0x4f5f71,_0x3482ce);});else{if(this[_0x1bf27d(0x20e)]())_0x27ac34['method']=_0x58a8ca,this[_0x1bf27d(0x21f)]&&(_0x27ac34[_0x1bf27d(0x273)]=_0x27ac34['opts']||{},Object[_0x1bf27d(0x208)](_0x27ac34['opts'],{'hints':!0x1})),$task[_0x1bf27d(0x242)](_0x27ac34)['then'](_0x5b4820=>{const {statusCode:_0x52911e,statusCode:_0x13fed5,headers:_0x36061f,body:_0x32358f}=_0x5b4820;_0x4f676a(null,{'status':_0x52911e,'statusCode':_0x13fed5,'headers':_0x36061f,'body':_0x32358f},_0x32358f);},_0xa45665=>_0x4f676a(_0xa45665));else{if(this['isNode']()){let _0x4f5bf1=require(_0x1bf27d(0x21d));this['initGotEnv'](_0x27ac34);const {url:_0x3369f2,..._0x519c4b}=_0x27ac34;this[_0x1bf27d(0x26f)][_0x58a8ca](_0x3369f2,_0x519c4b)['then'](_0x5322e2=>{const _0x174444=_0x1bf27d,{statusCode:_0x1970d3,statusCode:_0x2e5958,headers:_0x351095,rawBody:_0x28c039}=_0x5322e2;_0x4f676a(null,{'status':_0x1970d3,'statusCode':_0x2e5958,'headers':_0x351095,'rawBody':_0x28c039},_0x4f5bf1[_0x174444(0x244)](_0x28c039,this[_0x174444(0x1f5)]));},_0xf238bc=>{const _0x47a655=_0x1bf27d,{message:_0x39d9e4,response:_0x2f2018}=_0xf238bc;_0x4f676a(_0x39d9e4,_0x2f2018,_0x2f2018&&_0x4f5bf1[_0x47a655(0x244)](_0x2f2018['rawBody'],this[_0x47a655(0x1f5)]));});}}}}['time'](_0x5d9a1b,_0xba3e85=null){const _0x25189e=_0x3a7557,_0x4dd0e3=_0xba3e85?new Date(_0xba3e85):new Date();let _0x54d9cb={'M+':_0x4dd0e3[_0x25189e(0x203)]()+0x1,'d+':_0x4dd0e3['getDate'](),'H+':_0x4dd0e3['getHours'](),'m+':_0x4dd0e3['getMinutes'](),'s+':_0x4dd0e3[_0x25189e(0x209)](),'q+':Math[_0x25189e(0x225)]((_0x4dd0e3[_0x25189e(0x203)]()+0x3)/0x3),'S':_0x4dd0e3['getMilliseconds']()};/(y+)/[_0x25189e(0x25c)](_0x5d9a1b)&&(_0x5d9a1b=_0x5d9a1b['replace'](RegExp['$1'],(_0x4dd0e3[_0x25189e(0x222)]()+'')['substr'](0x4-RegExp['$1'][_0x25189e(0x204)])));for(let _0x3f4eb2 in _0x54d9cb)new RegExp('('+_0x3f4eb2+')')['test'](_0x5d9a1b)&&(_0x5d9a1b=_0x5d9a1b['replace'](RegExp['$1'],0x1==RegExp['$1'][_0x25189e(0x204)]?_0x54d9cb[_0x3f4eb2]:('00'+_0x54d9cb[_0x3f4eb2])[_0x25189e(0x247)]((''+_0x54d9cb[_0x3f4eb2])['length'])));return _0x5d9a1b;}['msg'](_0x4584d0=_0x22318b,_0x35e25c='',_0x8c8454='',_0x431df5){const _0x4780d8=_0x3a7557,_0x36c642=_0x17c741=>{const _0x20c643=_0x4a45;if(!_0x17c741)return _0x17c741;if('string'==typeof _0x17c741)return this['isLoon']()?_0x17c741:this['isQuanX']()?{'open-url':_0x17c741}:this[_0x20c643(0x224)]()?{'url':_0x17c741}:void 0x0;if(_0x20c643(0x231)==typeof _0x17c741){if(this[_0x20c643(0x245)]()){let _0x3abb7d=_0x17c741[_0x20c643(0x223)]||_0x17c741[_0x20c643(0x1e8)]||_0x17c741['open-url'],_0x1150ba=_0x17c741[_0x20c643(0x207)]||_0x17c741[_0x20c643(0x1f7)];return{'openUrl':_0x3abb7d,'mediaUrl':_0x1150ba};}if(this['isQuanX']()){let _0x514573=_0x17c741['open-url']||_0x17c741[_0x20c643(0x1e8)]||_0x17c741['openUrl'],_0x303c16=_0x17c741[_0x20c643(0x1f7)]||_0x17c741[_0x20c643(0x207)];return{'open-url':_0x514573,'media-url':_0x303c16};}if(this['isSurge']()){let _0x481312=_0x17c741[_0x20c643(0x1e8)]||_0x17c741['openUrl']||_0x17c741['open-url'];return{'url':_0x481312};}}};if(this[_0x4780d8(0x1c8)]||(this[_0x4780d8(0x224)]()||this[_0x4780d8(0x245)]()?$notification[_0x4780d8(0x234)](_0x4584d0,_0x35e25c,_0x8c8454,_0x36c642(_0x431df5)):this[_0x4780d8(0x20e)]()&&$notify(_0x4584d0,_0x35e25c,_0x8c8454,_0x36c642(_0x431df5))),!this[_0x4780d8(0x255)]){let _0x400801=['',_0x4780d8(0x1c3)];_0x400801[_0x4780d8(0x1cf)](_0x4584d0),_0x35e25c&&_0x400801[_0x4780d8(0x1cf)](_0x35e25c),_0x8c8454&&_0x400801[_0x4780d8(0x1cf)](_0x8c8454),console['log'](_0x400801['join']('\x0a')),this[_0x4780d8(0x24e)]=this['logs'][_0x4780d8(0x1d3)](_0x400801);}}[_0x3a7557(0x1e2)](..._0x1414ee){const _0x4bee39=_0x3a7557;_0x1414ee[_0x4bee39(0x204)]>0x0&&(this['logs']=[...this[_0x4bee39(0x24e)],..._0x1414ee]),console[_0x4bee39(0x1e2)](_0x1414ee[_0x4bee39(0x254)](this[_0x4bee39(0x261)]));}[_0x3a7557(0x20c)](_0x599dbf,_0x4241cc){const _0x30b4c8=_0x3a7557,_0x579bc0=!this[_0x30b4c8(0x224)]()&&!this['isQuanX']()&&!this[_0x30b4c8(0x245)]();_0x579bc0?this[_0x30b4c8(0x1e2)]('','❗️'+this[_0x30b4c8(0x1cc)]+_0x30b4c8(0x1fb),_0x599dbf['stack']):this[_0x30b4c8(0x1e2)]('','❗️'+this[_0x30b4c8(0x1cc)]+_0x30b4c8(0x1fb),_0x599dbf);}[_0x3a7557(0x214)](_0x15d939){return new Promise(_0x1025f0=>setTimeout(_0x1025f0,_0x15d939));}[_0x3a7557(0x1de)](_0x3713b3={}){const _0x1a593f=_0x3a7557,_0x37593f=new Date()[_0x1a593f(0x21c)](),_0x4b7a7c=(_0x37593f-this[_0x1a593f(0x1f1)])/0x3e8;this[_0x1a593f(0x1e2)]('','🔔'+this[_0x1a593f(0x1cc)]+_0x1a593f(0x1fa)+_0x4b7a7c+'\x20秒'),this[_0x1a593f(0x1e2)](),(this[_0x1a593f(0x224)]()||this[_0x1a593f(0x20e)]()||this[_0x1a593f(0x245)]())&&$done(_0x3713b3);}}(_0x22318b,_0x5b2dcd);}
