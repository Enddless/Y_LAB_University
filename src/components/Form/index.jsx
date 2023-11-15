import { useEffect, useState } from "react"
import css from "./styles.module.scss"
import { validateEmail, validatePassword } from "../../functions/validate"

function Form() {
    const [changeEmail, setChangeEmail] = useState("")
    const [changePassword, setChangePassword] = useState("")
    const [errorEmail, setErrorEmail] = useState()
    const [errorPassword, setErrorPassword] = useState()
    const [isValidForm, setIsValidForm] = useState(false)
    const [disabledButtun, setDisabledButton] = useState(true)
    const [user, setUser] = useState("")



    useEffect(() => {
        const checkEmail = validateEmail(changeEmail)
        const checkPassword = validatePassword(changePassword)
        if (checkEmail && checkPassword) {
            setIsValidForm(true)
            setDisabledButton(false)
        } else {
            setIsValidForm(false)
            setDisabledButton(true)
        }

        if (checkEmail) { setErrorEmail(true) } else { setErrorEmail(false) }
        if (checkPassword) { setErrorPassword(true) } else { setErrorPassword(false) }
    }, [changeEmail, changePassword])


    const handleSubmitForm = (event) => {
        event.preventDefault();

        const API_URL = 'https://jsonplaceholder.typicode.com/users/';

        const postData = () => {
            fetch(API_URL)
                .then(response => response.json())
                .then((response) => {
                    const userData = response.find((user) => user.email === 'Sherwood@rosamond.me')
                    setUser(userData)
                })
                .catch(error => console.log("Ошибка -> ", error))
        }
        postData();
    }

    return (
        <section className={css.container}>
            <p>Перед началом: Коллеги, в этой форме есть валидации на количество символов в пароле, и на ввод символов в почте. Для демонстрации отправки формы введите, пожалуйста, почту Sherwood@rosamond.me </p>
            <p>Эта форма отправляет запрос на фэйковый сервис,в котором есть пользователи.</p>
            <h1 className={css.title}>Вход</h1>

            <form className={css.form} action="#" method="post" onSubmit={handleSubmitForm}>
                <div className={css.inputContainer}>
                    <label className={css.label}>Почта</label>
                    <input
                        className={css.input}
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        value={changeEmail}
                        onChange={(e) => { setChangeEmail(e.target.value) }}
                    />
                    {!errorEmail && changeEmail !=="" && <p className={css.error}>Введите корректные данные</p>}
                </div>
                <div className={css.inputContainer}>
                    <label className={css.label}>Пароль</label>
                    <input
                        className={css.input}
                        type="password"
                        name="password"
                        placeholder="не меньше 4 символов"
                        value={changePassword}
                        onChange={(e) => setChangePassword(e.target.value)}
                    />
                    {!errorPassword  && changePassword !=="" && <p className={css.error}>Введите корректные данные</p>}
                </div>
                <button type="submit" disabled={disabledButtun} className={`${!isValidForm ? css.disabled : ""}`}>  Войти  </button>
            </form>

            {user &&
                <div className={css.info}>
                    <p>Вы вошли под пользователем: </p>
                    <p>{user.email}</p>
                    <p>{user.username}</p>
                </div>
            }
        </section>
    )
}

export default Form
