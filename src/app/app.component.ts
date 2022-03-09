import { Component } from '@angular/core';

import  {DocumentEditorComponent, DocumentEditorModule} from '@txtextcontrol/tx-ng-document-editor';
//import toggleVerticleRuler from '../assets/js/'

declare const saveDocument:  any ;
declare const loadDocument: any;
declare const textEditor: any;
declare const toggleRibbonElement: any;
declare const toggleVerticalRuler : any;

declare const TX: DocumentEditorComponent;
declare const Text: DocumentEditorModule;

declare const TXTextControl: any;



// function saveDocument() {
//   return new Promise(resolve => {
//     TXTextControl.saveDocument(TXTextControl.streamType.InternalUnicodeFormat, function (e: any) {
//       resolve(e.data);
//       console.log("done");
//     });
//   });
// }

// function loadDocument() {
//   TXTextControl.loadDocument(TXTextControl.streamType.InternalUnicodeFormat, document);
//   btoa('<strong>Test</strong>');

// }



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
    textEditor();
    toggleRibbonElement();


  }

  onClickRuler(){
    console.log('yyy')
    toggleVerticalRuler()

  }
  
}
