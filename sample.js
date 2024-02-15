var virtualData = [];
var names = ['hardire', 'abramjo01', 'aubucch01', 'Hook', 'Rumpelstiltskin', 'Belle', 'Emma', 'Regina', 'Aurora', 'Elsa', 'Anna', 'Snow White', 'Prince Charming', 'Cora', 'Zelena', 'August', 'Mulan', 'Graham', 'Discord', 'Will', 'Robin Hood', 'Jiminy Cricket', 'Henry', 'Neal', 'Red', 'Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 'Aayan', 'Aazaan', 'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul', 'Abdul-Aziz', 'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Abdulkhader', 'Abdullah', 'Abdul-Majeed', 'Abdulmalik', 'Abdul-Rehman', 'Abdur', 'Abdurraheem', 'Abdur-Rahman', 'Abdur-Rehmaan', 'Abel', 'Abhinav', 'Abhisumant', 'Abid', 'Abir', 'Abraham', 'Abu', 'Abubakar', 'Ace', 'Adain', 'Adam', 'Adam-James', 'Addison', 'Addisson', 'Adegbola', 'Adegbolahan', 'Aden', 'Adenn', 'Adie', 'Adil', 'Aditya', 'Adnan', 'Adrian', 'Adrien', 'Aedan', 'Aedin', 'Aedyn', 'Aeron', 'Afonso', 'Ahmad', 'Ahmed', 'Ahmed-Aziz', 'Ahoua', 'Ahtasham', 'Aiadan', 'Aidan', 'Aiden', 'Aiden-Jack', 'Aiden-Vee'];

function dataSource() {
    for (var i = 0; i < 1000; i++) {
        virtualData.push({
            'SNo': i + 1,
            'FIELD1': names[Math.floor(Math.random() * names.length)],
            'FIELD2': 1967 + (i % 10), 'FIELD3': Math.floor(Math.random() * 200),
            'FIELD4': Math.floor(Math.random() * 100), 'FIELD5': Math.floor(Math.random() * 2000), 'FIELD6': Math.floor(Math.random() * 1000), 'FIELD7': Math.floor(Math.random() * 100), 'FIELD8': Math.floor(Math.random() * 10), 'FIELD9': Math.floor(Math.random() * 10), 'FIELD10': Math.floor(Math.random() * 100), 'FIELD11': Math.floor(Math.random() * 100), 'FIELD12': Math.floor(Math.random() * 1000), 'FIELD13': Math.floor(Math.random() * 10), 'FIELD14': Math.floor(Math.random() * 10), 'FIELD15': Math.floor(Math.random() * 1000), 'FIELD16': Math.floor(Math.random() * 200), 'FIELD17': Math.floor(Math.random() * 300), 'FIELD18': Math.floor(Math.random() * 400), 'FIELD19': Math.floor(Math.random() * 500), 'FIELD20': Math.floor(Math.random() * 700), 'FIELD21': Math.floor(Math.random() * 800), 'FIELD22': Math.floor(Math.random() * 1000), 'FIELD23': Math.floor(Math.random() * 2000), 'FIELD24': Math.floor(Math.random() * 150), 'FIELD25': Math.floor(Math.random() * 1000), 'FIELD26': Math.floor(Math.random() * 100), 'FIELD27': Math.floor(Math.random() * 400), 'FIELD28': Math.floor(Math.random() * 600), 'FIELD29': Math.floor(Math.random() * 500), 'FIELD30': Math.floor(Math.random() * 300),
        });
    }
}
dataSource();
var grid = new ej.grids.Grid({
    dataSource: hierarchyOrderdata,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: {allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', newRowPosition: 'Top'},
    allowTextWrap: false,
    textWrapSettings: { wrapMode: 'Both' },
    height: 310,
    enableHover: false,
    allowResizing: true,
    frozenRows: 2,
    dataBound: function () {
        // loadInputValues();
        // const startIndex = parseInt(document.getElementById('startIndex').value, 10) || 1;
        // const endIndex = parseInt(document.getElementById('endIndex').value, 10) || 3;
        // document.getElementById('startIndex').value = startIndex;
        // document.getElementById('endIndex').value = endIndex;
        // grid.autoFitColumns([ 'ShipName', 'ShipAddress', 'ShipCity', 'ShipCountry'], startIndex, endIndex);
    },
    columns: [
    {field: 'OrderID', headerText: 'Order ID', width: 120, isPrimaryKey: true, textAlign: 'Right',freeze: 'Left',},
    {field: 'EmployeeID',headerText: 'EmployeeID',width: 150,template: '#template'},
    {field: 'ShipName',headerText: 'ShipName',width: 300,minWidth: 50,maxWidth: 100},
    {field: 'ShipAddress',headerText: 'Ship Address',width: 270,freeze: 'Fixed',},
    {field: 'ShipCity',headerText: 'Ship City',width: 250,clipMode: 'EllipsisWithTooltip'}],
  });
  grid.appendTo('#Grid');

  var columnDropdown = new ej.dropdowns.MultiSelect({
    dataSource: grid.columns.map(column => column.field), // Provide column names here
    placeholder: 'Select Columns',
    mode: 'CheckBox',
    width: 200,
    change: onColumnSelectionChange // Event handler for column selection change
});
columnDropdown.appendTo('#columnDropdown');

function callAutoFitColumns() {
  const startIndexInput = document.getElementById('startIndex');
  const endIndexInput = document.getElementById('endIndex');
  const grid = document.getElementById('Grid').ej2_instances[0];

  grid.dataBound = function () {
  if (columnDropdown.value && columnDropdown.value.length) {
    grid.autoFitColumns(columnDropdown.value, parseInt(startIndexInput.value), parseInt(endIndexInput.value));
  }
 }
  grid.refresh();
}

function onColumnSelectionChange(args) {
  // Get selected columns
  var selectedColumns = columnDropdown.value;
  console.log('Selected Columns:', selectedColumns);
}

var clipDropdown = new ej.dropdowns.DropDownList({
  dataSource: ['Ellipsis', 'EllipsisWithTooltip', 'Clip'], // Provide column names here
  placeholder: 'Select ClipMode',
  width: 200,
  change: onClipModeChange // Event handler for column selection change
});
clipDropdown.appendTo('#clipDropdown');

function onClipModeChange(args) {
  const grid = document.getElementById('Grid').ej2_instances[0];
  grid.columns[3].clipMode = clipDropdown.value;
  grid.refresh();
}

  function toggleTextWrap() {
    var checkbox = document.getElementById("textWrapCheckbox");
    // var grid = document.getElementById("Grid"); // Replace "yourGridId" with the actual ID of your grid element

    if (checkbox.checked) {
        grid.allowTextWrap = true;
        grid.refresh();
    } else {
        grid.allowTextWrap = false;
        grid.refresh();
    }
  }

  var grid2 = new ej.grids.Grid({
    dataSource: complexData,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: {allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', newRowPosition: 'Top'},
    allowTextWrap: false,
    textWrapSettings: { wrapMode: 'Content' },
    allowGrouping: true,
    allowFiltering: true,
    filterSettings: { type: 'Excel' },
    allowPaging: true,
    allowReordering: true,
    pageSettings: { pageCount: 5 },
    height: 410,
    enableHover: false,
    allowResizing: true,
    dataBound: function () {
        // loadInputValues2();
        // const startIndex = parseInt(document.getElementById('startIndex2').value, 10) || 1;
        // const endIndex = parseInt(document.getElementById('endIndex2').value, 10) || 3;
        // document.getElementById('startIndex2').value = startIndex;
        // document.getElementById('endIndex2').value = endIndex;
        // grid2.autoFitColumns(['EmployeeID','Title', 'Address', 'Notes', 'UnitsInStock', 'HomePhone'], startIndex, endIndex);
    },
    resizeStart: function (args) {
      if (args.column.field === 'HomePhone') {
          args.cancel = true;
      }
      console.log('autofit stopped');
    },
    columns: [
    {field: 'EmployeeID', headerText: 'Header priority', width: 120, isPrimaryKey: true, textAlign: 'Right'},
    {field: 'Notes',headerText: 'Notes',width: 150, clipMode: 'EllipsisWithTooltip',minWidth: 100,maxWidth: 200},
    {
      headerText: 'stacked Header',
      columns: [
    {field: 'Title',headerText: 'Title',width: 125,textAlign: 'Right',},
    {field: 'UnitsInStock',headerText: 'UnitsInStock',width: 125, textAlign: 'Right',},
    {field: 'HomePhone',headerText: 'HomePhone',width: 125, textAlign: 'Right',},      ]},
    {field: 'Address',headerText: 'Address',width: 130, clipMode: 'Clip'},

    ],
    aggregates: [{
      columns: [{
              type: 'Sum',
              field: 'UnitsInStock',
              groupFooterTemplate: 'Total units: ${Sum}'
          },
          {
            type: 'Sum',
            field: 'UnitsInStock',
            footerTemplate: 'Total units available: ${Sum}'
          },
          {
              type: 'Max',
              field: 'UnitsInStock',
              groupCaptionTemplate: 'Maximum: ${Max}'
          }]
  }],
    });
  grid2.appendTo('#Grid2');

  var columnDropdown2 = new ej.dropdowns.MultiSelect({
    dataSource: ['EmployeeID', 'Notes', 'Title', 'UnitsInStock', 'HomePhone', 'Address'], // Provide column names here
    placeholder: 'Select Columns',
    mode: 'CheckBox',
    width: 200,
    change: onColumnSelectionChange2 // Event handler for column selection change
});
columnDropdown2.appendTo('#columnDropdown2');

function callAutoFitColumns2() {
  const startIndexInput2 = document.getElementById('startIndex2');
  const endIndexInput2 = document.getElementById('endIndex2');
  const grid2 = document.getElementById('Grid2').ej2_instances[0];

  grid2.dataBound = function () {
  if (columnDropdown2.value && columnDropdown2.value.length) {
    grid2.autoFitColumns(columnDropdown2.value, parseInt(startIndexInput2.value), parseInt(endIndexInput2.value));
  }
 }
  grid2.refresh();
}

function onColumnSelectionChange2(args) {
  // Get selected columns
  var selectedColumns = columnDropdown.value;
  console.log('Selected Columns:', selectedColumns);
}

var clipDropdown2 = new ej.dropdowns.DropDownList({
  dataSource: ['Ellipsis', 'EllipsisWithTooltip', 'Clip'], // Provide column names here
  placeholder: 'Select ClipMode',
  width: 200,
  change: onClipModeChange2 // Event handler for column selection change
});
clipDropdown2.appendTo('#clipDropdown2');

function onClipModeChange2(args) {
  const grid2 = document.getElementById('Grid2').ej2_instances[0];
  grid2.columns[3].clipMode = clipDropdown2.value;
  grid2.refresh();
}


  function toggleTextWrap2() {
    var checkbox = document.getElementById("textWrapCheckbox2");
    // var grid = document.getElementById("Grid"); // Replace "yourGridId" with the actual ID of your grid element

    if (checkbox.checked) {
        grid2.allowTextWrap = true;
        grid2.refresh();
    } else {
        grid2.allowTextWrap = false;
        grid2.refresh();
    }
  }
