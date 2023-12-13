import React from 'react'
import './Gold.css'


const Gold = () => {
  return (
    <> 
    <div>

        <div className="container">
            <div className="first-div">
                <p className='spot-rate'>SPOT RATE</p>
                <hr className='hrtag' />
                <div className="low-high">
                    <div className="low">
                        <button className='lowbtn'>low</button>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1200px-Red_Arrow_Down.svg.png" alt="" style={{marginLeft:'10px'}} width={15} height={15}  />
                        <p className='numb'>1813.06</p>
                    </div>
                    <div className="high">
                        <button className='highbtn'>high</button>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Green_Arrow_Up.svg" alt="" style={{marginLeft:'10px'}} width={15} height={15}  />
                        <p className='numb'>1813.06</p> 
                    </div>
                    
                </div>
                <div className="buy-sell">
                        <div className="buy">
                            <button className='buybtn'>$</button>
                            <p className='buyoz'>buy <span>oz</span></p>
                        </div>
                        <div className="sell">
                            <button className='sell-btn'>$</button>
                            <p className='sell-oz'>buy <span>oz</span></p>
                        </div>
                       
                       
                    </div>
                    <div className="gold-silver">
                        <div className="gold">
                            <h3 className='gold'>gold</h3>
                            <button className='numbred'>1800.13</button>
                            <button className='numbgreen'>1800.13</button>
                        </div>
                        <div className="silver">
                            <h3 className='gold'>silver</h3>
                            <button className='numbred1'>1800.13</button>
                            <button className='numbgreen1'>1800.13</button>
                        </div>
                    </div>
                    <div className="buyers-seller">
                        <div className="buyers">
                            <p>buyers</p>
                        </div>
                        <div className="numbers">

                        <p className='number'>-0.270%</p>
                        </div>
                        <div className="seller">
                          <p className='sell'>seller</p>
                        </div>
                    </div>
                    <div className="line">
                        
                        <div className="line-parent">
                          
                          <div className="left-line"></div>
                           
                            <div className="right-line"></div>

</div>
                        <div className="sixand38">
                            <div className="62">
                                <p className='perc68'>62%</p>
                            </div>
                            <div className="38">
                                <div className="perc38">
                                    <p className='perc38'>38%</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>

            <div className="seconddiv">
                <div className='childone'>
                <div className="child2">
                       <div className='header-uae'>
                       <p>united arab emirates</p>
                       </div>
                       <div className='flag'>
                       <img  className='uaeimg' src="https://www.iconarchive.com/download/i109052/wikipedia/flags/AE-United-Arab-Emirates-Flag.1024.png" alt="" height={60} width={40} />
                       </div>
                       <div className='time'>
                       <p  className='uae-time'>10:06:58 pm</p>
                       <p className='uae-date'>25 aug 2023 <br />friday</p>
                       </div>
                    

                </div>

                <div className="child2">
                    <div className='header-uae'>

                        <p className=''>LONDON</p>
                    </div>
                        <div className="flag">
                        <img  className='uaeimg' src="https://cdn.iconscout.com/icon/free/png-256/free-united-kingdom-3596867-2998581.png" alt="" height={60} width={40} />
                        </div>
                        <div className="london-time">
                        <p  className='uae-time'>10:06:58 <br />  am</p>
                        </div>
                    

                </div>
                <div className="child2">
                       <div className="header-uae">
                       <p>new york</p>
                       </div>
                       <div className="flag">
                       <img  className='uaeimg' src="https://cdn-icons-png.flaticon.com/512/555/555526.png" alt="" height={60} width={40} />
                       </div>
                       <div className="newyork-time">
                       <p  className='uae-time'>10:06:58 <br />  am</p>

                       </div>
                    

                </div>
                </div>
               <div className="table">
               <div className="tablename">
                    <div className='tab1'>
                    <p className='metal'>METAL</p>
                    <p className='weight'>WEIGHT</p>
                    <p className='buy'>BUY <sup>aed</sup></p>
                    <p className='sell5'>SELL <span>aed</span></p>
                    </div>
                </div>
                <div className="gold1">
                <p className='gold2'>gold</p>
                    <p className='weight1'>1 gram</p>
                    <p className='buy1'>217.04 <sub>aed</sub></p>
                    <p className='sell1'>217.04 <span>aed</span></p>
                </div>
                <div className="gold1">
                <p className='gold2'>gold ten tona</p>
                    <p className='weight2'>1 gram</p>
                    <p className='buy2'>25,330 </p>
                    <p className='sell2'>25,330 </p>
                </div>

               <div className="gold1">
                <p className='gold2'>gold 995</p>
                    <p className='weight3'>1 kg</p>
                    <p className='buy3'>2,17,333</p>
                    <p className='sell3'>2,17,333 </p>
                </div>
            <div className="gold1">
                <p className='gold2'>silver</p>
                    <p className='weight4'>1 kg</p>
                    <p className='buy4'>2,17,333</p>
                    <p className='sell4'>2,17,333 </p>
                </div>


               </div>
               <div className='news'>
                <p>kowe the latest gold news, know  the latest gold know the latest gold news </p>
               </div>
                

            
            </div>
        </div>
        
    </div>
   
  </>
  )
}

export default Gold

