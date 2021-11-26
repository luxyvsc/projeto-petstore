import { Parameters } from './../../interfaces/parameters';
import { ParametersService } from './../../services/parameters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  parameter!: Parameters;
  constructor(private parametersService: ParametersService) { }

  ngOnInit(): void {
    this.parametersService.getParameters()
      .subscribe(parameters => this.parameter = parameters);
  }

}
