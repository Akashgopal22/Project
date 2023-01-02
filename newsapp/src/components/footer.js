import React from 'react'

function Footer() {
  return (
    <footer class="site-footer bg-dark">
    <div class="container ">
      <div class="row">
        <div class="col-6">
          <h6>About</h6>
          <p class="text-justify text-white">
            The IACE, started in 2022 as a weekly, became a daily in 1889 and from then on has been steadily growing to the circulation of 15,58,379 copies  and a readership of about 22.58 lakhs.
            
            The IACE's independent editorial stand and its reliable and balanced presentation of the news have over the years, won for it the serious attention and regard of the people who matter in India and abroad.
            
            The IACE uses modern facilities for news gathering, page composition and printing. It is printed in seventeen centres including the Main Edition at Chennai (Madras) where the Corporate Office is based. The printing centres at Coimbatore, Bangalore, Hyderabad, Madurai, Noida, Visakhapatnam, Thiruvanathapuram, Kochi, Vijayawada, Mangalore, Tiruchirapalli, Kolkata, Hubli, Mohali, Allahabad and Kozhikode are connected with high speed data lines for news transmission across the country.</p>
        </div>

        <div class="col-3 ">
          <h6>Categories</h6>
          <ul class="footer-links foota">
            <li><a href="index.html"class="text-white">Home</a></li>
            <li><a href="political.html" class="text-white">Politics</a></li>
            <li><a href="world.html" class="text-white">World</a></li>
            <li><a href="bussiness.html" class="text-white">Business</a></li>
            <li><a href="travel.html"  class="text-white">Travel</a></li>
            <li><a href="technology.html" class="text-white">Technology</a></li>
            <li><a href="sport.html" class="text-white">Sport</a></li>
          </ul>
        </div>

        <div class="col-3">
          {/* <h6>Quick Links</h6> */}
          {/* <ul class="footer-links mt-2">
            <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook text-white fa-2x p-2"></i></a></i></li>
            <li><a href="https://twitter.com/i/flow/login"><i class="fa-brands fa-twitter text-white fa-2x p-2"></i></a></i></li>
            <li><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram text-white fa-2x p-2"></i></a></i></li>
            <li><a href="https://www.linkedin.com/login"><i class="fa-brands fa-linkedin text-white fa-2x p-2"></i></a></i></li>
          </ul> */}
        </div>
      </div>
      <hr/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <p class="copyright-text text-white">Copyright &copy; 2022 All Rights Reserved by </p>
        </div>
      </div>
    </div>
</footer>
 
  )
}

export default Footer