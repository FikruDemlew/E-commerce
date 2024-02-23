import React from "react"
export const Gallery = () => {
    return (<>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_620%2Cx_1589%2Cy_1598/MjAxNzQ0Mjg5MzgwNzA1OTM1/nike-lebron.jpg"  width={"600px"} height={"600px"} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i5.walmartimages.com/seo/George-Men-s-Synthetic-Casual-Pants_d200f157-8cdc-411e-a3c0-b840495ed157.723599c2c358b7a467e5e101880d3c82.jpeg" alt="Second slide" width={"100px"} height={"500px"}/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.barkersonline.co.nz/media/catalog/product/b/e/benson_waxed_cotton_jacket.png"  width={"300px"} height={"300px"} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </>)
}


