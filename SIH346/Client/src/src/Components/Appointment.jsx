import React from 'react';
import doc1 from "./images/doc1.jpeg"
import doc2 from "./images/doc2.jpeg"
import doc3 from "./images/doc3.jpeg"
import doc4 from "./images/doc4.jpeg"
const Appointment = () => {
  return (
    <div style={{width:"80%"}}>
              <div className="search" style={{width:"90%",height:"8%",display:'flex',flexDirection:"row" ,justifyContent:"space-between",alignItems:"center",margin:"8px 0px 10px 10px"}}>
          <div className="bar" style={{ padding:"10px", width:"60%",height:"90%",borderRadius:"20px", backgroundColor:"#F4F4F4",display:"flex",flexDirection:"row",alignItems:"center"}}>
          <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder='Book your appointment'  style={{border:"none",background:"none",outline:"none"}}/>
          </div>
          <div className="profile" style={{width:"20%",display:"flex",flexDirection:"row",gap:"20px",justifyContent:"flex-end"}}>
          <span class="material-symbols-outlined">notifications</span>
          <span class="material-symbols-outlined">account_circle</span>
          </div>
        </div>
      <div className="r1" style={{ display: 'flex', backgroundColor: '#F6F9F7',height:"89vh" }}>
        <div className="c1" style={{ flex: 4, display: 'flex', justifyContent: 'space-around', maxHeight: '80vh' }}>
          <div className="scrollable" style={{ paddingTop: '2rem', width: '100%', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-around', overflowY: 'scroll', maxHeight: '100%' }}>
            {/* Doctor Box 1 */}
            <div className="box" style={{height:"68%", width:"40%", border: '3px solid green', borderRadius: '6px' }}>
              <div style={{ display: 'flex',justifyContent: 'center' }}>
                <img src={doc1} alt="" style={{height:"10rem"}} />
              </div>
              <div className="details" style={{ backgroundColor: '#fff', padding: '1rem' }}>
                <h3 className="name" style={{ margin: '0 1rem' }}>Vishal Kaira</h3>
                <p className="specialist" style={{ margin: '0 1rem' }}>Brain Surgeon</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <p className="time" style={{ display: 'flex', alignItems: 'center', margin: '0 1rem' }}>8:00 am to 10:00 am</p>
                  <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(232, 232, 232)', border: '1px solid rgb(232, 232, 232)', textAlign: 'center', padding: '0.5rem', borderRadius: '6px' }}>Know More</div>
                </div>
              </div>
            </div>
            {/* Doctor Box 2 */}
            <div className="box" style={{height:"68%", width:"40%", border: '3px solid green', borderRadius: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={doc2} alt="" style={{height:"10rem"}}/>
              </div>
              <div className="details" style={{ backgroundColor: '#fff', padding: '1rem' }}>
                <h3 className="name" style={{ margin: '0 1rem' }}>Vishal Kaira</h3>
                <p className="specialist" style={{ margin: '0 1rem' }}>Brain Surgeon</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <p className="time" style={{ display: 'flex', alignItems: 'center', margin: '0 1rem' }}>8:00 am to 10:00 am</p>
                  <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(232, 232, 232)', border: '1px solid rgb(232, 232, 232)', textAlign: 'center', padding: '0.5rem', borderRadius: '6px' }}>Know More</div>
                </div>
              </div>
            </div>
            {/* Doctor Box 3 */}
            <div className="box" style={{ height:"68%", width:"40%", border: '3px solid green', borderRadius: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={doc3} alt="" style={{height:"10rem"}} />
              </div>
              <div className="details" style={{ backgroundColor: '#fff', padding: '1rem' }}>
                <h3 className="name" style={{ margin: '0 1rem' }}>Vishal Kaira</h3>
                <p className="specialist" style={{ margin: '0 1rem' }}>Brain Surgeon</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <p className="time" style={{ display: 'flex', alignItems: 'center', margin: '0 1rem' }}>8:00 am to 10:00 am</p>
                  <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(232, 232, 232)', border: '1px solid rgb(232, 232, 232)', textAlign: 'center', padding: '0.5rem', borderRadius: '6px' }}>Know More</div>
                </div>
              </div>
            </div>
            {/* Doctor Box 4 */}
            <div className="box" style={{height:"68%", width:"40%", border: '3px solid green', borderRadius: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={doc4} alt="" style={{height:"10rem"}}/>
              </div>
              <div className="details" style={{ backgroundColor: '#fff', padding: '1rem' }}>
                <h3 className="name" style={{ margin: '0 1rem' }}>Vishal Kaira</h3>
                <p className="specialist" style={{ margin: '0 1rem' }}>Brain Surgeon</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <p className="time" style={{ display: 'flex', alignItems: 'center', margin: '0 1rem' }}>8:00 am to 10:00 am</p>
                  <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(232, 232, 232)', border: '1px solid rgb(232, 232, 232)', textAlign: 'center', padding: '0.5rem', borderRadius: '6px' }}>Know More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c2" style={{ backgroundColor: '#fff', border: '3px solid green', padding: '1rem 0', margin: '2rem', borderRadius: '0.8rem', flex: 2, display: 'flex', flexDirection: 'column', padding: '2rem 1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h1  style={{fontSize:"2rem",margin: 0}}>Book Appointment</h1>
          </div>
          <form action="" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1rem', margin: '0.5rem' }}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Full Name" name="name" id="name" style={{border:"none", margin: '0 0 1rem 0', padding: '0.5rem 0.5rem', borderRadius: '0.7rem', backgroundColor: '#F6F9F7' }} />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Example@gmail.com" name="email" id="email" style={{border:"none", margin: '0 0 1rem 0', padding: '0.5rem 0.5rem', borderRadius: '0.7rem', backgroundColor: '#F6F9F7' }} />
            <label htmlFor="time">Time</label>
            <select name="time" id="time" style={{border:"none", margin: '0 0 1rem 0', padding: '0.5rem 0.5rem', borderRadius: '0.7rem', backgroundColor: '#F6F9F7' }}>
              <option value="8:00 am to 10:00 am">8:00 am to 10:00 am</option>
              <option value="8:00 am to 10:00 am">8:00 am to 10:00 am</option>
              <option value="8:00 am to 10:00 am">8:00 am to 10:00 am</option>
              <option value="8:00 am to 10:00 am">8:00 am to 10:00 am</option>
            </select>
            <button style={{ backgroundColor: 'green', borderRadius: '10px', fontSize: '1rem', padding: '1rem 0', color: 'white' }}>Book Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
