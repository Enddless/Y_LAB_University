import css from "./styles.module.scss"
function MainPage() {
    return (
        <section className={css.container}>
            <h1 className={css.title}>Вход</h1>

            <form className={css.form} action="#" method="post">
                <div>
                    <label className={css.label}>Почта</label>
                    <input
                        className={css.input}
                        type="email"
                        name="email"
                        placeholder="Ввведите почту"
                        required
                    />
                </div>
                <div>
                    <label className={css.label}>Пароль</label>
                    <input
                        className={css.input}
                        type="password"
                        name="password"
                        placeholder="Введите пароль"
                        required
                    />
                </div>
                <button type="submit">  Войти  </button>
            </form>
        </section>
    )
}

export default MainPage
