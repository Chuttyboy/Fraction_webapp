import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return(
            <div>
                {/* <!-- banner --> */}
<section class="inner-page-banner" id="home">
</section>
{/* <!-- //banner -->
<!-- page details --> */}
<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
			<Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">About Us</li>
	</ol>
</div>
{/* <!-- //page details -->
	<!--about-mid --> */}
    <section class="banner-bottom py-5" id="exp">
        <div class="container py-md-5">
	<h3 class="heading text-center mb-3 mb-sm-5">About More</h3>
            <div class="row mid-grids mt-lg-5 mt-3">
                <div class="col-md-5 content-w3pvt-img">
                    <img src="assets/image/ban1.jpg" alt="" class="img-fluid" />
                </div>
                <h1>TODO : DATERANGE</h1>


            </div>
            
        </div>
    </section>
            </div>
	
        )
    }
}
export default About