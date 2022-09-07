import { Component,OnInit } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import {AppService} from './app.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [
        AppService
    ]
})


export class AppComponent implements OnInit {
    items: TreeviewItem[];

    constructor() { }

    ngOnInit() {
        this.items = this.getItems();
    }

    getItems(){
        // fetch api response
        // convert response into this format (object can be nested, should contain below keys only with given type)    
        // {
        //     text: string;
        //     value: any;
        //     disabled ?: boolean; 
        //     checked ?: boolean;
        //     collapsed ?: boolean;
        //     children ?: TreeItem[];
        // }
        
        const item = new TreeviewItem({
            text: 'Children', value: 1, children: [
                { text: 'Baby 3-5', value: 11 },
                { text: 'Baby 6-8', value: 12 },
                { text: 'Baby 9-12', value: 13 }
            ]
        });
        return [ item ];
    }
}
