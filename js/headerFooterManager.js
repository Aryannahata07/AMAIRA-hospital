class SpecialHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
<style>
            

    .nav-dropdown {
    min-width: 180px;
    margin: 0;
    padding: 0;
    display: none;
    position: absolute;
    list-style: none;
}

.header
{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background: #FFFFFF;
}
.header.scrolled
{
	top: -48px;
}

.top_bar
{
	width: 100%;
	background: #283290;
}
.top_bar_content
{
	width: 100%;
	height: 48px;
	padding-left: 214px;
}
.top_bar_item
{
	margin-left: 33px;
}
.top_bar_item a
{
	font-size: 14px;
	color: #FFFFFF;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.top_bar_item:first-child
{
	margin-left: 37px;
}
.emergencies
{
	height: 100%;
	background: #ff0030;
	color: #FFFFFF;
	font-size: 14px;
	font-weight: 700;
	padding-left: 38px;
	padding-right: 38px;
}

.header_container
{
	width: 100%;
	background: #FFFFFF;
}
.header_content
{
	width: 100%;
	height: 103px;
}
.header.scrolled .header_content
{
	height: 80px;
}
.main_nav ul li
{
	display: inline-block;
}
.main_nav ul li:not(:first-child)
{
	margin-left: 32px;
}
.main_nav ul li a
{
	font-size: 16px;
	font-weight: 500;
	color: #323232;
}
.hamburger
{
	display: none;
	cursor: pointer;
}
.hamburger i
{
	font-size: 24px;
	color: #272727;
}

.logo-and-nav{
	display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
	gap: 150px;
}

.logo span
{
	color: #EF5A6F;
}
.logo_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
	gap: 20px;
}


.logo_image {
    max-width: 100px; /* Adjust the size to fit the box */
    height: auto;
    margin-bottom: 10px; /* Add space between the logo and the text */
}

.logo_line {
    text-align: center;
	

}

.logo_text {
    font-size: 30px; /* Adjust font size as needed */
    
	color: #003687;
}

.logo_sub
{
	font-size: 16px;
	font-weight: 400;
	color: #8f8e8e;
	padding-left: 3px;
	
}

