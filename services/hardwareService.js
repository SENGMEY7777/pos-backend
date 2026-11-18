const { SerialPort } = require('serialport');

class HardwareService {
  constructor() {
    this.printerPort = null;
  }

  async listPorts() {
    try {
      const ports = await SerialPort.list();
      return ports;
    } catch (error) {
      console.error('Error listing serial ports:', error);
      return [];
    }
  }

  async connectPrinter(path, baudRate = 9600) {
    try {
      this.printerPort = new SerialPort({ path, baudRate });
      console.log(`Connected to printer on ${path}`);
      return true;
    } catch (error) {
      console.error('Failed to connect printer:', error);
      return false;
    }
  }

  printReceipt(data) {
    if (!this.printerPort || !this.printerPort.isOpen) {
      console.error('Printer is not connected.');
      return false;
    }
    this.printerPort.write(data);
    return true;
  }
}

module.exports = new HardwareService();
