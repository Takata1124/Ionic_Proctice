import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { JsutloaderPage } from './jsutloader.page';

describe('JsutloaderPage', () => {
  let component: JsutloaderPage;
  let fixture: ComponentFixture<JsutloaderPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JsutloaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JsutloaderPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   // expect(component).toBeTruthy();
  //   // expect(true).toBeFalsy();

  //   component.ngOnInit();

  //   expect(router.navigate).toHaveBeenCalledWith(['loader'])
  // });
});
