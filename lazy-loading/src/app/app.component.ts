import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy-loading';

   imageUrls: string[] = [];

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.imageUrls = [
      'https://images.unsplash.com/photo-1593642532973-d31b6557fa68',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1547744016-4da6a4f9cd33',
      'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6',
      'https://images.unsplash.com/photo-1550439062-609e1531270e',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9',
      'https://images.unsplash.com/photo-1579120041579-8e0319e8b917',
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad',
      'https://images.unsplash.com/photo-1518397387277-7843f7251311',
      'https://images.unsplash.com/photo-1533587851505-0a0357e456e8',
      'https://images.unsplash.com/photo-1542206395-9feb3edaa68f',
      'https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      'https://images.unsplash.com/photo-1474511013273-7bd0b2cdb5a6',
      'https://images.unsplash.com/photo-1532635249-8912d83e4e1c',
      'https://images.unsplash.com/photo-1549924231-f129b911e442',
      'https://images.unsplash.com/photo-1504890190822-5b1f407a2f93',
      'https://images.unsplash.com/photo-1485908966519-e6f21e6daec3',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
      'https://images.unsplash.com/photo-1518770660439-4636190af475',
      'https://images.unsplash.com/photo-1486016006115-74a41448aea2',
      'https://images.unsplash.com/photo-1495020689067-958852a7765e',
      'https://images.unsplash.com/photo-1503985073337-3b60f7f703b8',
    ];
    
  }
}
