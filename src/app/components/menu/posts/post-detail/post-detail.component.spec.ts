import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PostDetailComponent } from "./post-detail.component";

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
    const postElement: HTMLElement = fixture.nativeElement;
    const divTitle = postElement.querySelector("#title");
    expect(divTitle).toBeDefined();
    expect(divTitle).toContain(title);
  });
});
