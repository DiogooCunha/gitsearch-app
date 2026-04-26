// colocar toda logica aqui

import type { ReactElement } from "react";
import { sidebarItems } from "../model/items";
import { Li, Wrapper } from "./styles";

const SidebarItem = (): ReactElement => {
    return (
        <Wrapper $open={true}>
            {sidebarItems?.map((item, index) => (
                <Li key={item?.name + index}>
                    <item.icon width={20} height={20} />
                    {item?.name}
                </Li>
            ))}
        </Wrapper>
    );
};

export default SidebarItem;