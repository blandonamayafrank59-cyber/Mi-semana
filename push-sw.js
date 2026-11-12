self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('push',function(e){var d={};try{d=e.data.json()}catch(_){d={titulo:'Recordatorio 🌸',cuerpo:e.data?e.data.text():''}}
  var al=/^⏰/.test(d.titulo||'');
  e.waitUntil(self.registration.showNotification(d.titulo||'Recordatorio 🌸',{body:d.cuerpo||'',icon:'/icon-192.png',badge:'/icon-192.png',vibrate:al?[900,300,900,300,900,300,900,300,900,300,900]:[300,150,300,150,600],requireInteraction:true,tag:d.tag||'aviso',renotify:true,data:{url:'/'}}))});
self.addEventListener('notificationclick',function(e){e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(l){for(var i=0;i<l.length;i++){if('focus' in l[i])return l[i].focus()}return self.clients.openWindow('/')}))});
