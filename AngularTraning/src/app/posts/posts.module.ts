import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { PostsRoutingModule } from './/posts-routing.module';

@NgModule({
  imports: [
    CommonModule,RouterModule, PostsRoutingModule
  ],
  declarations: [EditorComponent, PostsComponent, PostComponent],
  exports: [EditorComponent, PostsComponent, PostComponent]
})
export class PostsModule { }
