import React, {useContext} from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);


  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" class="image_display"/>
          <img src={product.image} alt="" class="image_display"/>
          <img src={product.image} alt="" class="image_display"/>
          <img src={product.image} alt="" class="image_display"/>
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" class="main_image_display"/>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        {/* <div className="productdisplay-right star">
          <img src={star_icon} alt=""/>
          <img src={star_icon}  alt=""/>
          <img src={star_icon}  alt=""/>
          <img src={star_icon}  alt=""/>
          <img src={start_dull_icon} alt=""/>
          <p>(122)</p>
        </div> */}
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.old_price} VNĐ
          </div>
          <div className="productdisplay-right-price-new">
            {product.new_price} VNĐ
          </div>
        </div>
        <div className="productdisplay-right-description">
          Mô tả sản phẩm ở đây !
        </div>
        <div className="productdisplay-right-color">
          <h1>Chọn màu</h1>
          <div className="productdisplay-right-colors">
            <div>Đen</div>
            <div>Trắng</div>
            <div>Đỏ</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Thêm vào giỏ hàng</button>
        {/* <p className="productdisplay-right-category"><span>Category: </span>iphone, ipad,mac</p> */}
      </div>
    </div>
  )
}

export default ProductDisplay
