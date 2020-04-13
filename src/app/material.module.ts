import { NgModule } from '@angular/core';
import { MatNativeDateModule, MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
    imports: [
        MatNativeDateModule,
        MatDatepickerModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatRadioModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule],

    exports: [
        MatNativeDateModule,
        MatDatepickerModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule],

})

export class MyMaterialModule { }