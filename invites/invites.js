goog.provide('invites.start');

goog.require('goog.dom');
goog.require('goog.style');
goog.require('goog.ui.DatePicker');
goog.require('goog.ui.Option');
goog.require('goog.ui.Select');
goog.require('goog.ui.AutoComplete.Basic');
goog.require('goog.editor.Field');
goog.require('goog.ui.editor.DefaultToolbar');
goog.require('goog.editor.plugins.BasicTextFormatter');
goog.require('goog.editor.plugins.EnterHandler');
goog.require('goog.editor.plugins.HeaderFormatter');
goog.require('goog.editor.plugins.LinkDialogPlugin');
goog.require('goog.editor.plugins.ListTabHandler');
goog.require('goog.editor.plugins.LoremIpsum');
goog.require('goog.editor.plugins.RemoveFormatting');
goog.require('goog.editor.plugins.SpacesTabHandler');
goog.require('goog.editor.plugins.UndoRedo');
goog.require('goog.ui.editor.ToolbarController');


invites.start = function() {
  setupDatePicker();
  setupTimeSelect();
  setupAutoComplete();
  setupEditor();
};

goog.exportSymbol('invites.start', invites.start);

function setupDatePicker() {
  var datePicker = new goog.ui.DatePicker();
  var datePickerDiv = goog.dom.getElement('datepicker');
  datePicker.render(datePickerDiv);

  goog.events.listen(datePicker, goog.ui.DatePicker.Events.CHANGE,
      function(event) {
    if (event.date) {
      goog.dom.getElement('date').value = event.date.toIsoString(true);
    } 
  });

  goog.events.listen(datePickerDiv, 'click', function(event) {
    event.preventDefault();
  });
}


function setupTimeSelect() {
  goog.style.showElement(goog.dom.getElement('time'), false);

  var timeSelect = new goog.ui.Select('Pick a time');
  // TODO(nnaze): Correct times.
  for (var i = 1; i <= 12; i++) {
    timeSelect.addItem(new goog.ui.Option(i + 'am'));
  }

  for (var i = 1; i <= 12; i++) {
    timeSelect.addItem(new goog.ui.Option(i + 'pm'));
  }
  timeSelect.render(goog.dom.getElement('closuretime'));
} 

function setupAutoComplete() {
  var friends = [
    'Abraham Lincoln <abe@foo.com>',
    'Cleopatra <cleo@foo.com>',
    'Mark Twain <twain@foo.com>',
    'Harry S. Truman <hst@foo.com>',
    'Henry David Thoreau <hdt1817@foo.com>',
    'Hank Aaron <hankaaron@foo.com>',
    'Hank Williams <hank@foo.com>',
    'Sacagawea <saca@foo.com>'];

  
  var autoComplete = new goog.ui.AutoComplete.Basic(
      friends,
      goog.dom.getElement('invites'),
      true); 
}

function setupEditor() {

  goog.style.showElement(goog.dom.getElement('editor'), true);
  goog.style.showElement(goog.dom.getElement('activity'), false);

  var toolbar = goog.ui.editor.DefaultToolbar.makeDefaultToolbar(
      goog.dom.getElement('toolbar'));

  var field = new goog.editor.Field('editor');
  field.registerPlugin(new goog.editor.plugins.BasicTextFormatter());
  field.registerPlugin(new goog.editor.plugins.RemoveFormatting());
  field.registerPlugin(new goog.editor.plugins.UndoRedo());
  field.registerPlugin(new goog.editor.plugins.ListTabHandler());
  field.registerPlugin(new goog.editor.plugins.SpacesTabHandler());
  field.registerPlugin(new goog.editor.plugins.EnterHandler());
  field.registerPlugin(new goog.editor.plugins.HeaderFormatter());
  field.registerPlugin(
      new goog.editor.plugins.LoremIpsum('Click here to edit'));
  field.registerPlugin(
      new goog.editor.plugins.LinkDialogPlugin());

  new goog.ui.editor.ToolbarController(field, toolbar);

  field.makeEditable();
}

goog.exportSymbol('main', invites.start);