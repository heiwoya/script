/*
  下载链接：https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx592b7bf2a9f7f003&redirect_uri=https://v3.sdk.haowusong.com/api/auth/wechat/sharelogin&response_type=code&scope=snsapi_userinfo&state=AAABPHAA,dawbox-android#wechat_redirect
[rewrite_local]
#都爱玩
https://v3.sdk.haowusong.com/api/box/wallet/info url script-request-header https://ghproxy.com/https://github.com/LubooC/Script/blob/main/daw.js
[MITM]
hostname = v3.sdk.haowusong.com
#loon
https://v3.sdk.haowusong.com/api/box/wallet/info url script-request-header https://ghproxy.com/https://github.com/LubooC/Script/blob/main/daw.js, requires-body=true, timeout=10, tag=萝卜都爱玩
*/
// [task_local]
//#都爱玩
// 10 0 * * * https://ghproxy.com/https://github.com/LubooC/Script/blob/main/daw.js, tag=都爱玩, enabled=true
const _0x3e7527=_0x16af;(function(_0x26d137,_0x4a0b63){const _0x47b231=_0x16af,_0x868f0f=_0x26d137();while(!![]){try{const _0x40f919=-parseInt(_0x47b231(0x153))/0x1+parseInt(_0x47b231(0x169))/0x2+parseInt(_0x47b231(0x15a))/0x3+parseInt(_0x47b231(0x1ea))/0x4+parseInt(_0x47b231(0x1b3))/0x5+-parseInt(_0x47b231(0x15c))/0x6*(-parseInt(_0x47b231(0x16d))/0x7)+parseInt(_0x47b231(0x1be))/0x8*(-parseInt(_0x47b231(0x13e))/0x9);if(_0x40f919===_0x4a0b63)break;else _0x868f0f['push'](_0x868f0f['shift']());}catch(_0xe466b5){_0x868f0f['push'](_0x868f0f['shift']());}}}(_0x3ea9,0x4c72c));const $=new Env(_0x3e7527(0x1c3));let status;status=(status=$[_0x3e7527(0x134)](_0x3e7527(0x148))||'1')>0x1?''+status:'';let slckArr=[],dawck=$[_0x3e7527(0x1ec)]()?process['env'][_0x3e7527(0x139)]?process[_0x3e7527(0x150)][_0x3e7527(0x139)]:'':$['getdata'](_0x3e7527(0x139))?$[_0x3e7527(0x1c1)](_0x3e7527(0x139)):'',slcks='';!(async()=>{const _0x21a6f5=_0x3e7527;if(typeof $request!==_0x21a6f5(0x1e8))Get_data();else{if(!$[_0x21a6f5(0x1ec)]()){slckArr[_0x21a6f5(0x1a9)]($[_0x21a6f5(0x1c1)](_0x21a6f5(0x139)));let _0x3d8d03=$[_0x21a6f5(0x134)]('slcount')||'1';for(let _0x7e6d31=0x2;_0x7e6d31<=_0x3d8d03;_0x7e6d31++){slckArr[_0x21a6f5(0x1a9)]($[_0x21a6f5(0x1c1)]('dawck'+_0x7e6d31));}console['log'](_0x21a6f5(0x1c4)+slckArr[_0x21a6f5(0x188)]+'个账号-------------\x0a');for(let _0x4899ff=0x0;_0x4899ff<slckArr[_0x21a6f5(0x188)];_0x4899ff++){slckArr[_0x4899ff]&&(dawck=slckArr[_0x4899ff],$[_0x21a6f5(0x1f0)]=_0x4899ff+0x1,console[_0x21a6f5(0x19f)](_0x21a6f5(0x1a0)+$[_0x21a6f5(0x1f0)]+'】'),await sign(),await dawbox(),await lottery(),await turntable(),await dawbox_put(),$[_0x21a6f5(0x19f)]('------------------任务结束------------------'));}}else{process[_0x21a6f5(0x150)][_0x21a6f5(0x139)]&&process['env'][_0x21a6f5(0x139)][_0x21a6f5(0x18b)]('@')>-0x1?(slckArr=process[_0x21a6f5(0x150)][_0x21a6f5(0x139)][_0x21a6f5(0x1f4)]('@'),console['log']('您选择的是用\x22@\x22隔开\x0a')):slcks=[process['env'][_0x21a6f5(0x139)]];;Object[_0x21a6f5(0x1a3)](slcks)[_0x21a6f5(0x14f)](_0x28f30a=>{const _0x37061a=_0x21a6f5;slcks[_0x28f30a]&&slckArr[_0x37061a(0x1a9)](slcks[_0x28f30a]);}),console[_0x21a6f5(0x19f)]('共'+slckArr[_0x21a6f5(0x188)]+_0x21a6f5(0x1a2));for(let _0x4e8cbe=0x0;_0x4e8cbe<slckArr[_0x21a6f5(0x188)];_0x4e8cbe++){$[_0x21a6f5(0x197)]='',dawck=slckArr[_0x4e8cbe],$['index']=_0x4e8cbe+0x1,console[_0x21a6f5(0x19f)]('\x0a开始【都爱玩\x20'+$['index']+'】'),await sign(),await dawbox(),await lottery(),await turntable(),await dawbox_put(),$[_0x21a6f5(0x19f)]('------------------任务结束------------------');}}}})()[_0x3e7527(0x1eb)](_0x19d09a=>$[_0x3e7527(0x1bf)](_0x19d09a))['finally'](()=>$[_0x3e7527(0x190)]());function Get_data(){const _0xa1e630=_0x3e7527;if($request[_0xa1e630(0x1f1)][_0xa1e630(0x18b)](_0xa1e630(0x184))>-0x1){const _0x53e4b6=$request[_0xa1e630(0x13c)][_0xa1e630(0x196)];if(_0x53e4b6)$[_0xa1e630(0x130)](_0x53e4b6,_0xa1e630(0x139)+status);$[_0xa1e630(0x146)]($[_0xa1e630(0x1cc)],'','都爱玩'+status+_0xa1e630(0x1e7));}}function sign(){return new Promise(_0x5e23a6=>{const _0x3a19f8=_0x16af;let _0x214c14={'url':'https://v3.sdk.haowusong.com/api/box/sign/post','headers':{'Host':'v3.sdk.haowusong.com','Origin':'https://v3.h5.haowusong.com','Accept-Encoding':_0x3a19f8(0x1a8),'Connection':_0x3a19f8(0x14d),'Accept':'application/json,\x20text/plain,\x20*/*','User-Agent':_0x3a19f8(0x16c),'Accept-Language':_0x3a19f8(0x1cf),'Referer':_0x3a19f8(0x176),'token':dawck}};$['post'](_0x214c14,async(_0x1194c2,_0x4f2886,_0x3ea08c)=>{const _0x5bf402=_0x3a19f8;try{result=JSON[_0x5bf402(0x1ac)](_0x3ea08c),result[_0x5bf402(0x147)]==0xc8?$[_0x5bf402(0x19f)](_0x5bf402(0x17c)+result[_0x5bf402(0x12e)][_0x5bf402(0x1b1)]):$['log'](result[_0x5bf402(0x1e0)]);}catch(_0x4e8488){$[_0x5bf402(0x1bf)](_0x4e8488,_0x4f2886);}finally{_0x5e23a6();}},0x0);});}async function dawbox(){return new Promise(_0x47b4b7=>{const _0x2a32de=_0x16af;let _0xeafe35={'url':'https://v3.sdk.haowusong.com/api/channel/integral/pool?channel=dawbox','headers':{'Host':'v3.sdk.haowusong.com','Origin':_0x2a32de(0x13b),'Accept-Encoding':_0x2a32de(0x1a8),'Connection':'keep-alive','Accept':_0x2a32de(0x1d0),'User-Agent':_0x2a32de(0x16c),'Accept-Language':_0x2a32de(0x1cf),'Referer':'https://v3.h5.haowusong.com/box/sdk/shop?channel=dawbox','token':dawck}};$[_0x2a32de(0x17e)](_0xeafe35,async(_0x558cf7,_0x3cf16a,_0xb5d2d6)=>{const _0x2feb51=_0x2a32de;try{result=JSON['parse'](_0xb5d2d6);if(result[_0x2feb51(0x147)]==0xc8){let _0x2f4ded=result[_0x2feb51(0x12e)][_0x2feb51(0x17a)][_0x2feb51(0x19e)][0x0];$[_0x2feb51(0x19f)](_0x2feb51(0x1e5)+_0x2f4ded['description']),$[_0x2feb51(0x19f)](_0x2feb51(0x170)+_0x2f4ded[_0x2feb51(0x1b7)]+'/'+_0x2f4ded['contribution_num']);if(_0x2f4ded[_0x2feb51(0x1b7)]<_0x2f4ded[_0x2feb51(0x1bc)]){console[_0x2feb51(0x19f)]('去完成');let _0xf8853=_0x2f4ded[_0x2feb51(0x1bc)]-_0x2f4ded[_0x2feb51(0x1b7)],_0x353068=0x0;do{console['log'](_0x2feb51(0x1db)),_0x353068!=0x0&&(console[_0x2feb51(0x19f)](_0x2feb51(0x1ef)),await $[_0x2feb51(0x19b)](0xee48)),await vedioTask(_0x2f4ded[_0x2feb51(0x1b0)]),console['log'](_0x2feb51(0x18c)),await $[_0x2feb51(0x19b)](0xee48),_0x353068++;}while(_0x353068<_0xf8853);}}else $[_0x2feb51(0x19f)](result[_0x2feb51(0x1e0)]);}catch(_0x3ee51c){$['logErr'](_0x3ee51c,_0x3cf16a);}finally{_0x47b4b7();}},0x0);});}function vedioTask(_0x5f526c){return new Promise(_0x88e513=>{const _0x4e0bc8=_0x16af;let _0x9ce84f={'url':'https://v3.sdk.haowusong.com/api/channel/integral/task/receive','body':_0x4e0bc8(0x1b9),'headers':{'Host':_0x4e0bc8(0x138),'Content-Type':_0x4e0bc8(0x183),'Origin':_0x4e0bc8(0x13b),'Accept-Language':_0x4e0bc8(0x1cf),'Accept-Encoding':_0x4e0bc8(0x1a8),'Connection':_0x4e0bc8(0x14d),'Accept':'*/*','User-Agent':_0x4e0bc8(0x16c),'Referer':_0x4e0bc8(0x171),'token':dawck,'Content-Length':'33'}};$[_0x4e0bc8(0x145)](_0x9ce84f,async(_0x193eba,_0x2dc966,_0x2b10f2)=>{const _0x49d706=_0x4e0bc8;try{result=JSON[_0x49d706(0x1ac)](_0x2b10f2),result['code']==0xc8?console['log']('任务成功'):console['log'](_0x49d706(0x1ed)+result[_0x49d706(0x1e0)]);}catch(_0x114fe1){$[_0x49d706(0x1bf)](_0x114fe1,_0x2dc966);}finally{_0x88e513();}},0x0);});}function _0x3ea9(){const _0x5b75ae=['url','object','assign','split','can_video_num','valueForKey','money','timeout','writedata','getTime','data','statusCode','setdata','getMilliseconds','use_video_num','https://servicewechat.com/wxa916993deb35d85d/12/page-','getval','setval','integral_num','gzip,compress,br,deflate','v3.sdk.haowusong.com','dawck','box_credit_num','https://v3.h5.haowusong.com','headers','https://v3.sdk.haowusong.com/api/box/lottery/addnum','8386515TIwDUd','http','map','encoding','getHours','status','substr','post','msg','code','dawckstatus','https://servicewechat.com/wxa916993deb35d85d/12/page-frame.html','==============📣系统通知📣==============','等待30秒~','GET','keep-alive','logSeparator','forEach','env','exports','获得奖励：','47285HPEgvz','getDate','mediaUrl','getMonth','open-url','Content-Type','lottery_num','405645kOCXlo','rawBody','30hISyPG','\x0a---可提现金额：','call','initGotEnv','test','string','setValueForKey','then','去看视频翻10倍奖励~','redirect','method','isSurge','exec','337284FcIhxk','剩余抽奖次数：','can_num','Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148','125769mwemOK','utf-8','opts','当前进度：','https://v3.h5.haowusong.com/box/sdk/fenhongcoin?channel=dawbox','getScript','CookieJar','\x20投分红币】:\x20投入\x20','media-url','https://v3.h5.haowusong.com/box/sdk/shop?channel=dawbox','toLocaleLowerCase','floor','https://v3.sdk.haowusong.com/api/box/lottery/start','tasks','Cookie','签到成功,账户总积分：','join','get','max_video_num','stringify','openUrl','isLoon','application/json','dawbox','application/x-www-form-urlencoded','{\x22channel\x22\x20:\x20\x22dawbox\x22,\x20\x22task_id\x22\x20:\x20\x2254\x22}','\x0a【账号\x20','length','看视频加抽奖次数剩余：','writeFileSync','indexOf','等待60秒冷却时间~','https://v3.sdk.haowusong.com/api/channel/integral/turntable/config?channel=dawbox&task_id=54','现金。','concat','done','write','isQuanX','cktough','existsSync','getMinutes','token','message','body','reduce','path','wait','https://v3.sdk.haowusong.com/api/channel/integral/turntable/video/receive','getSeconds','vedio_task','log','\x0a开始【都爱玩\x20','title','个账号','keys','lodash_set','【积分现金抽奖】\x0a当前资产：','stack','\x20DAB币成功~','gzip,\x20deflate,\x20br','push','getjson','\x20投分红币】:\x20','parse','startTime','等待30秒冷却~','Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20MicroMessenger/8.0.3(0x1800032c)\x20NetType/4G\x20Language/zh_CN','task_id','total_credit_num','set-cookie','1840275gnzHrJ','*/*','https://v3.sdk.haowusong.com/api/channel/integral/turntable/receive','abs','complete_num','loaddata','{\x22task_id\x22:12,\x22channel\x22:\x22dawbox\x22}','dataFile','can_lottery_num','contribution_num','setjson','8ckeCYI','logErr',',\x20结束!\x20🕛\x20','getdata','send','萝卜都爱玩','-------------共','{\x22channel\x22:\x22dawbox\x22,\x22task_id\x22:\x2254\x22}','getFullYear','Content-Length','cwd','pool',',\x20错误!','box.dat','name','toStr','got','zh-cn','application/json,\x20text/plain,\x20*/*','toString','decode','player','resolve','setCookieSync','iconv-lite','replace','任务成功','https://v3.sdk.haowusong.com/api/channel/integral/put?channel=dawbox&num=','isNeedRewrite','开始看视频~','isMuteLog','ckjar','logs','lodash_get','error','isMute','toObj','积分，','去看视频~','任务--','slice','数据获取成功','undefined','https://v3.sdk.haowusong.com/api/channel/integral/turntable/result','2122020UpHmpR','catch','isNode','任务失败:','去看抽奖~','等待60秒看视频~','index'];_0x3ea9=function(){return _0x5b75ae;};return _0x3ea9();}function turntable(){return new Promise(_0x5550bd=>{const _0x404774=_0x16af;let _0x346603={'url':_0x404774(0x18d),'headers':{'Host':_0x404774(0x138),'Connection':'keep-alive','token':dawck,'content-type':'application/json','Accept-Encoding':_0x404774(0x137),'User-Agent':_0x404774(0x1af),'Referer':_0x404774(0x149)}};$[_0x404774(0x17e)](_0x346603,async(_0x2e666b,_0x169cda,_0x1d6743)=>{const _0x2df108=_0x404774;try{result=JSON[_0x2df108(0x1ac)](_0x1d6743);if(result[_0x2df108(0x147)]==0xc8){console['log']('【转盘游戏】');let _0x23d012=0x5-result[_0x2df108(0x12e)]['lottery_num'][_0x2df108(0x1f5)];console[_0x2df108(0x19f)]('看视频加抽奖次数剩余：'+_0x23d012);0x5>result[_0x2df108(0x12e)]['lottery_num'][_0x2df108(0x1f5)]&&(console[_0x2df108(0x19f)](_0x2df108(0x1e4)),await turntable_vedio(),console[_0x2df108(0x19f)](_0x2df108(0x14b)),await $[_0x2df108(0x19b)](0x7530));let _0x4a596f=0xa-result[_0x2df108(0x12e)]['lottery_num'][_0x2df108(0x1bb)];console[_0x2df108(0x19f)](_0x2df108(0x16a)+_0x4a596f),result[_0x2df108(0x12e)][_0x2df108(0x159)][_0x2df108(0x1bb)]<0xa&&(console[_0x2df108(0x19f)](_0x2df108(0x1ee)),await turntable_start(),console[_0x2df108(0x19f)](_0x2df108(0x164)),console[_0x2df108(0x19f)](_0x2df108(0x1ae)),await $['wait'](0x7530),await turntable_receive(),await $[_0x2df108(0x19b)](0xbb8),await turntable());}else console[_0x2df108(0x19f)](_0x2df108(0x1ed)+result['error']);}catch(_0xe5c724){$[_0x2df108(0x1bf)](_0xe5c724,_0x169cda);}finally{_0x5550bd();}},0x0);});}function turntable_start(){return new Promise(_0x5788ac=>{const _0x120101=_0x16af;let _0xf61d90={'url':_0x120101(0x1e9),'rawBody':_0x120101(0x186),'headers':{'Host':_0x120101(0x138),'Connection':_0x120101(0x14d),'token':dawck,'Content-Type':_0x120101(0x183),'Accept-Encoding':_0x120101(0x137),'User-Agent':_0x120101(0x1af),'Referer':_0x120101(0x149)},'body':'{\x22channel\x22\x20:\x20\x22dawbox\x22,\x20\x22task_id\x22\x20:\x20\x2254\x22}'};$[_0x120101(0x145)](_0xf61d90,async(_0x491a82,_0x2aa20e,_0xee29c9)=>{const _0x332307=_0x120101;try{result=JSON[_0x332307(0x1ac)](_0xee29c9),result[_0x332307(0x147)]==0xc8?console['log'](_0x332307(0x152)+result[_0x332307(0x12e)][_0x332307(0x1a1)]):console[_0x332307(0x19f)](_0x332307(0x1ed)+result['error']);}catch(_0x64dab6){$[_0x332307(0x1bf)](_0x64dab6,_0x2aa20e);}finally{_0x5788ac();}},0x0);});}function turntable_receive(){return new Promise(_0x4168b6=>{const _0x5a503e=_0x16af;let _0x240e1f={'url':_0x5a503e(0x1b5),'body':'{\x22channel\x22\x20:\x20\x22dawbox\x22,\x20\x22task_id\x22\x20:\x20\x2254\x22,\x20\x22type\x22\x20:\x201\x20}','headers':{'Host':'v3.sdk.haowusong.com','Connection':'keep-alive','token':dawck,'Content-Type':_0x5a503e(0x183),'Accept-Encoding':_0x5a503e(0x137),'User-Agent':_0x5a503e(0x1af),'Referer':_0x5a503e(0x149)}};$['post'](_0x240e1f,async(_0xaef4fa,_0x2f6092,_0x5a4aab)=>{const _0x36525c=_0x5a503e;try{result=JSON[_0x36525c(0x1ac)](_0x5a4aab),result[_0x36525c(0x147)]==0xc8?console['log']('任务成功'):console[_0x36525c(0x19f)](_0x36525c(0x1ed)+result[_0x36525c(0x1e0)]);}catch(_0x2ff6f2){$[_0x36525c(0x1bf)](_0x2ff6f2,_0x2f6092);}finally{_0x4168b6();}},0x0);});}function turntable_vedio(){return new Promise(_0x5c5b72=>{const _0x1cab5c=_0x16af;let _0x4b96b5={'url':_0x1cab5c(0x19c),'body':_0x1cab5c(0x1c5),'headers':{'Host':_0x1cab5c(0x138),'Connection':'keep-alive','Content-Length':'35','token':dawck,'Content-Type':_0x1cab5c(0x183),'Accept-Encoding':_0x1cab5c(0x137),'User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20MicroMessenger/8.0.3(0x1800032c)\x20NetType/4G\x20Language/zh_CN','Referer':_0x1cab5c(0x149)},'rawBody':'{\x22channel\x22:\x22dawbox\x22,\x22task_id\x22:\x2254\x22}'};$[_0x1cab5c(0x145)](_0x4b96b5,async(_0x49f164,_0x1424f8,_0x31cf84)=>{const _0x3ea535=_0x1cab5c;try{console['log'](_0x31cf84),result=JSON[_0x3ea535(0x1ac)](_0x31cf84),result[_0x3ea535(0x147)]==0xc8?console['log'](_0x3ea535(0x1d8)):console[_0x3ea535(0x19f)](_0x3ea535(0x1ed)+result[_0x3ea535(0x1e0)]);}catch(_0x8dde61){$['logErr'](_0x8dde61,_0x1424f8);}finally{_0x5c5b72();}},0x0);});}function lottery(){return new Promise(_0x1802fb=>{const _0x224f8e=_0x16af;let _0x2a5d70={'url':'https://v3.sdk.haowusong.com/api/box/lottery/config','headers':{'Host':'v3.sdk.haowusong.com','Connection':_0x224f8e(0x14d),'token':dawck,'Content-Type':'application/json','Accept-Encoding':'gzip,compress,br,deflate','User-Agent':_0x224f8e(0x1af),'Referer':_0x224f8e(0x149)}};$[_0x224f8e(0x17e)](_0x2a5d70,async(_0x484564,_0x3c97d6,_0x213163)=>{const _0x4ef078=_0x224f8e;try{result=JSON[_0x4ef078(0x1ac)](_0x213163);if(result[_0x4ef078(0x147)]==0xc8){console['log'](_0x4ef078(0x1a5)+result[_0x4ef078(0x12e)][_0x4ef078(0x1d3)][_0x4ef078(0x13a)]+_0x4ef078(0x1e3)+result[_0x4ef078(0x12e)][_0x4ef078(0x1d3)][_0x4ef078(0x12a)]+_0x4ef078(0x18e));let _0x3eac60=result[_0x4ef078(0x12e)][_0x4ef078(0x159)][_0x4ef078(0x17f)]-result[_0x4ef078(0x12e)][_0x4ef078(0x159)][_0x4ef078(0x132)];console[_0x4ef078(0x19f)](_0x4ef078(0x189)+_0x3eac60),result[_0x4ef078(0x12e)][_0x4ef078(0x159)][_0x4ef078(0x17f)]-result[_0x4ef078(0x12e)]['lottery_num'][_0x4ef078(0x132)]>0x0&&(console['log'](_0x4ef078(0x1e4)),await lottery_vedio(),console[_0x4ef078(0x19f)](_0x4ef078(0x14b)),await $['wait'](0x7530)),console[_0x4ef078(0x19f)](_0x4ef078(0x16a)+result['data'][_0x4ef078(0x159)]['can_lottery_num']),result['data'][_0x4ef078(0x159)][_0x4ef078(0x1bb)]>0x0&&(console[_0x4ef078(0x19f)](_0x4ef078(0x1ee)),await lottery_start(),console['log'](_0x4ef078(0x164)),console['log']('等待30秒冷却~'),await $[_0x4ef078(0x19b)](0x7530),await lottery_receive(),await $[_0x4ef078(0x19b)](0xbb8),await lottery());}else console[_0x4ef078(0x19f)]('任务失败:'+result[_0x4ef078(0x1e0)]);}catch(_0x3313b3){$['logErr'](_0x3313b3,_0x3c97d6);}finally{_0x1802fb();}},0x0);});}function lottery_start(){return new Promise(_0x2eca3e=>{const _0x48babb=_0x16af;let _0x47efbe={'url':_0x48babb(0x179),'body':'{}','headers':{'Host':_0x48babb(0x138),'Connection':_0x48babb(0x14d),'token':dawck,'Content-Type':_0x48babb(0x183),'Accept-Encoding':'gzip,compress,br,deflate','User-Agent':_0x48babb(0x1af),'Referer':_0x48babb(0x133)}};$['post'](_0x47efbe,async(_0x5b76da,_0x2cee94,_0x354109)=>{const _0xbc8113=_0x48babb;try{result=JSON['parse'](_0x354109),result[_0xbc8113(0x147)]==0xc8?console[_0xbc8113(0x19f)]('获得奖励：'+result[_0xbc8113(0x12e)][_0xbc8113(0x1a1)]):console['log'](_0xbc8113(0x1ed)+result[_0xbc8113(0x1e0)]);}catch(_0x43d69a){$['logErr'](_0x43d69a,_0x2cee94);}finally{_0x2eca3e();}},0x0);});}function _0x16af(_0x17f033,_0x78ea88){const _0x3ea9ce=_0x3ea9();return _0x16af=function(_0x16af41,_0x12e175){_0x16af41=_0x16af41-0x129;let _0x57fe85=_0x3ea9ce[_0x16af41];return _0x57fe85;},_0x16af(_0x17f033,_0x78ea88);}function lottery_receive(){return new Promise(_0x4d991f=>{const _0x1e1a4d=_0x16af;let _0x4deadf={'url':'https://v3.sdk.haowusong.com/api/box/lottery/receive','body':'{\x22video\x22:1}','headers':{'Host':'v3.sdk.haowusong.com','Connection':'keep-alive','token':dawck,'Content-Type':_0x1e1a4d(0x183),'Accept-Encoding':'gzip,compress,br,deflate','User-Agent':_0x1e1a4d(0x1af),'Referer':_0x1e1a4d(0x133)}};$['post'](_0x4deadf,async(_0x30d18e,_0x3404b1,_0x5efd03)=>{const _0x1e6e46=_0x1e1a4d;try{result=JSON['parse'](_0x5efd03),result[_0x1e6e46(0x147)]==0xc8?console[_0x1e6e46(0x19f)](_0x1e6e46(0x1d8)):console[_0x1e6e46(0x19f)]('任务失败:'+result[_0x1e6e46(0x1e0)]);}catch(_0xc230a3){$['logErr'](_0xc230a3,_0x3404b1);}finally{_0x4d991f();}},0x0);});}function lottery_vedio(){return new Promise(_0x2289a4=>{const _0xbfcdcc=_0x16af;let _0x38100e={'url':_0xbfcdcc(0x13d),'body':'{}','headers':{'Host':_0xbfcdcc(0x138),'Connection':_0xbfcdcc(0x14d),'Content-Length':'2','token':dawck,'Content-Type':_0xbfcdcc(0x183),'Accept-Encoding':_0xbfcdcc(0x137),'User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20MicroMessenger/8.0.3(0x1800032c)\x20NetType/4G\x20Language/zh_CN','Referer':_0xbfcdcc(0x133)}};$[_0xbfcdcc(0x145)](_0x38100e,async(_0x24e2ee,_0x1128b7,_0x950d4a)=>{const _0x5d410a=_0xbfcdcc;try{result=JSON[_0x5d410a(0x1ac)](_0x950d4a),result[_0x5d410a(0x147)]==0xc8?console[_0x5d410a(0x19f)](_0x5d410a(0x1d8)):console[_0x5d410a(0x19f)](_0x5d410a(0x1ed)+result[_0x5d410a(0x1e0)]);}catch(_0x10069d){$[_0x5d410a(0x1bf)](_0x10069d,_0x1128b7);}finally{_0x2289a4();}},0x0);});}async function dawbox_put(){return new Promise(_0x1844bb=>{const _0x2a2b99=_0x16af;let _0x47a54a={'url':'https://v3.sdk.haowusong.com/api/channel/integral/pool?channel=dawbox','headers':{'Host':'v3.sdk.haowusong.com','Origin':_0x2a2b99(0x13b),'Accept-Encoding':_0x2a2b99(0x1a8),'Connection':'keep-alive','Accept':'application/json,\x20text/plain,\x20*/*','User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148','Accept-Language':_0x2a2b99(0x1cf),'Referer':_0x2a2b99(0x176),'token':dawck}};$[_0x2a2b99(0x17e)](_0x47a54a,async(_0x37223e,_0x31c239,_0x51bdbc)=>{const _0x196935=_0x2a2b99;try{result=JSON['parse'](_0x51bdbc);if(result[_0x196935(0x147)]==0xc8){console['log'](_0x196935(0x187)+$[_0x196935(0x1f0)]+'\x20用户状态】:\x20\x0a---我的DBA数量：'+result[_0x196935(0x12e)][_0x196935(0x1d3)][_0x196935(0x136)]+_0x196935(0x15d)+result['data'][_0x196935(0x1d3)][_0x196935(0x12a)]),can_num=result[_0x196935(0x12e)][_0x196935(0x1d3)][_0x196935(0x16b)];if(can_num==0x1){integral_num=result[_0x196935(0x12e)][_0x196935(0x1c9)]['integral_min_put_num'];let _0x1d3f3f=Math[_0x196935(0x178)](result[_0x196935(0x12e)][_0x196935(0x1d3)][_0x196935(0x136)]/ integral_num)*integral_num;await soy_daw_put(_0x1d3f3f);};}else $['log'](result[_0x196935(0x1e0)]);}catch(_0x554c5b){$[_0x196935(0x1bf)](_0x554c5b,_0x31c239);}finally{_0x1844bb();}},0x0);});}function soy_daw_put(_0x29dec9){return new Promise((_0x3c6eff,_0x4e859d)=>{const _0x54c9e3=_0x16af;$[_0x54c9e3(0x145)]({'url':_0x54c9e3(0x1d9)+_0x29dec9,'headers':{'Host':_0x54c9e3(0x138),'Origin':'https://v3.h5.haowusong.com','Accept-Encoding':_0x54c9e3(0x1a8),'Connection':'keep-alive','Accept':_0x54c9e3(0x1d0),'User-Agent':_0x54c9e3(0x16c),'Accept-Language':'zh-cn','Referer':_0x54c9e3(0x176),'token':dawck},'body':''},async(_0x529ef8,_0x1cd8f5,_0x4da11c)=>{const _0x4aeafa=_0x54c9e3;try{let _0x25da68=JSON['parse'](_0x4da11c);_0x25da68[_0x4aeafa(0x147)]==0xc8?console[_0x4aeafa(0x19f)](_0x4aeafa(0x187)+$[_0x4aeafa(0x1f0)]+_0x4aeafa(0x174)+mun+_0x4aeafa(0x1a7)):console[_0x4aeafa(0x19f)](_0x4aeafa(0x187)+$[_0x4aeafa(0x1f0)]+_0x4aeafa(0x1ab)+_0x25da68[_0x4aeafa(0x1e0)]);}catch(_0x1bbabf){console['log'](_0x1bbabf);}finally{_0x3c6eff();}});});}function Env(_0x5e2b99,_0x1a56e0){const _0x49263f=_0x3e7527;class _0x1e17cf{constructor(_0xa72d9f){const _0x198fbf=_0x16af;this[_0x198fbf(0x150)]=_0xa72d9f;}[_0x49263f(0x1c2)](_0x1640ac,_0x30e38a=_0x49263f(0x14c)){const _0x433eae=_0x49263f;_0x1640ac=_0x433eae(0x161)==typeof _0x1640ac?{'url':_0x1640ac}:_0x1640ac;let _0x594a9c=this[_0x433eae(0x17e)];return'POST'===_0x30e38a&&(_0x594a9c=this['post']),new Promise((_0x4e4af3,_0x83076b)=>{_0x594a9c['call'](this,_0x1640ac,(_0x3f24de,_0x207deb,_0x4f7364)=>{_0x3f24de?_0x83076b(_0x3f24de):_0x4e4af3(_0x207deb);});});}[_0x49263f(0x17e)](_0x238d7c){const _0x3a7858=_0x49263f;return this['send'][_0x3a7858(0x15e)](this[_0x3a7858(0x150)],_0x238d7c);}[_0x49263f(0x145)](_0x15883a){const _0x1d31af=_0x49263f;return this[_0x1d31af(0x1c2)][_0x1d31af(0x15e)](this[_0x1d31af(0x150)],_0x15883a,'POST');}}return new class{constructor(_0x200f35,_0x5db277){const _0x214cfd=_0x49263f;this['name']=_0x200f35,this[_0x214cfd(0x13f)]=new _0x1e17cf(this),this['data']=null,this[_0x214cfd(0x1ba)]=_0x214cfd(0x1cb),this[_0x214cfd(0x1de)]=[],this[_0x214cfd(0x1e1)]=!0x1,this[_0x214cfd(0x1da)]=!0x1,this[_0x214cfd(0x14e)]='\x0a',this[_0x214cfd(0x141)]=_0x214cfd(0x16e),this[_0x214cfd(0x1ad)]=new Date()[_0x214cfd(0x12d)](),Object[_0x214cfd(0x1f3)](this,_0x5db277),this['log']('','🔔'+this[_0x214cfd(0x1cc)]+',\x20开始!');}[_0x49263f(0x1ec)](){const _0x54da2d=_0x49263f;return _0x54da2d(0x1e8)!=typeof module&&!!module[_0x54da2d(0x151)];}[_0x49263f(0x192)](){return'undefined'!=typeof $task;}['isSurge'](){const _0x13dcf5=_0x49263f;return'undefined'!=typeof $httpClient&&_0x13dcf5(0x1e8)==typeof $loon;}[_0x49263f(0x182)](){const _0x472289=_0x49263f;return _0x472289(0x1e8)!=typeof $loon;}['isShadowrocket'](){const _0x25649c=_0x49263f;return _0x25649c(0x1e8)!=typeof $rocket;}[_0x49263f(0x1e2)](_0x3aec0e,_0x26dd82=null){const _0x4e5438=_0x49263f;try{return JSON[_0x4e5438(0x1ac)](_0x3aec0e);}catch{return _0x26dd82;}}[_0x49263f(0x1cd)](_0x5754f8,_0x5a3f77=null){const _0x381c00=_0x49263f;try{return JSON[_0x381c00(0x180)](_0x5754f8);}catch{return _0x5a3f77;}}[_0x49263f(0x1aa)](_0x2f816a,_0xe0268c){const _0x5abee6=_0x49263f;let _0x30652c=_0xe0268c;const _0x179fd5=this[_0x5abee6(0x1c1)](_0x2f816a);if(_0x179fd5)try{_0x30652c=JSON[_0x5abee6(0x1ac)](this[_0x5abee6(0x1c1)](_0x2f816a));}catch{}return _0x30652c;}[_0x49263f(0x1bd)](_0x1ac74a,_0x511b13){const _0x1a4568=_0x49263f;try{return this[_0x1a4568(0x130)](JSON[_0x1a4568(0x180)](_0x1ac74a),_0x511b13);}catch{return!0x1;}}[_0x49263f(0x172)](_0x24d128){return new Promise(_0x5f43c9=>{const _0x5d1d42=_0x16af;this[_0x5d1d42(0x17e)]({'url':_0x24d128},(_0x98ef1b,_0xc1178f,_0x59e22e)=>_0x5f43c9(_0x59e22e));});}['runScript'](_0x588b2a,_0x364a35){const _0x495c42=_0x49263f;return new Promise(_0xd48cf4=>{const _0x1db091=_0x16af;let _0x1eaf71=this['getdata']('@chavy_boxjs_userCfgs.httpapi');_0x1eaf71=_0x1eaf71?_0x1eaf71[_0x1db091(0x1d7)](/\n/g,'')['trim']():_0x1eaf71;let _0xfef0f=this[_0x1db091(0x1c1)]('@chavy_boxjs_userCfgs.httpapi_timeout');_0xfef0f=_0xfef0f?0x1*_0xfef0f:0x14,_0xfef0f=_0x364a35&&_0x364a35[_0x1db091(0x12b)]?_0x364a35[_0x1db091(0x12b)]:_0xfef0f;const [_0x7e9f2b,_0x53f560]=_0x1eaf71[_0x1db091(0x1f4)]('@'),_0x477f72={'url':'http://'+_0x53f560+'/v1/scripting/evaluate','body':{'script_text':_0x588b2a,'mock_type':'cron','timeout':_0xfef0f},'headers':{'X-Key':_0x7e9f2b,'Accept':_0x1db091(0x1b4)}};this['post'](_0x477f72,(_0x412da9,_0x4e6d25,_0x408aa7)=>_0xd48cf4(_0x408aa7));})[_0x495c42(0x1eb)](_0x60793d=>this[_0x495c42(0x1bf)](_0x60793d));}['loaddata'](){const _0x334595=_0x49263f;if(!this[_0x334595(0x1ec)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x334595(0x19a)]=this['path']?this[_0x334595(0x19a)]:require(_0x334595(0x19a));const _0x2168fd=this['path'][_0x334595(0x1d4)](this['dataFile']),_0x3b450f=this['path'][_0x334595(0x1d4)](process['cwd'](),this['dataFile']),_0x141258=this['fs'][_0x334595(0x194)](_0x2168fd),_0x4346d3=!_0x141258&&this['fs'][_0x334595(0x194)](_0x3b450f);if(!_0x141258&&!_0x4346d3)return{};{const _0x3ab6b6=_0x141258?_0x2168fd:_0x3b450f;try{return JSON[_0x334595(0x1ac)](this['fs']['readFileSync'](_0x3ab6b6));}catch(_0x32628e){return{};}}}}[_0x49263f(0x12c)](){const _0x20b2f2=_0x49263f;if(this['isNode']()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x20b2f2(0x19a)]=this[_0x20b2f2(0x19a)]?this['path']:require(_0x20b2f2(0x19a));const _0x4d432a=this[_0x20b2f2(0x19a)][_0x20b2f2(0x1d4)](this[_0x20b2f2(0x1ba)]),_0x138226=this[_0x20b2f2(0x19a)][_0x20b2f2(0x1d4)](process[_0x20b2f2(0x1c8)](),this[_0x20b2f2(0x1ba)]),_0x4d83b0=this['fs'][_0x20b2f2(0x194)](_0x4d432a),_0x3ca05f=!_0x4d83b0&&this['fs'][_0x20b2f2(0x194)](_0x138226),_0x30b7a1=JSON['stringify'](this[_0x20b2f2(0x12e)]);_0x4d83b0?this['fs'][_0x20b2f2(0x18a)](_0x4d432a,_0x30b7a1):_0x3ca05f?this['fs'][_0x20b2f2(0x18a)](_0x138226,_0x30b7a1):this['fs'][_0x20b2f2(0x18a)](_0x4d432a,_0x30b7a1);}}[_0x49263f(0x1df)](_0x51f7c0,_0x5346e6,_0x3eebc7){const _0x4913c4=_0x49263f,_0x1be479=_0x5346e6['replace'](/\[(\d+)\]/g,'.$1')[_0x4913c4(0x1f4)]('.');let _0x5846b7=_0x51f7c0;for(const _0x8a1c33 of _0x1be479)if(_0x5846b7=Object(_0x5846b7)[_0x8a1c33],void 0x0===_0x5846b7)return _0x3eebc7;return _0x5846b7;}[_0x49263f(0x1a4)](_0x2f4e04,_0x33401e,_0x4cc17a){const _0x30840e=_0x49263f;return Object(_0x2f4e04)!==_0x2f4e04?_0x2f4e04:(Array['isArray'](_0x33401e)||(_0x33401e=_0x33401e[_0x30840e(0x1d1)]()['match'](/[^.[\]]+/g)||[]),_0x33401e[_0x30840e(0x1e6)](0x0,-0x1)[_0x30840e(0x199)]((_0x10afe7,_0x553b60,_0x40fa5b)=>Object(_0x10afe7[_0x553b60])===_0x10afe7[_0x553b60]?_0x10afe7[_0x553b60]:_0x10afe7[_0x553b60]=Math[_0x30840e(0x1b6)](_0x33401e[_0x40fa5b+0x1])>>0x0==+_0x33401e[_0x40fa5b+0x1]?[]:{},_0x2f4e04)[_0x33401e[_0x33401e[_0x30840e(0x188)]-0x1]]=_0x4cc17a,_0x2f4e04);}[_0x49263f(0x1c1)](_0x205500){const _0x21a55d=_0x49263f;let _0x20a501=this[_0x21a55d(0x134)](_0x205500);if(/^@/[_0x21a55d(0x160)](_0x205500)){const [,_0x39586b,_0x152024]=/^@(.*?)\.(.*?)$/[_0x21a55d(0x168)](_0x205500),_0x4756dc=_0x39586b?this[_0x21a55d(0x134)](_0x39586b):'';if(_0x4756dc)try{const _0x4a8577=JSON['parse'](_0x4756dc);_0x20a501=_0x4a8577?this[_0x21a55d(0x1df)](_0x4a8577,_0x152024,''):_0x20a501;}catch(_0x5ecbd7){_0x20a501='';}}return _0x20a501;}[_0x49263f(0x130)](_0x2b3f85,_0x12c635){const _0x59a1ab=_0x49263f;let _0x44fd40=!0x1;if(/^@/[_0x59a1ab(0x160)](_0x12c635)){const [,_0x5368b0,_0x3a4f29]=/^@(.*?)\.(.*?)$/[_0x59a1ab(0x168)](_0x12c635),_0x1f928a=this[_0x59a1ab(0x134)](_0x5368b0),_0x1be8d7=_0x5368b0?'null'===_0x1f928a?null:_0x1f928a||'{}':'{}';try{const _0x30c7e6=JSON['parse'](_0x1be8d7);this[_0x59a1ab(0x1a4)](_0x30c7e6,_0x3a4f29,_0x2b3f85),_0x44fd40=this[_0x59a1ab(0x135)](JSON['stringify'](_0x30c7e6),_0x5368b0);}catch(_0x400981){const _0x3a0a9b={};this[_0x59a1ab(0x1a4)](_0x3a0a9b,_0x3a4f29,_0x2b3f85),_0x44fd40=this['setval'](JSON[_0x59a1ab(0x180)](_0x3a0a9b),_0x5368b0);}}else _0x44fd40=this[_0x59a1ab(0x135)](_0x2b3f85,_0x12c635);return _0x44fd40;}[_0x49263f(0x134)](_0x3d43d9){const _0x3614bd=_0x49263f;return this['isSurge']()||this['isLoon']()?$persistentStore['read'](_0x3d43d9):this['isQuanX']()?$prefs[_0x3614bd(0x129)](_0x3d43d9):this['isNode']()?(this[_0x3614bd(0x12e)]=this['loaddata'](),this[_0x3614bd(0x12e)][_0x3d43d9]):this[_0x3614bd(0x12e)]&&this['data'][_0x3d43d9]||null;}[_0x49263f(0x135)](_0x3d1c1f,_0x57b9e1){const _0x3aea15=_0x49263f;return this[_0x3aea15(0x167)]()||this[_0x3aea15(0x182)]()?$persistentStore[_0x3aea15(0x191)](_0x3d1c1f,_0x57b9e1):this[_0x3aea15(0x192)]()?$prefs[_0x3aea15(0x162)](_0x3d1c1f,_0x57b9e1):this[_0x3aea15(0x1ec)]()?(this['data']=this[_0x3aea15(0x1b8)](),this[_0x3aea15(0x12e)][_0x57b9e1]=_0x3d1c1f,this[_0x3aea15(0x12c)](),!0x0):this[_0x3aea15(0x12e)]&&this['data'][_0x57b9e1]||null;}['initGotEnv'](_0x1d40ba){const _0x1b71ee=_0x49263f;this[_0x1b71ee(0x1ce)]=this[_0x1b71ee(0x1ce)]?this['got']:require(_0x1b71ee(0x1ce)),this[_0x1b71ee(0x193)]=this[_0x1b71ee(0x193)]?this[_0x1b71ee(0x193)]:require('tough-cookie'),this[_0x1b71ee(0x1dd)]=this[_0x1b71ee(0x1dd)]?this['ckjar']:new this['cktough'][(_0x1b71ee(0x173))](),_0x1d40ba&&(_0x1d40ba['headers']=_0x1d40ba[_0x1b71ee(0x13c)]?_0x1d40ba['headers']:{},void 0x0===_0x1d40ba[_0x1b71ee(0x13c)][_0x1b71ee(0x17b)]&&void 0x0===_0x1d40ba['cookieJar']&&(_0x1d40ba['cookieJar']=this['ckjar']));}[_0x49263f(0x17e)](_0x21e698,_0x372b61=()=>{}){const _0x551b19=_0x49263f;if(_0x21e698[_0x551b19(0x13c)]&&(delete _0x21e698[_0x551b19(0x13c)][_0x551b19(0x158)],delete _0x21e698['headers'][_0x551b19(0x1c7)]),this[_0x551b19(0x167)]()||this[_0x551b19(0x182)]())this[_0x551b19(0x167)]()&&this[_0x551b19(0x1da)]&&(_0x21e698[_0x551b19(0x13c)]=_0x21e698[_0x551b19(0x13c)]||{},Object['assign'](_0x21e698['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x551b19(0x17e)](_0x21e698,(_0x5ea4c6,_0x1ae21e,_0x5a5d98)=>{const _0x266c31=_0x551b19;!_0x5ea4c6&&_0x1ae21e&&(_0x1ae21e['body']=_0x5a5d98,_0x1ae21e[_0x266c31(0x12f)]=_0x1ae21e[_0x266c31(0x143)]),_0x372b61(_0x5ea4c6,_0x1ae21e,_0x5a5d98);});else{if(this[_0x551b19(0x192)]())this[_0x551b19(0x1da)]&&(_0x21e698['opts']=_0x21e698['opts']||{},Object[_0x551b19(0x1f3)](_0x21e698[_0x551b19(0x16f)],{'hints':!0x1})),$task['fetch'](_0x21e698)['then'](_0x1f2d3b=>{const {statusCode:_0x5a22a5,statusCode:_0x4c973f,headers:_0x33345e,body:_0x57fded}=_0x1f2d3b;_0x372b61(null,{'status':_0x5a22a5,'statusCode':_0x4c973f,'headers':_0x33345e,'body':_0x57fded},_0x57fded);},_0x9da289=>_0x372b61(_0x9da289));else{if(this[_0x551b19(0x1ec)]()){let _0x12676e=require(_0x551b19(0x1d6));this['initGotEnv'](_0x21e698),this[_0x551b19(0x1ce)](_0x21e698)['on'](_0x551b19(0x165),(_0x20dd0d,_0x310b4a)=>{const _0x28370c=_0x551b19;try{if(_0x20dd0d[_0x28370c(0x13c)][_0x28370c(0x1b2)]){const _0x1d8ba4=_0x20dd0d[_0x28370c(0x13c)]['set-cookie'][_0x28370c(0x140)](this[_0x28370c(0x193)][_0x28370c(0x17b)][_0x28370c(0x1ac)])[_0x28370c(0x1d1)]();_0x1d8ba4&&this[_0x28370c(0x1dd)][_0x28370c(0x1d5)](_0x1d8ba4,null),_0x310b4a['cookieJar']=this['ckjar'];}}catch(_0x3cf93e){this[_0x28370c(0x1bf)](_0x3cf93e);}})[_0x551b19(0x163)](_0x47b9cf=>{const _0x4c14f3=_0x551b19,{statusCode:_0x89cc0c,statusCode:_0x301d1e,headers:_0x7b111a,rawBody:_0x5eedd9}=_0x47b9cf;_0x372b61(null,{'status':_0x89cc0c,'statusCode':_0x301d1e,'headers':_0x7b111a,'rawBody':_0x5eedd9},_0x12676e[_0x4c14f3(0x1d2)](_0x5eedd9,this[_0x4c14f3(0x141)]));},_0x35ade7=>{const _0x4a3380=_0x551b19,{message:_0x32e090,response:_0x47b869}=_0x35ade7;_0x372b61(_0x32e090,_0x47b869,_0x47b869&&_0x12676e[_0x4a3380(0x1d2)](_0x47b869[_0x4a3380(0x15b)],this[_0x4a3380(0x141)]));});}}}}[_0x49263f(0x145)](_0x45b345,_0x8f60e3=()=>{}){const _0x1e84e7=_0x49263f,_0x328874=_0x45b345[_0x1e84e7(0x166)]?_0x45b345[_0x1e84e7(0x166)][_0x1e84e7(0x177)]():_0x1e84e7(0x145);if(_0x45b345[_0x1e84e7(0x198)]&&_0x45b345[_0x1e84e7(0x13c)]&&!_0x45b345[_0x1e84e7(0x13c)][_0x1e84e7(0x158)]&&(_0x45b345[_0x1e84e7(0x13c)][_0x1e84e7(0x158)]=_0x1e84e7(0x185)),_0x45b345[_0x1e84e7(0x13c)]&&delete _0x45b345[_0x1e84e7(0x13c)][_0x1e84e7(0x1c7)],this[_0x1e84e7(0x167)]()||this[_0x1e84e7(0x182)]())this[_0x1e84e7(0x167)]()&&this[_0x1e84e7(0x1da)]&&(_0x45b345[_0x1e84e7(0x13c)]=_0x45b345[_0x1e84e7(0x13c)]||{},Object['assign'](_0x45b345[_0x1e84e7(0x13c)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x328874](_0x45b345,(_0x2f9770,_0x39620e,_0x2f11fd)=>{const _0x4a93ef=_0x1e84e7;!_0x2f9770&&_0x39620e&&(_0x39620e[_0x4a93ef(0x198)]=_0x2f11fd,_0x39620e[_0x4a93ef(0x12f)]=_0x39620e['status']),_0x8f60e3(_0x2f9770,_0x39620e,_0x2f11fd);});else{if(this[_0x1e84e7(0x192)]())_0x45b345[_0x1e84e7(0x166)]=_0x328874,this[_0x1e84e7(0x1da)]&&(_0x45b345['opts']=_0x45b345[_0x1e84e7(0x16f)]||{},Object[_0x1e84e7(0x1f3)](_0x45b345[_0x1e84e7(0x16f)],{'hints':!0x1})),$task['fetch'](_0x45b345)[_0x1e84e7(0x163)](_0x145b01=>{const {statusCode:_0x1096de,statusCode:_0x4a5bc2,headers:_0x4bfca9,body:_0x388131}=_0x145b01;_0x8f60e3(null,{'status':_0x1096de,'statusCode':_0x4a5bc2,'headers':_0x4bfca9,'body':_0x388131},_0x388131);},_0x447d72=>_0x8f60e3(_0x447d72));else{if(this[_0x1e84e7(0x1ec)]()){let _0x1b7e0a=require(_0x1e84e7(0x1d6));this[_0x1e84e7(0x15f)](_0x45b345);const {url:_0x462e78,..._0x42bfb2}=_0x45b345;this[_0x1e84e7(0x1ce)][_0x328874](_0x462e78,_0x42bfb2)[_0x1e84e7(0x163)](_0x2b6d6f=>{const _0x1eb423=_0x1e84e7,{statusCode:_0x425793,statusCode:_0x33e7a7,headers:_0x34180e,rawBody:_0x5855e1}=_0x2b6d6f;_0x8f60e3(null,{'status':_0x425793,'statusCode':_0x33e7a7,'headers':_0x34180e,'rawBody':_0x5855e1},_0x1b7e0a['decode'](_0x5855e1,this[_0x1eb423(0x141)]));},_0x4f16e3=>{const _0x37870a=_0x1e84e7,{message:_0x4629d6,response:_0x250777}=_0x4f16e3;_0x8f60e3(_0x4629d6,_0x250777,_0x250777&&_0x1b7e0a['decode'](_0x250777[_0x37870a(0x15b)],this[_0x37870a(0x141)]));});}}}}['time'](_0x4791ed,_0x5e2c1c=null){const _0x679703=_0x49263f,_0x325a50=_0x5e2c1c?new Date(_0x5e2c1c):new Date();let _0x4edb57={'M+':_0x325a50[_0x679703(0x156)]()+0x1,'d+':_0x325a50[_0x679703(0x154)](),'H+':_0x325a50[_0x679703(0x142)](),'m+':_0x325a50[_0x679703(0x195)](),'s+':_0x325a50[_0x679703(0x19d)](),'q+':Math['floor']((_0x325a50['getMonth']()+0x3)/0x3),'S':_0x325a50[_0x679703(0x131)]()};/(y+)/[_0x679703(0x160)](_0x4791ed)&&(_0x4791ed=_0x4791ed[_0x679703(0x1d7)](RegExp['$1'],(_0x325a50[_0x679703(0x1c6)]()+'')[_0x679703(0x144)](0x4-RegExp['$1'][_0x679703(0x188)])));for(let _0x409a78 in _0x4edb57)new RegExp('('+_0x409a78+')')[_0x679703(0x160)](_0x4791ed)&&(_0x4791ed=_0x4791ed[_0x679703(0x1d7)](RegExp['$1'],0x1==RegExp['$1']['length']?_0x4edb57[_0x409a78]:('00'+_0x4edb57[_0x409a78])[_0x679703(0x144)]((''+_0x4edb57[_0x409a78])['length'])));return _0x4791ed;}[_0x49263f(0x146)](_0x4c6338=_0x5e2b99,_0x4397e6='',_0x49478a='',_0x12d57d){const _0x2992ed=_0x49263f,_0x4b8ba2=_0xb0e0b0=>{const _0x485480=_0x16af;if(!_0xb0e0b0)return _0xb0e0b0;if(_0x485480(0x161)==typeof _0xb0e0b0)return this[_0x485480(0x182)]()?_0xb0e0b0:this[_0x485480(0x192)]()?{'open-url':_0xb0e0b0}:this[_0x485480(0x167)]()?{'url':_0xb0e0b0}:void 0x0;if(_0x485480(0x1f2)==typeof _0xb0e0b0){if(this['isLoon']()){let _0x232004=_0xb0e0b0[_0x485480(0x181)]||_0xb0e0b0[_0x485480(0x1f1)]||_0xb0e0b0[_0x485480(0x157)],_0x80a86=_0xb0e0b0['mediaUrl']||_0xb0e0b0[_0x485480(0x175)];return{'openUrl':_0x232004,'mediaUrl':_0x80a86};}if(this[_0x485480(0x192)]()){let _0x1ce067=_0xb0e0b0['open-url']||_0xb0e0b0[_0x485480(0x1f1)]||_0xb0e0b0[_0x485480(0x181)],_0x5e9136=_0xb0e0b0[_0x485480(0x175)]||_0xb0e0b0[_0x485480(0x155)];return{'open-url':_0x1ce067,'media-url':_0x5e9136};}if(this[_0x485480(0x167)]()){let _0x4ceff3=_0xb0e0b0['url']||_0xb0e0b0['openUrl']||_0xb0e0b0[_0x485480(0x157)];return{'url':_0x4ceff3};}}};if(this['isMute']||(this[_0x2992ed(0x167)]()||this[_0x2992ed(0x182)]()?$notification[_0x2992ed(0x145)](_0x4c6338,_0x4397e6,_0x49478a,_0x4b8ba2(_0x12d57d)):this[_0x2992ed(0x192)]()&&$notify(_0x4c6338,_0x4397e6,_0x49478a,_0x4b8ba2(_0x12d57d))),!this[_0x2992ed(0x1dc)]){let _0x235cd6=['',_0x2992ed(0x14a)];_0x235cd6[_0x2992ed(0x1a9)](_0x4c6338),_0x4397e6&&_0x235cd6[_0x2992ed(0x1a9)](_0x4397e6),_0x49478a&&_0x235cd6[_0x2992ed(0x1a9)](_0x49478a),console[_0x2992ed(0x19f)](_0x235cd6['join']('\x0a')),this[_0x2992ed(0x1de)]=this['logs'][_0x2992ed(0x18f)](_0x235cd6);}}[_0x49263f(0x19f)](..._0x137971){const _0x454d67=_0x49263f;_0x137971[_0x454d67(0x188)]>0x0&&(this['logs']=[...this[_0x454d67(0x1de)],..._0x137971]),console[_0x454d67(0x19f)](_0x137971[_0x454d67(0x17d)](this[_0x454d67(0x14e)]));}[_0x49263f(0x1bf)](_0xbe96de,_0x242314){const _0x106704=_0x49263f,_0x1f7d84=!this['isSurge']()&&!this['isQuanX']()&&!this[_0x106704(0x182)]();_0x1f7d84?this[_0x106704(0x19f)]('','❗️'+this[_0x106704(0x1cc)]+_0x106704(0x1ca),_0xbe96de[_0x106704(0x1a6)]):this[_0x106704(0x19f)]('','❗️'+this[_0x106704(0x1cc)]+',\x20错误!',_0xbe96de);}[_0x49263f(0x19b)](_0x19d4ba){return new Promise(_0x2ef30b=>setTimeout(_0x2ef30b,_0x19d4ba));}[_0x49263f(0x190)](_0x3ce5d1={}){const _0x419654=_0x49263f,_0x3cc69a=new Date()[_0x419654(0x12d)](),_0x55a3fd=(_0x3cc69a-this[_0x419654(0x1ad)])/0x3e8;this[_0x419654(0x19f)]('','🔔'+this[_0x419654(0x1cc)]+_0x419654(0x1c0)+_0x55a3fd+'\x20秒'),this[_0x419654(0x19f)](),(this[_0x419654(0x167)]()||this[_0x419654(0x192)]()||this[_0x419654(0x182)]())&&$done(_0x3ce5d1);}}(_0x5e2b99,_0x1a56e0);}