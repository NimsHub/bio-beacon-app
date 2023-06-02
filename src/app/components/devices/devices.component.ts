import {Component, OnInit} from '@angular/core';
import {Device} from "../../models/Device";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit{
  devices: Device[] = [];

  constructor(private deviceService: DeviceService) {
  }
getDevices(){
    this.deviceService.getDevices().subscribe({
      next:(value)=>this.devices = value,
      error:(error) => console.log(error),
      complete:() => console.log("devices retrieved")
    })
}

createNewDevice(){
    this.deviceService.createDevice().subscribe({
      next:(value)=> console.log (value),
      error:(error) => console.log(error),
      complete:() => console.log("devices retrieved")
    })
}
  ngOnInit(): void {
    this.getDevices()
  }

}
