export type CustomListItemProps = {
  id: string;
  title: string;
  subtitle?: string;
  onRemove: (id: string) => void;
};
