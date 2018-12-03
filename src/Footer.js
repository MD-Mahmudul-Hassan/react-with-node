import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container bottom_border">
                    <div className="row">
                        <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                            <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p><i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35 </p>
                            <p><i className="fa fa-phone"></i>  +91-9999878398  </p>
                            <p><i className="fa fa fa-envelope"></i> info@example.com  </p>
                        </div>

                        <div className=" col-sm-4 col-md  col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                            <ul className="footer_ul_amrc">
                                <li><a href="https://google.com">ReactJS</a></li>
                                <li><a href="https://google.com">Node</a></li>
                                <li><a href="https://google.com">Mongo</a></li>                                
                            </ul>
                        </div>


                        <div className=" col-sm-4 col-md  col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                            <ul className="footer_ul_amrc">
                                <li><a href="https://google.com">PHP</a></li>
                                <li><a href="https://google.com">JAVA</a></li>                                
                                <li><a href="https://google.com">JavaScripts</a></li>
                            </ul>
                        </div>


                        <div className=" col-sm-4 col-md  col-12 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

                            <ul className="footer_ul2_amrc">
                                <li><a href="https://google.com"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="https://google.com">https://www.lipsum.com/</a></p></li>
                                <li><a href="https://google.com"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="https://google.com">https://www.lipsum.com/</a></p></li>
                                <li><a href="https://google.com"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="https://google.com">https://www.lipsum.com/</a></p></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <ul className="foote_bottom_ul_amrc">
                        <li><a href="https://google.com">Services</a></li>
                        <li><a href="https://google.com">Pricing</a></li>

                    </ul>
                    <p className="text-center">Copyright @2018 | Designed With by <a href="https://google.com">SJ Innovation LLC</a></p>
                </div>

            </footer>
        );
    }
}

export default Footer;