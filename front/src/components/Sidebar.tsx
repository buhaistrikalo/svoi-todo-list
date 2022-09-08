import React from 'react';
import styled from 'styled-components';

import { COLORS } from 'theme/colors';

import UserBlock from 'components/UserBlock';
import Folder from 'components/Folder';
import { Divider } from 'components/ui';
import Iconify from './ui/Iconify';

const Menu = styled.div`
    width: 280px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Button = styled.button`
    background: none;
    border: none;

    display: flex;
    align-items: center;
    text-align: center;
    padding: 10px 16px 10px 12px;

    font-weight: bold;
    font-size: 14px;
    color: ${COLORS.primary.dark};

    cursor: pointer;

    transition: opacity 0.2s;
    :hover {
        opacity: 0.6;
    }
`;

const Sidebar = () => {
    return (
        <Menu>
            <div>
                <UserBlock name={USER.name} email={USER.email} img={USER.img} />

                <Folder title="Important" icon="codicon:star-full" color={COLORS.secondary.main} />
                <Folder title="Tasks" icon="ic:round-house-siding" color={COLORS.primary.main} />
                <Divider />
                <Folder
                    title="Task List"
                    icon="ant-design:unordered-list-outlined"
                    color={COLORS.primary.main}
                />
                <Folder
                    title="House List"
                    icon="ant-design:unordered-list-outlined"
                    color={COLORS.primary.main}
                />
            </div>
            <Button>
                <Iconify icon="akar-icons:plus" width="18" style={{ marginRight: 9 }} /> New List
            </Button>
        </Menu>
    );
};

export default Sidebar;

const USER = {
    name: 'Kirill Tcoi',
    email: 'kirill@ya.ru',
    img: 'https://sun9-west.userapi.com/sun9-50/s/v1/if1/PCgCyQYXVRMdPCALPhWx7_FZ8NViAE-tKoPiocPJcjTI2lvjkM1A6xZHMnmRSv45oylm_A7g.jpg?size=1280x853&quality=96&type=album',
};
