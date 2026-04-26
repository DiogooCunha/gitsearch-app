import type { ReactElement } from "react";
import { Li, NavLink } from "./styles";
import type { SidebarItemType } from "../model/items"

interface SidebarItemProps {
    item: SidebarItemType;
}

const SidebarItem = ({ item }: SidebarItemProps): ReactElement => {
    return (
        <Li>
            <NavLink to={item.href}>
                <item.icon width={20} height={20} />
                {item?.name}
            </NavLink>
        </Li>
    );
};

export default SidebarItem;