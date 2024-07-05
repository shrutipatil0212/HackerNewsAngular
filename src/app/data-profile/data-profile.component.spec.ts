import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataProfileComponent } from './data-profile.component';
import { NgxPaginationModule } from 'ngx-pagination';

describe('DataProfileComponent', () => {
  let component: DataProfileComponent;
  let fixture: ComponentFixture<DataProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataProfileComponent],
      imports: [HttpClientTestingModule, NgxPaginationModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
