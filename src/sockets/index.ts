import io from 'socket.io-client';

export class Socket {
  public socket: any;
  public data: any = 'esperando...'
  constructor() {
    this.connection();
  }

  private connection = () => {
    this.socket = io('https://tickets.brandonhsz.xyz/tickets');
    this.socket.on('connect', () => {
      console.log('connected');
      this.socket.emit("findAllTickets")
    });
  }

  public sendMessage = (event: string, message: object) => {

    this.socket.emit(event, message);
  }
}

export default new Socket();