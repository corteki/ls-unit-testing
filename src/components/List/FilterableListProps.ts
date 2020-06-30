import { Hideable } from "../../core/interfaces/Hideable";
import { ListProps } from "./ListProps";

export type FilterableListProps = Hideable & Pick<ListProps, 'onClick'>;
