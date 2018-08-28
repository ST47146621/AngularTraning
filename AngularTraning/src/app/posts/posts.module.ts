import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditorComponent, PostsComponent, PostComponent],
  exports: [EditorComponent, PostsComponent, PostComponent]
})
export class PostsModule { }
