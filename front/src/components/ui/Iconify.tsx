import React from 'react';
import { Icon, IconProps } from '@iconify/react';

const Iconify: React.FC<IconProps> = (props) => {
    return (
        <div style={{ width: props.width, height: props.width, display: 'flex' }}>
            <Icon {...props} />
        </div>
    );
};

export default Iconify;
