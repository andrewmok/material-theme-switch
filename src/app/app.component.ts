import {Component, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public readonly THEME = 'THEME';
  public readonly title = 'material-theme-switch';
  public readonly options = [
    {label: 'Default', value: 'default'},
    {label: 'Pink', value: 'pink'},
    {label: 'Amber', value: 'amber'},
    {label: 'Purple', value: 'purple'}
  ];

  public selectedTheme = 'default';
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {
    this.form = this.formBuilder.group({
      [this.THEME] : [this.selectedTheme],
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((formData) => {
      const theme = formData[this.THEME];

      this.renderer.addClass(document.body, theme);
      this.renderer.removeClass(document.body, this.selectedTheme);
      this.selectedTheme = theme;
    });
  }
}
