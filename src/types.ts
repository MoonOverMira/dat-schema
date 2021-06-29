export const SCHEMA_VERSION = 2;

export type ScalarType =
  | 'bool'
  | 'string'
  | 'u64'
  | 'u32'
  | 'u16'
  | 'u8'
  | 'i64'
  | 'i32'
  | 'i16'
  | 'i8'
  | 'f64'
  | 'f32';

export type ColumnType =
  | ScalarType
  // column is an array of unknown type
  | 'array'
  // row index (references column in same table)
  | 'row'
  // row index (references column in foreign table)
  | 'foreignrow';

export interface RefUsingRowIndex {
  table: string;
}

export interface RefUsingColumn {
  table: string;
  column: string;
}

export interface TableColumn {
  name: string | null;
  description: string | null;
  array: boolean;
  type: ColumnType;
  unique: boolean;
  localized: boolean;
  until: string | null;
  references: RefUsingRowIndex | RefUsingColumn | null;
}

export interface SchemaTable {
  name: string;
  columns: TableColumn[];
}

// interface SchemaEnum {
//   name: string;
//   enum: string[];
// }

export interface SchemaFile {
  version: number;
  createdAt: number;
  tables: SchemaTable[];
}
