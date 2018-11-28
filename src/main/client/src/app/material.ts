
import {NgModule} from '@angular/core'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import {MatCardModule, MatListModule, MatInputModule} from '@angular/material';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, LayoutModule, MatCardModule, MatListModule, MatInputModule],
    exports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, LayoutModule, MatCardModule, MatListModule, MatInputModule]
})

export class MaterialModule { }