.menu_container
{
	position: fixed;
	top: 0;
	right: -50vw;
	width: 50vw;
	height: 100vh;
	background: #FFFFFF;
	z-index: 101;
	-webkit-transition: all 0.6s ease;
	-moz-transition: all 0.6s ease;
	-ms-transition: all 0.6s ease;
	-o-transition: all 0.6s ease;
	transition: all 0.6s ease;
	visibility: hidden;
	opacity: 0;
}
.menu_container.active
{
	visibility: visible;
	opacity: 1;
	right: 0;
}
.menu
{
	position: absolute;
	top:150px;
	left: 0;
	padding-left: 15%;
}
.menu_inner
{
	width: 100%;
	height: 100%;
}
.menu_list
{
	-webkit-transform: translateY(1.5rem);
	-moz-transform: translateY(1.5rem);
	-ms-transform: translateY(1.5rem);
	-o-transform: translateY(1.5rem);
	transform: translateY(1.5rem);
	-webkit-transition: all 1000ms 400ms ease;
	-moz-transition: all 1000ms 400ms ease;
	-ms-transition: all 1000ms 400ms ease;
	-o-transition: all 1000ms 400ms ease;
	transition: all 1000ms 400ms ease;
	opacity: 0;
}
.menu_container.active .menu_list
{
	-webkit-transform: translateY(0px);
	-moz-transform: translateY(0px);
	-ms-transform: translateY(0px);
	-o-transform: translateY(0px);
	transform: translateY(0px);
	opacity: 1;
}
.menu_item
{
	margin-bottom: 5px;
}
.menu_item a
{
	font-family: 'Roboto', sans-serif;
	font-size: 36px;
	font-weight: 700;
	color: #272727;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.menu_item a:hover
{
	color: #ffb606;
}
.menu_close_container
{
	position: absolute;
	top: 86px;
	right: 79px;
	width: 21px;
	height: 21px;
	cursor: pointer;
	z-index: 10;
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	transform: rotate(45deg);
}
.menu_close
{
	top: 9px;
	width: 21px;
	height: 3px;
	background: #3a3a3a;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.menu_close::after
{
	display: block;
	position: absolute;
	top: -9px;
	left: 9px;
	content: '';
	width: 3px;
	height: 21px;
	background: #3a3a3a;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.menu_close_container:hover .menu_close,
.menu_close_container:hover .menu_close::after
{
	background: #EF5A6F;
}
.menu_extra
{
	position: absolute;
	left: 0;
	bottom: 0;
	padding-left: 15%;
	padding-bottom: 25px;
}
.menu_appointment a
{
	font-size: 13px;
	color: #283290;
}
.menu_emergencies
{
	font-size: 13px;
	color: #272727;
}
</style>
<header>
           <div class="top_bar" style="background-color: #EF5A6F">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="top_bar_content d-flex flex-row align-items-center justify-content-start">
                                <div class="top_bar_item"><a href="tel:918200850936"><b>For Emergency: +91 82008 50936</b></a></div>
                                <div class="emergencies  d-flex flex-row align-items-center justify-content-start ml-auto" style="background-color: #536493"><a href="tel:918200850936" style="color:white"><b>Book an Appointment</b></a></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

    
        <div class="logo-and-nav">
                        
                        <div class="logo_container_outer">
                        <div class="container">
                        <div class="row">
                        <div class="col">
                        <div class="logo_container">
                    <a href="#">
                        <div class="logo_content ">
                            <div class="logo d-flex flex-row align-items-center justify-content-center">
                                <img src="./AMIRA_LOGO-removebg-preview.png" alt="amira logo" class="logo_image" >
                            </div>
                            <div class="logo_line">
                                <div class="logo_text"><b>AMAIRA</b></div>
                                <div class="logo_sub"><b>Urology & Fertility Care</b></div>
                            </div>
                        </div>
                    </a>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
            <div class="header_area">
                <div class="main_header_area animated">
                    <div class="container">
                        <nav id="navigation1" class="navigation">
                            <div class="nav-toggle"></div>
                            <div class="nav-menus-wrapper">
                                <ul class="nav-menu align-to-right">
                                    <li><a href="index.html">Home</a></li>
                                    <li>
                                        <a href="about.html">About</a>
                                        <ul class="nav-dropdown">
                                            <li><a href="about.html">About Amaira</a></li>
                                            <li><a href="about.html#yashvaidya">Dr. Yash Vaidya</a></li>
                                            <li><a href="about.html#nishavaidya">Dr. Nisha Vaidya</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                        <ul class="nav-dropdown">
                                            <li>
                                                <a href="Urology.html">Urology</a>
                                                
                                                        
                                            </li>

                                            <li>
                                                <a href="Infertility.html">Infertility Services</a>
                                                
                                            </li>
                                            
                                            <li>
                                                <a href="Obstetrics-&-Gynecology-Services.html">Other Obstetrics & Gynecology</a>
                                                
                                            </li>
                                        </ul>

                                    </li>
                                    
                                    <li>
                                        <a href="Patient-Care.html">Patient Care</a>
                                        <ul class="nav-dropdown">
                                            
                                            <li><a href="Patient-Care.html#RF">Room Facilities</a></li>
                                            <li><a href="Patient-Care.html#Insurance">Insurance & Mediclam</a></li>
                                        </ul>
                                    </li>
                                                
                                    <li>
                                        <a href="Gallery.html">Gallery</a>
                                        <ul class="nav-dropdown">
                                            <li><a href="Gallery.html#Video">Video</a></li>
                                            <li><a href="Hospital-Images.html">Hospital Images</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
									</li>
                                    <li><a href="blog.html">Blog</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            
        </div>
    </header>
          
    `;
    }
}
class SpecialFooter extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
       <!-- Footer -->

        <footer class="footer">
            <div class="footer_container">
                <div class="container">
                    <div class="row">

                        <!-- Footer - About -->
                        <div class="col-lg-4 footer_col">
                            <div class="footer_about">
                                <div class="footer_logo_container">
                                    <a href="#" class="d-flex flex-column align-items-center justify-content-center">
                                        <div class="footer_logo_content">
                                            <div class="footer_logo d-flex flex-row align-items-center justify-content-center ">
                                                    <img src="./AMIRA_LOGO-removebg-preview.png" alt="amira logo" class="logo_image" >
                                                    <div class="logo_line">
                                                        <div class="footer_logo_text"><b>AMAIRA</b></div>
                                                    
                                                    <div class="logo_sub"><b>Urology & Fertility Care</b></div>
                                                </div>
                                            </div>
                                            </div>
                                    </a>
                                </div>
                                <div class="footer_about_text">
                                    <p>Amaira Urology and Fertility Care took its inception in the year 2020 in the heart of the city at Majuragate. It has a Fully equipped OT with a C-Arm, laser and premium endoscopy unit.</p>
                                </div>
                                <ul class="footer_about_list">
                                    <li><div class="footer_about_icon" style="background-color: #EF5A6F"><img src="images/phone-call.svg" alt=""></div><span>+91 82008 50936</span></li>
                                    <li><div class="footer_about_icon" style="background-color: #EF5A6F"><img src="images/envelope.svg" alt=""></div><span>info@amairaurofertilitycaresurat.com</span></li>
                                    <li><div class="footer_about_icon" style="background-color: #EF5A6F"><img src="images/placeholder.svg" alt=""></div><span>201, Accron Trade Centre, Besides New SIDS Hospital, Civil Char Rasta, Majura Gate, Surat.</span></li>
                                </ul>
                            </div>
                        </div>

                        <!-- Footer - Links -->
                        <div class="col-lg-4 footer_col">
                            <div class="footer_links footer_column">
                                <div class="footer_title">Useful Links</div>
                                <ul>
                                    <li><a href="Dr. Yash Vaidya.html">Dr. Yash Vaidya</a></li>
                                    <li><a href="Dr. Nisha Vaidya.html">Dr. Nisha Vaidya</a></li>
                                    <li><a href="Surgery.html#Ureteric-Stones">Ureteric Stones</a></li>
                                    <li><a href="Surgery.html#Blader-Stones">Blader Stones</a></li>
                                    <li><a href="Surgery.html#Antegrade-PCNL">Antegrade PCNL</a></li>
                                    <li><a href="Surgery.html#ESWL">ESWL</a></li>
                                    <li><a href="Surgery.html#PCNL">PCNL</a></li>
                                    <li><a href="Surgery.html#Mini-PCNL">Mini PCNL</a></li>
                                    <li><a href="Surgery.html#Ultra-Mini-PCNL">Ultra Mini PCNL</a></li>
                                    <li><a href="Surgery.html#RIRS">RIRS</a></li>
                                    <li><a href="Urinary-Kidney-Stone-Treatment.html">Urinary / Kidney Stone Treatment</a></li>
                                    <li><a href="Laser-Treatment-for-Kidney-Stones.html">Laser Treatment for Kidney Stones</a></li>
                                </ul>
                            </div>
                        </div>

                        <!-- Footer - News -->
                        <div class="col-lg-4 footer_col">
                            <div class="footer_links footer_column">
                                <div class="footer_title">Useful Links</div>
                                <ul>
                                    <li><a href="Uro-Oncology.html">Uro-Oncology</a></li>
                                    <li><a href="Urethral-Stricture.html">Urethral Stricture</a></li>
                                    <li><a href="Urinary-Cancer-Treatment.html">Urinary Cancer Treatment</a></li>
                                    <li><a href="Urethral-Stricture.html">Urethral Stricture</a></li>
                                    <li><a href="Male-Infertility.html">Male Infertility</a></li>
                                    <li><a href="Prostate-Cancer.html">Prostate Cancer</a></li>
                                    <li><a href="Prostate-Surgery.html">Prostate Surgery</a></li>
                                    <li><a href="Erectile-Dysfunction.html">Erectile Dysfunction</a></li>
                                    <li><a href="Female-Urinary-Incontinence.html">Female Urinary Incontinence</a></li>
                                    <li><a href="Interstitial-Cystitis.html">Interstitial Cystitis</a></li>
                                    <li><a href="Overactive-Bladder.html">Overactive Bladder</a></li>
                                    <li><a href="Vesicovaginal-Fistula.html">Vesicovaginal Fistula</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      `;
   }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);