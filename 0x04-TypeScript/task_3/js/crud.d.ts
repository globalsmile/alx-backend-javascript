import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): RowID {
  return 0;
}

export function deleteRow(id: RowID): RowElement {
  return { firstName: '', lastName: '' };
}

export function update(id: RowID, row: RowElement): RowID {
  return 0;
}




export function updateRow(newRowID: RowID, updatedRow: RowElement) {
    throw new Error('Function not implemented.');
}

