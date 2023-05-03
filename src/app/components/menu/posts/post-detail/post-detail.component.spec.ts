import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PostDetailComponent } from "./post-detail.component";
import { By } from "@angular/platform-browser";

describe("PostDetailComponent", () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create Post detail component", () => {
    expect(component).toBeDefined();
  });

  it("should create Post detail component with element", () => {
    const title = "test title";
    component.post = {
      userId: 1,
      id: 1,
      title: title,
      body: "body test of post test",
    };
    fixture.detectChanges();
    const postElement = fixture.debugElement;
    const divTitle = postElement.query(By.css("#title")).nativeElement;
    expect(divTitle).toBeDefined();
    expect(divTitle.textContent).toContain(title);
  });
});
