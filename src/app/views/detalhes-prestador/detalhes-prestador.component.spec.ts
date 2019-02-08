import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPrestadorComponent } from './detalhes-prestador.component';

describe('DetalhesPrestadorComponent', () => {
  let component: DetalhesPrestadorComponent;
  let fixture: ComponentFixture<DetalhesPrestadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesPrestadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
