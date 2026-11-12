self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('push',function(e){var d={};try{d=e.data.json()}catch(_){d={titulo:'Recordatorio 🌸',cuerpo:e.data?e.data.text():''}}
  var al=/^⏰/.test(d.titulo||''),m=/a([123])$/.exec(d.tag||''),lv=m?+m[1]:(al?2:0),pt={1:[500,300,500,300,500,300,500],2:[900,300,900,300,900,300,900,300,900,300,900],3:[1500,300,1500,300,1500,300,1500,300,1500,300,1500,300,1500]};
  e.waitUntil(self.registration.showNotification(d.titulo||'Recordatorio 🌸',{body:d.cuerpo||'',icon:'/icon-192.png',badge:'/icon-192.png',vibrate:lv?pt[lv]:[300,150,300,150,600],requireInteraction:true,tag:d.tag||'aviso',renotify:true,data:{url:lv?'/?alarma='+encodeURIComponent(d.tag||''):'/'}}))});
self.addEventListener('notificationclick',function(e){e.notification.close();var u=(e.notification.data&&e.notification.data.url)||'/';e.waitUntil(self.clients.openWindow(u))});
