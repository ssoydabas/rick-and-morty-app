export type DataTableFiltering = {
  columnName: string;
  title: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
};
