import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedComponent } from './feed.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FeedService } from '../services/feed.service';
import { of } from 'rxjs';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  let feedService: FeedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ FeedService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    feedService = TestBed.inject(FeedService);
    spyOn(feedService, 'getFeed').and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load feed on init', () => {
    expect(feedService.getFeed).toHaveBeenCalled();
  });
});
