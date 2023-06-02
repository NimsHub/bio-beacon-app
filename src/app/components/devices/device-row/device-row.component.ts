import {Component, Input} from '@angular/core';
import {Device} from "../../../models/Device";

@Component({
  selector: 'app-device-row',
  templateUrl: './device-row.component.html',
  styleUrls: ['./device-row.component.css']
})
export class DeviceRowComponent {
@Input() device?: Device;
data:string = this.device ? this.device.id.toString() : '1'

  public downloadQRCode() {
    const fileNameToDownload = 'image_qrcode';
    // @ts-ignore
    const base64Img = document.getElementsByClassName('qr-code')[0].children[0]['src'];
    fetch(base64Img)
      .then(res => res.blob())
      .then((blob) => {

          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = fileNameToDownload;
          link.click();
      })
  }
}
