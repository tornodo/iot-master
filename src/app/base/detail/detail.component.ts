import { NzMessageService } from 'ng-zorro-antd/message';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  constructor( private msg: NzMessageService ){}
  @Input()chooseData:any
  @Input()title:any
  @Input()isVisible:any
  @Output()edit=new EventEmitter()
  @Output()delete=new EventEmitter()
  @Output()close=new EventEmitter()
  handleEdit(mes:any){this.edit.emit(mes)}
  handleDelete(mes:any){this.delete.emit(mes)}
  handleClose(){this.close.emit( )}
  cancel(){ this.msg.info('取消删除')}
}