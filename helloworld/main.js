goog.provide('hello.main');

goog.require('hello.notes');

goog.require('goog.dom');
goog.require('goog.text.LoremIpsum');

hello.main = function() {

  var output = goog.dom.getElement('output');

  var newHeader = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
    'Hello world!');
  goog.dom.appendChild(output, newHeader);

  var generator = new goog.text.LoremIpsum();
  var newContent = goog.dom.createDom('div', {}, generator.generateParagraph(true));
  goog.dom.appendChild(output, newContent);

  var notes = [
     {title:'First note', content:'The text of the first note'},
     {title:'Second note', content:'The text of the second note'}
  ];

  hello.notes.makeNotes(notes, goog.dom.getElement('notes'));

}

goog.exportSymbol('main', hello.main);