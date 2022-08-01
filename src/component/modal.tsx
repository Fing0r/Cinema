import React, { FC, FormEvent, memo, useCallback, useState } from "react";
import {
    Modal,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useInput from "@/shared/hooks/useInput";
import { useActions } from "@/shared/hooks/useActions";
import useTypedSelector from "@/shared/hooks/redux";
import { selectIsOpenLoginModal } from "@/store/selectors";

const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

const LoginModal: FC = memo(() => {
    const isOpenLoginModal = useTypedSelector(selectIsOpenLoginModal);
    const [login, setLogin, clearLogin] = useInput("");
    const [password, setPassword, clearPassword] = useInput("");
    const [isShowPassword, setShowPassword] = useState(false);
    const { setAuth, setActiveLoginModal } = useActions();

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!login || !password) return;
            setAuth(true);
            clearLogin();
            clearPassword();
            setActiveLoginModal();
        },
        [clearLogin, clearPassword, login, password, setActiveLoginModal, setAuth],
    );

    const handleCloseModal = () => setActiveLoginModal();

    const handleClickShowPassword = useCallback(() => {
        setShowPassword(!isShowPassword);
    }, [isShowPassword]);

    const handleMouseDownPassword = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }, []);

    return (
        <Modal
            open={isOpenLoginModal}
            onClose={handleCloseModal}
            aria-labelledby='parent-modal-title'
            aria-describedby='parent-modal-description'
        >
            <FormControl
                sx={{ ...style, width: 400, textAlign: "center" }}
                component='form'
                onSubmit={handleSubmit}
            >
                <Typography variant='h4' component='h2' fontWeight={700}>
                    Авторизация
                </Typography>
                <TextField
                    margin='dense'
                    id='outlined-login'
                    label='Логин'
                    value={login}
                    onChange={setLogin}
                />
                <FormControl variant='outlined' margin='dense'>
                    <InputLabel htmlFor='outlined-adornment-password'>Пароль</InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-password'
                        type={isShowPassword ? "text" : "password"}
                        value={password}
                        onChange={setPassword}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                >
                                    {isShowPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label='Password'
                    />
                </FormControl>
                <Button
                    variant='contained'
                    color='success'
                    type='submit'
                    size='large'
                    sx={{ textTransform: "unset", marginTop: "0.5rem" }}
                >
                    Авторизоваться
                </Button>
            </FormControl>
        </Modal>
    );
});

export default LoginModal;
