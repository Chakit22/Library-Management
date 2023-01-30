import { ComponentFixture,async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

//Home component Testing

//UPDATE FORM Testing
describe('YourComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA ],
      imports: [FormsModule,HttpClientTestingModule],
      declarations: [HomeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
  });

  it('should have a form element', () => {
    const form = fixture.debugElement.query(By.css('form'));
    expect(form).toBeTruthy();
  });

  
  it('should have an input as name element', () => {
    const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
    expect(nameInput).toBeTruthy();
  });

  it('should have an input as author element', () => {
    const authorInput = fixture.debugElement.query(By.css('input[name="author"]'));
    expect(authorInput).toBeTruthy();
  });

  it('should have an input as price element', () => {
    const priceInput = fixture.debugElement.query(By.css('input[name="price"]'));
    expect(priceInput).toBeTruthy();
  });
});


//INSERT FORM Testing
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA ],
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // INSERT FORM
  it('should have a form element', () => {
    const form = fixture.debugElement.query(By.css('form'));
    expect(form).toBeTruthy();
  });

  it('should have an input as name element', () => {
    const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
    expect(nameInput).toBeTruthy();
  });

  it('should have an input as author element', () => {
    const authorInput = fixture.debugElement.query(By.css('input[name="author"]'));
    expect(authorInput).toBeTruthy();
  });

  it('should have an input as price element', () => {
    const priceInput = fixture.debugElement.query(By.css('input[name="price"]'));
    expect(priceInput).toBeTruthy();
  });
});