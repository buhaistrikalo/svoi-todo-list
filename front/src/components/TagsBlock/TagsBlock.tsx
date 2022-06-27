import { FC, useState } from 'react';

import { Grid, IconButton, Typography, Alert, Button } from '@mui/material';
import { tagAPI } from 'services/TagsService';
import { ITag } from 'models/ITag';

import Iconify from 'components/iconify';

import TagButton from 'components/TagButton';
import './TagsBlock.css';
import DeleteConfirm from './AddTagBlock/DeleteConfirm';
import { useActions } from 'hooks/useActions';

interface TagsBlockProps {
    tags?: ITag[];
    selected?: number;
    maxWidth: string | number;
    onClick: (e: ITag) => void;
}

const TagsBlock: FC<TagsBlockProps> = ({ tags, selected, maxWidth, onClick }) => {
    const { removeSelectedTag } = useActions();
    const [removeTag] = tagAPI.useRemoveTagMutation();
    const [open, setOpen] = useState(false);
    const [deleteTag, setDeleteTag] = useState<ITag | null>(null);

    const handleDeleteTag = () => {
        if (deleteTag) removeTag(deleteTag);
        removeSelectedTag()
    };
    const handleOpenModal = () => {
        setOpen(!open);
    };
    const handleConfirmModal = (tag: ITag) => {
        setDeleteTag(tag);
        handleOpenModal();
    };

    return (
        <Grid sx={{ maxWidth }}>
            {tags &&
                tags.map((tag) => (
                    <TagButton
                        key={tag.id}
                        className="sidebar__tag-button"
                        onClick={() => onClick(tag)}
                        selected={selected === tag.id}>
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            direction="row">
                            <Grid item md={2} container justifyContent="center">
                                <Iconify
                                    icon="akar-icons:circle-fill"
                                    sx={{ color: tag.color, fontSize: 14 }}
                                />
                            </Grid>
                            <Grid item md={8}>
                                <Typography className="sidebar__tag-title">{tag.title}</Typography>
                            </Grid>
                            <Grid
                                item
                                md={selected === tag.id ? 2 : 1}
                                container
                                justifyContent="center">
                                {selected === tag.id && (
                                    <IconButton
                                        onClick={() => handleConfirmModal(tag)}
                                        disableRipple
                                        disableFocusRipple
                                        sx={{ color: '#000', padding: 0 }}>
                                        <Iconify icon="ic:outline-clear" sx={{ fontSize: 24 }} />
                                    </IconButton>
                                )}
                            </Grid>
                        </Grid>
                    </TagButton>
                ))}
            <DeleteConfirm open={open} handleOpenModal={handleOpenModal} action={handleDeleteTag} />
        </Grid>
    );
};

export default TagsBlock;
