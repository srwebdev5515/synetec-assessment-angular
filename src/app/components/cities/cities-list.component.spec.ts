import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from '../../app.component';
import { CitiesListComponent } from './cities-list.component';
import { CitiesService } from '../../services/cities/cities.service';
import { CitiesEndpoint } from '../../services/cities/cities-endpoint.service';

describe('CitiesListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CitiesListComponent
      ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CitiesEndpoint,
        CitiesService,
      ]
    }).compileComponents();
  }));
  
  it('should create the cities list component', async(() => {
    const fixture = TestBed.createComponent(CitiesListComponent);
    const citiesList = fixture.debugElement.componentInstance;
    expect(citiesList).toBeTruthy();
  }));
});
