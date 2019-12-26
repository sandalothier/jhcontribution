import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContributionSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ContributionSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class ContributionHomeModule {}
