import styles from '../styles/styles.module.css';
import NoImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';

/* puedo imprimir los estilos para asegurarme que están referenciados correctamente */
// console.log(styles);

interface Product {
  id: number | string;
  title: string;
  img?:string;
}

interface ProductCardProps {
  product: Product;
}

/* Compound Components Pattern modulariza todo en pequeños componentes */
export const ProductImage = ({img=""}) => {
  return (
     <img src={img || NoImage} alt="Image" className={ styles.productImg}/>
  )
}

/* puedo pasar el type definition con un objeto custom y no crear otra interface, dado que solo es un argumento */
export const ProductTitle = ({title}:{title:string}) => {
  return (<span className={styles.productDescription}>{title}</span>);
}

interface ProductButtonsProps {
  counter:number;
  increaseBy: (value:number) => void;
}

export const ProductButtons = ({counter, increaseBy}:ProductButtonsProps) => {

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
}


export const ProductCard = ({product}:ProductCardProps) => {

   const { counter, increaseBy } = useProduct(0);
  
  return (
    <div className={ styles.productCard } >

      <ProductImage img={product.img}/>
      {/* <img src={product.img || NoImage} alt={product.title} className={ styles.productImg}/> */}

      <ProductTitle title={product.title}/>
        {/* <span className={ styles.productDescription}>{product.title}</span> */}
       
      <ProductButtons counter={counter} increaseBy={increaseBy} />
{/*         <div className={ styles.buttonsContainer}>
          <button 
            className={ styles.buttonMinus }
            onClick={ () => increaseBy(-1) } >-</button>

          <div className={ styles.countLabel}> {counter} </div>

          <button 
            className={ styles.buttonAdd }
            onClick={ () => increaseBy(+1) } >+</button>
        </div> */}
    </div>
  );
};
