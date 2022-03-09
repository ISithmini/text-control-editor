function saveDocument() {
    TXTextControl.saveDocument(TXTextControl.StreamType.HTMLFormat,
        function (e) {
            alert(atob(e.data));
        });
}

function loadDocument() {
    TXTextControl.loadDocument(TXTextControl.StreamType.HTMLFormat,
        btoa('<strong>Test</strong>'));
}

let checked = true; 

function ischecked() {
    console.log('xxx')
    checked = !checked;
        console.log(checked);
        return checked;
}

function toggleVerticalRuler() {
    TXTextControl.showVerticalRuler(ischecked())
}

function textEditor() {

    console.log('asfdf')

    TXTextControl.loadDocument(TXTextControl.StreamType.HTMLFormat,
        btoa('<strong>Test</strong>'));

    // Inserts a 3x3 Table.
    TXTextControl.tables.add(3, 3)
    //TXTextControl.tables.col
    //TXTextControl.HeaderFooter.GetItem( TXTextControl.HeaderFooterType.Header); 
    //console.log(TXTextControl.HeaderFooter.GetItem( TXTextControl.HeaderFooterType.Header))
    //TXTextControl.HeaderFooterCollection.add(Headers Header)
    //TXTextControl.HeaderFooterCollection.add(new TXTextControl )
    //TXTextControl.textEditor.
    //TX.backColor = '#000000'
    //Text.
    //TXTextControl.HeaderFooterType.Header('asfdf')
    //console.log(TXTextControl.HeaderFooterType.Header('asfdf'))
    //console.log(TXTextControl.HeaderFooterCollection.add(TXTextControl.HeaderFooterType.Header))
    //TXTextControl.HeaderFooterCollection.add(<string> headerFooterType,) 
    
  }

  //Hide Header and footer
  function toggleRibbonElement()
  {

        var ribbonGroup = document.getElementById('ribbonGroupIllustrations')   
        console.log(ribbonGroup)  
        ribbonGroup.style.display = 'none'
  }
  


    
