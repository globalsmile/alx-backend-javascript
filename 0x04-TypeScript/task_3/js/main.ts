/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';                // import everything from crud.js as CRUD

const row: RowElement = {                           // create an object called row with the type RowElement with the fields set to these values
    firstName: 'Guillaume',
    lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);        // create a const variable named newRowID with the type RowID and assign the value the insertRow command.

const updatedRow: RowElement = {                    // create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
    ...row,
    age: 23
};

CRUD.updateRow(newRowID, updatedRow);                  // call the updateRow command
CRUD.deleteRow(newRowID);                           // call the deleteRow command
