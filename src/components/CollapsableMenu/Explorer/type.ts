export interface ExplorerNode {
  name: string;
  type: "file" | "folder";
  children?: ExplorerNode[];
}
