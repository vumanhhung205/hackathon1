import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faList, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './home.css'; 
import ProductList from './compoments'; 
import { products } from './products';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Total number of slides

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const plusSlides = (n: number) => {
    setCurrentSlide((prev) => (prev + n + totalSlides) % totalSlides);
  };

  const setSlide = (n: number) => {
    setCurrentSlide(n);
  };

  return (
    <div className="home_app">
      {/* Header */}
      <header className="header">
        <ul className="header-items">
          <li className="header-item">
            <a href="/" className="header-item-link logo">Rikkei_Shop</a>
          </li>
          <li className="header-item">
            <input className="search-bar" type="search" placeholder="Nhập để tìm kiếm" />
            <button className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </li>
          <li className="header-item">
            <a href="/" className="header-item-link header-cart">
              <FontAwesomeIcon icon={faShoppingCart} className="header-cart-icon" />
              Giỏ hàng
            </a>
          </li>
          <li className="header-item">
            <a className="header-item-link header-login" onClick={() => document.getElementById('login')!.style.display = 'block'}>
              Đăng nhập
            </a>
          </li>
          <li className="header-item">
            <a className="header-item-link header-signup" onClick={() => document.getElementById('signup')!.style.display = 'block'}>
              Đăng ký
            </a>
          </li>
        </ul>
      </header>

      {/* Banner */}
      <div className="banner">
      <div className=" fade">
        <img className="banner-images" src="images/banner/banner-1.jpg" alt="Banner-1" style={{ width: '60%' }} />
       
      </div>
      <div className="slides fade">
        <img className="banner-images" src="images/banner/banner-2.jpg" alt="Banner-2" style={{ width: '60%' }} />
      </div>
      <div className="slides fade">
        <img className="banner-images" src="images/banner/banner-3.jpg" alt="Banner-3" style={{ width: '60%' }} />
      </div>
      <div className="slides fade">
        <img className="banner-images" src="images/banner/banner-4.jpg" alt="Banner-4" style={{ width: '60%' }} />
      </div>
      <div className="slides fade">
        <img className="banner-images" src="images/banner/banner-5.jpg" alt="Banner-5" style={{ width: '60%' }} />
      </div>
      

        {/* Next and previous buttons */}
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>
      <br />

      {/* Dots */}
      <div className="slides-dot" style={{ textAlign: 'center' }}>
        {[0, 1, 2, 3, 4].map((dot, index) => (
          <span className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setSlide(index)} key={index}></span>
        ))}
      </div>

      {/* Main content */}
      <div className="container" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="grid">
          <div className="grid__row">
            <div className="grid__column-2">
              <nav className="category">
                <h3 className="category_heading">
                  <FontAwesomeIcon icon={faList} className="category_heading-icon" />
                  Danh mục sản phẩm
                </h3>
                <ul className="category-list">
                  <li className="category-item category-item--active">
                    <a id="all" className="category-item__link">Tất cả sản phẩm</a>
                  </li>
                  <li className="category-item">
                    <a id="thietBiDienTu" className="category-item__link">Thiết bị điện tử</a>
                  </li>
                  <li className="category-item">
                    <a id="sach" className="category-item__link">Sách</a>
                  </li>
                  <li className="category-item">
                    <a id="doTieuDung" className="category-item__link">Đồ tiêu dùng</a>
                  </li>
                  <li className="category-item">
                    <a id="thoiTrang" className="category-item__link">Thời trang</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="grid__column-10">
              <div className="product">
                <div id="product_items" className="grid__row">
                <div className="product">
  <div id="product_items" className="grid__row">

    <ProductList products={products} />
  </div>
</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="grid">
          <div className="grid__row">
            <div className="grid__column-2-4">
              <h3 className="footer_heading">Chăm sóc khách hàng</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="/" className="footer-item_link">Trung tâm trợ giúp</a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-item_link">Hướng dẫn mua hàng</a>
                </li>
              </ul>
            </div>
            <div className="grid__column-2-4">
              <h3 className="footer_heading">Giới thiệu</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="/" className="footer-item_link">Điều khoản</a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-item_link">Chính sách bảo mật</a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-item_link">Tuyển dụng</a>
                </li>
              </ul>
            </div>
            <div className="grid__column-2-4">
              <h3 className="footer_heading">Danh mục sản phẩm </h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="/" className="footer-item_link">Thời trang</a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-item_link">Đồ tiêu dùng</a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-item_link">Thiết bị điện tử</a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-item_link">Sách</a>
                </li>
              </ul>
            </div>
            <div className="grid__column-2-4">
              <h3 className="footer_heading">Theo dõi chúng tôi</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="/" className="footer-item_link">
                    <FontAwesomeIcon icon={faFacebook} className="footer-item_icon" />
                    Facebook
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-item_link">
                    <FontAwesomeIcon icon={faInstagram} className="footer-item_icon" />
                    Instagram
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-item_link">
                    <FontAwesomeIcon icon={faTwitter} className="footer-item_icon" />
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid__column-2-4">
              <h3 className="footer_heading">Đội ngũ phát triển</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <span className="footer-item_member">Trịnh Quốc Hai</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
