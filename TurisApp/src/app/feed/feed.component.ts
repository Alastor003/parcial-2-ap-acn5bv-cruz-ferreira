import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: any[] = [];
  comment: string = '';

  constructor(private feedService: FeedService) {}

  ngOnInit() {
    this.loadFeed();
  }

  loadFeed() {
    this.feedService.getFeed().subscribe(feed => {
      this.posts = feed;
    });
  }

  addComment(postId: string) {
    this.feedService.addComment(postId, this.comment).subscribe(response => {
      console.log('Comment added', response);
      this.loadFeed(); // Refresh the feed to show the new comment
    });
  }
}
