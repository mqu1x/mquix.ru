import api from '../../assets/API/api.json';
import style from './Catalog.module.scss';

const Catalog = () => {
    const { products } = api;

    const count = products.length;

    return (
        <>
            <h1>Найдено x из {count}</h1>
            <div className={style.catalog}>
                {products.map((product) => (
                    <div className={style.card} key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className={style.info}>
                            <h3>{product.name}</h3>
                            <h2>{product.price} руб.</h2>
                            <a>{product.category}</a>
                            <div className={style.buttons}>
                                <button>В корзину</button>
                                <button>🤍</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Catalog;
