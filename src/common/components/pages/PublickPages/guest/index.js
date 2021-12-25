import style from "./guest.module.scss"
export default function Guest() {
    return (
        <div className={style.main}>
            <div className={style.title_bg}>
                <h1 className={style.title}>Добро пожаловать в Maken</h1>
                <div className={style.content}>
                    <h3 className={style.text}>Работайте в команде, управляйте задачами и выводите продуктивность на новый уровень вместе с Maken.</h3>
                    <img className={style.img} src="https://incrussia.ru/wp-content/uploads/2020/01/iStock-639198068.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}