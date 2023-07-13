import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-batch-btn',
  templateUrl: './batch-btn.component.html',
  styleUrls: ['./batch-btn.component.scss']
})
export class BatchBtnComponent {
  @Input() uploadApi!: string;
  @Input() downloadApi!: string;
  @Input() showBatchDelBtn: Boolean = true;
  @Output() onLoad = new EventEmitter<string>();
  @Output() add = new EventEmitter<string>();
  @Output() batchDel = new EventEmitter<string>();
  constructor(private msg: NzMessageService) { }
  handleUpload(info: any): void {
    if (info.type === 'error') {
      this.msg.error(`上传失败`);
      return;
    }
    if (info.file && info.file.response) {
      const res = info.file.response;
      if (!res.error) {
        this.msg.success(`导入成功!`);
        this.onLoad.emit();
      } else {
        this.msg.error(`${res.error}`);
      }
    }
  }
}