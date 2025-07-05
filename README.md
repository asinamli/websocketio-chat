# websocket-o-chat

Bu proje, Next.js ve Socket.IO kullanarak yapılmış basit bir canlı chat uygulamasıdır.

---

## 🚀 Kurulum

Projeyi klonla ve bağımlılıkları yükle:

```bash
git clone https://github.com/asinamli/websocketio-chat.git
cd websocketio-chat
npm install


# 📡 Next.js + Socket.IO Basit Chat

Bu proje, Next.js içinde basit bir Socket.IO örneğidir.  
Gerçek zamanlı chat mantığını öğrenmek için hazırlandı.

## 🚀 Nasıl Çalışır?

- `pages/api/socket.ts` içinde bir Socket.IO sunucusu kurulur.
- `/api/socket` route'u çağrıldığında Socket.IO başlatılır.
- `src/app/chat/page.tsx` içinde client tarafı bağlanır.
- Socket.IO bağlantısı kurulur → mesajlar yayınlanır → diğer sekmelere anlık gider.

## 🗂️ Klasör Yapısı

/pages/api/socket.ts --> Socket.IO sunucu
/src/types/next.ts --> Next.js custom response type
/src/app/chat/page.tsx --> Basit chat arayüzü
