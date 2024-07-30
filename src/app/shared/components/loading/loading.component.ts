import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="backdrop">
      <div class="loading" style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/2zZNmrvguyPTS06rK0" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/2zZNmrvguyPTS06rK0">via GIPHY</a></p>
      <!-- <img src="./assets/loading/charmander.gif" alt="loading" class="loading"> -->
    </div>
  `
})
export class LoadingComponent {
}