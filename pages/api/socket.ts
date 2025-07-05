import { Server as IOServer } from "socket.io";
import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "@/types/next"; // alias doğru ise

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponseServerIO) {
  if (!res.socket.server.io) {
    console.log("socket.io başlatılıyor");

    const io = new IOServer(res.socket.server as any, {
      path: "/api/socket",
    });

    io.on("connection", (socket) => {
      console.log("Yeni bir istemci bağlandı:", socket.id);

      socket.on("send-message", (msg: string) => {
        console.log("Mesaj alındı:", msg);
        io.emit("receive-message", msg);
      });

      socket.on("disconnect", () => {
        console.log("Bağlantı kesildi:", socket.id);
      });
    });

    res.socket.server.io = io;
  } else {
    console.log("socket.io zaten başlatıldı");
  }

  res.end();
}
