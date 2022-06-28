import React, { FC, FormEvent } from "react";
import { useDispatch } from "react-redux";
import useInput from "@/hooks/useInput";
import { setAuth } from "@/store/actions/authActions";

interface ILoginModal {
    active: boolean;
    handleClick: () => void;
}

const LoginModal: FC<ILoginModal> = ({ active, handleClick }) => {
    const [login, setLogin, clearLogin] = useInput("");
    const [password, setPassword, clearPassword] = useInput("");
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setAuth(true));
        handleClick();
        clearLogin();
        clearPassword();
    };

    return (
        <div
            role='button'
            className={active ? "modal active" : "modal"}
            tabIndex={-1}
            onClick={handleClick}
            onKeyPress={() => {}}
        >
            <div
                className='modal__content'
                onClick={(e) => e.stopPropagation()}
                onKeyPress={() => {}}
                tabIndex={-1}
                role='button'
            >
                <form className='modal__form' onSubmit={handleSubmit}>
                    <h2 className='modal__title'>Авторизация</h2>
                    <label htmlFor='' className='modal__label'>
                        <input
                            onChange={setLogin}
                            className='modal__input'
                            value={login}
                            placeholder='Введите логин'
                            type='text'
                            name='login'
                            required
                        />
                    </label>
                    <label htmlFor='' className='modal__label'>
                        <input
                            onChange={setPassword}
                            className='modal__input'
                            value={password}
                            placeholder='Введите пароль'
                            type='text'
                            name='password'
                            required
                        />
                    </label>

                    <button type='submit' className='modal__btn btn'>
                        Авторизоваться
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
