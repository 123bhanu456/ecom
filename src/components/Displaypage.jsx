import React, { useContext } from 'react';
import { Addtoc } from './Contexts';
import './Display.css';
import { Footer } from './Footer';


function Displaypage(){
    const { Proddis } = useContext(Addtoc);
    const {AddCart}=useContext(Addtoc);
    const Items=[...Proddis];
    return (
      <div >
        {Items.map((item) => {
         const { id, title, description, price,img} = item;
           return(
               <div className='DISDIV'>
            <div key={id} className='containerDiv'>
                      <div className='imgdiv'>
                        <img className='img'
                        src={img}
                        alt=""
                      />
                        </div>
                        <div className='title-desc'>
                            <p className='font'>{title}</p>
                            <p className='font'>{description}</p>
                        </div>

                        <div className='price-addCart'>
                           <span className='font'>{price}$</span> 
                           <span><i className="fa-sharp fa-solid fa-cart-shopping add" onClick={()=>AddCart(item)}></i></span>
                        </div>
                       
                    </div>
                    <div className='extraCont'>
              <div className='incon'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptatem delectus modi quibusdam, veniam ut, porro nemo sint architecto veritatis harum. Quaerat fugit doloribus, dolore voluptatum tempore sit nihil modi!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est totam nihil quas. Nobis sapiente nemo ducimus ex nisi consequuntur quia sunt delectus maiores, eligendi, atque laborum natus vero! Porro!
        </div>

        <div className='incon'>
          <div className='exd'>RATING:</div>
            <div  className='exd'> DISCOUNT:</div>
            <div className='exd'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius libero neque ratione quibusdam totam blanditiis velit non deleniti deserunt facilis. Nulla quas porro corporis tempore ratione vitae illum enim ipsum.</div>

          
        </div>
                </div>
          
                    </div>

                    
           )
        })}

           <Footer/>
      </div>
    
      
       
    );
  }
 
            
            
    



export {Displaypage};