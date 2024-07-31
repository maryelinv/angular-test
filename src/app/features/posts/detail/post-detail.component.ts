import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../../core/models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  @Input() post!: Post;
  @Output() close: EventEmitter<void> = new EventEmitter();
  primaryTypeColor: string = '';

  constructor() { }

  ngOnInit() {
    const backdrop = document.querySelector('.backdrop');
    const content = document.querySelector('.detail-card');

    backdrop?.addEventListener('click', () => {
      this.onClose();
    });

    content?.addEventListener('click', (event) => {
      event.stopPropagation();
    });

  }

  onClose() {
    this.close.emit();
  }
}
