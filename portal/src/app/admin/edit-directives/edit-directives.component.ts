import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-directives',
  templateUrl: './edit-directives.component.html',
  styleUrls: ['./edit-directives.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditDirectivesComponent),
      multi: true
    }
  ]
})
export class EditDirectivesComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {
  }
  onTouched: any = () => {
  }

  @Input() points: any;

  items: any[] = [];

  formGroup = new FormGroup({});

  current: any = {};
  showModal = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm({});
  }

  buildForm(d:any): void {
    this.formGroup = this.fb.group({
          point: [d.point, [Validators.required]],
          value: [d.value || 0, [Validators.required]],
          delay: [d.delay || 0, [Validators.required]],
          expression: [d.expression, [Validators.required]],
    })
  }

  copy(i: number) {
    let item = this.items[i]
    item = JSON.parse(JSON.stringify(item))
    this.items.splice(i+1, 0, item)
  }

  remove(i: number) {
    this.items.splice(i, 1)
    this.change();
  }

  clear() {
    this.items = [];
    this.change();
  }

  change() {
    //this.formGroup.markAsDirty();
    //this.formGroup.updateValueAndValidity();
    this.onChanged(this.items);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.items = obj;
    //this.buildForm();
  }

  drop($event: any) {
    const item = this.items.splice($event.previousIndex, 1);
    this.items.splice($event.currentIndex, 0, ...item);
    this.change();
  }

  edit(data?: any) {
    if (!data) {
      data = {
        point: '',
        value: '',
        delay: '',
        expression: '',
      }
      this.items.push(data)
    }
    this.current = data;
    this.buildForm(data)
    this.showModal = true;
  }

  onOk() {
    this.showModal = false;
    Object.assign(this.current, this.formGroup.value)
  }
}
