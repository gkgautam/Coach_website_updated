import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import back from './Social_icons/back.jfif';
function BaseHome() {


    return (
        <>
            <Navbar />
            <div className='container-fluid ' style={{ background: "url(./bg.jfif) no-repeat center" }} >
                <div className='container'  >
                    <div className='row container' >
                      <div className='row mt-5' style={{textAlign:'center', fontSize:'30px',fontWeight:'bold',letterSpacing:'.2px',lineHeight:'1.15' }}>
                      <h2>THE HOLIDAY COUNTDOWN</h2>
                      </div>
                      <div className='row ' style={{textAlign:'center' }}>
                      <h2 style={{fontWeight:'bold',letterSpacing:'.2px',lineHeight:'1.15', fontSize:'58px'}}>GIFTS STARTING AT $49</h2>
                      </div>
                      <div className='row' style={{textAlign:'center', fontFamily:'BemboMTPro-Regular', fontSize:'13.7142px' }}>
                        <p>Select styles (guaranteed to look good under the tree) for less.</p>
                        <p>Check back for new deals every day before our 12/19 noon EST shipping cutoff.</p>
                      </div>
                      <div className='row' style={{textAlign:'center', fontSize:'13px' }}>
                       <h3>SHOP NOW</h3>
                      </div>
                    </div>
                    <div className='row px-0' >
                        <div className='col-sm-3 container'  >
                        <div className='row'>
                            <img src='https://cms.coach.com/i/coach/1215-tabby-shoulder-bag?$poi$&w=2240&fmt=jpg&$qlt_med$'></img>
                        </div>
                        <div className='row'>
                        <div className='row'>
                          
                          <div className='col-sm-12 text-center mb-5 mt-2'>
                           <p>Shop Now</p>
                          </div>
                          
                       </div>
                        </div>
                        </div>
                        <div className='col-sm-3 container'  >
                        <div className='row'>
                            <img src='https://cms.coach.com/i/coach/1215-andie-shoulder-bag?$poi$&w=2240&fmt=jpg&$qlt_med$'></img>
                        </div>
                        <div className='row'>
                        <div className='row'>
                          
                          <div className='col-sm-12 text-center mb-5 mt-2'>
                           <p>Shop Now</p>
                          </div>
                          
                       </div>
                        </div>
                        </div>
                        <div className='col-sm-3 container '  >
                        <div className='row'>
                            <img src='https://cms.coach.com/i/coach/1215-flight-bag?$poi$&w=2240&fmt=jpg&$qlt_med$'></img>
                        </div>
                        <div className='row'>
                        <div className='row'>
                          
                          <div className='col-sm-12 text-center mb-5 mt-2'>
                           <p>Shop Now</p>
                          </div>
                          
                       </div>
                        </div>
                        </div>
                        <div className='col-sm-3 container'  >
                        <div className='row'>
                            <img src='https://cms.coach.com/i/coach/1215-slides?$poi$&w=2240&fmt=jpg&$qlt_med$'></img>
                        </div>
                        <div className='row'>
                        <div className='row'>
                          
                          <div className='col-sm-12 text-center mb-5 mt-2'>
                           <p>Shop Now</p>
                          </div>
                          
                       </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='container-fluid '  >
                <div className='container'  >
                    <div className='row container' >
                      
                      <div className='row ' style={{textAlign:'center' }}>
                      <h2 style={{fontWeight:'bold',letterSpacing:'.2px',lineHeight:'1.15', fontSize:'58px'}}>Last-minute gifts they'll love.</h2>
                      </div>
                      <div className='row' style={{textAlign:'center', fontSize:'13px' }}>
                       <div className='col-sm-6 my-3'><p><u>SHOP WOMEN'S GIFTS</u></p></div>
                       <div className='col-sm-6 my-3'><p><u>SHOP WOMEN'S GIFTS</u></p></div>
                      </div>
                    </div>
                    <div className='row px-0' >
                        <div className='col-sm-4 container'  >
                        <div className='row'>
                            <img src='https://cms.coach.com/i/coach/1206-gift-under-100?$poi$&w=1280&fmt=jpg&'></img>
                        </div>
                        <div className='row'>
                        <div className='row'>
                          
                          <div className='col-sm-12 text-center mb-5 mt-2'>
                          <p><u>SHOP GIFTS UNDER $100</u></p>
                          </div>
                          
                       </div>
                        </div>
                        </div>
                        <div className='col-sm-4 container'  >
                        <div className='row'>
                            <img src='https://cms.coach.com/i/coach/1206-gift-under-300?$poi$&w=1280&fmt=jpg&'></img>
                        </div>
                        <div className='row'>
                        <div className='row'>
                          
                          <div className='col-sm-12 text-center mb-5 mt-2'>
                          <p><u>SHOP GIFTS UNDER $300</u></p>
                          </div>
                          
                       </div>
                        </div>
                        </div>
                        <div className='col-sm-4 container '  >
                        <div className='row'>
                            <img src='https://cms.coach.com/i/coach/1206-gift-under-500?$poi$&w=1280&fmt=jpg&'></img>
                        </div>
                        <div className='row'>
                        <div className='row'>
                          
                          <div className='col-sm-12 text-center mb-5 mt-2'>
                           <p><u>SHOP GIFTS UNDER $500</u></p>
                          </div>
                          
                       </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default BaseHome;
