import { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
  sort?: boolean;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  sort = false,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort() || !sort) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        variant="ghost"
        size="sm"
        className="data-[state=open]:bg-accent -ml-3 h-8"
      >
        <span>{title}</span>
      </Button>
    </div>
  );
}
