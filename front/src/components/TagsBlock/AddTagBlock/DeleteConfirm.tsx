import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

interface DeleteConfirmProps {
    open: boolean;
    handleOpenModal: () => void;
    action: () => void;
}

const DeleteConfirm: React.FC<DeleteConfirmProps> = ({ open, handleOpenModal, action }) => {
    const handleAction = () => {
        action();
        handleOpenModal();
    };

    return (
        <Dialog open={open} onClose={handleOpenModal}>
            <DialogTitle id="alert-dialog-title">
                {'Вы уверены, что хотите удалить тег?'}
            </DialogTitle>

            <DialogActions>
                <Button onClick={handleOpenModal}>Отмена</Button>
                <Button onClick={handleAction} autoFocus>
                    Да
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteConfirm;
