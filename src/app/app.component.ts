import { Component } from '@angular/core';

import { DocumentEditorComponent } from '@txtextcontrol/tx-ng-document-editor';

//declare const saveDocument:  any ;
//declare const loadDocument: any;
declare const TXTextControl: any;




function saveDocument() {
  return new Promise(resolve => {
    TXTextControl.saveDocument(TXTextControl.streamType.InternalUnicodeFormat, function (e: any) {
      resolve(e.data);
      console.log("done");
    });


  });

}

function loadDocument() {
  TXTextControl.loadDocument(TXTextControl.streamType.InternalUnicodeFormat, document);

}

function textEditor(data  : any) {
  //TXTextControl.HeaderFooter.GetItem( TXTextControl.HeaderFooterType.Header); 
  //console.log(TXTextControl.HeaderFooter.GetItem( TXTextControl.HeaderFooterType.Header))
  //TXTextControl.HeaderFooterCollection.add((<HeaderFooterType> headerFooterType))
  console.log(TXTextControl.HeaderFooterCollection.add(data))
  console.log(data)
  //TXTextControl.HeaderFooterCollection.add(<string> headerFooterType,)

}


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = "data";
  title = 'document-editor';
  header = 'DocumentEditorComponent';


  onClickSave() {
    saveDocument();
  }

  onClickLoad() {
    loadDocument();
  }

  onClickTextEditor() {
    textEditor(this.data);

  }
}
