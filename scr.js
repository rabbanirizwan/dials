let free= [{title:["Features","FREE PLAN","PRO-PLAN","ENTERPRISE PLAN"],
            cost:["INR 999","INR 4999"],
             check:["Feature1","Feature2","Feature3","Feature4","Feature5","Feature6","Feature7"],
            },
            {tick:"<i class='fas fa-check'></i>"},
            {cross:"<i class=fas fa-time'></i>"}]



function listing()
{


document.querySelector(".snip1214").innerHTML= `<div class="plan">
                        <h3 class="plan-title">Features</h3>
                        
                        <div class="plan-cost"><span class="plan-price">${free[0].title[0]}</span></div>
                        <ul class="plan-features">
                          <li><i class="fas fa-check"></i>${free[0].check[0]}</li>
                          <li><i class="fas fa-check"></i>${free[0].check[1]}</li>
                          <li><i class="fas fa-check"></i>${free[0].check[2]}</li>
                          <li><i class="fas fa-times"></i>${free[0].check[3]}</li>
                          <li><i class="fas fa-times"></i>${free[0].check[4]}</li>
                          <li><i class="fas fa-times"></i>${free[0].check[5]}</li>
                          <li><i class="fas fa-times"></i>${free[0].check[6]}</li>
                         </ul>
                        
                      </div>
`;


    

        document.querySelector(".snip1214").innerHTML+=`
<div class="plan">
                        <h3 class="plan-title">${free[0].title[1]}</h3>
                        <div class="plan-cost"><span class="plan-price">${free[0].cost[0]}</span></div>
                        <ul class="plan-features">
                          <li><i class="fas fa-check"></i>${free[0].sign[1]}</li>
                          <li><i class="fas fa-check"></i>${free[0].sign[1]}</li>
                          <li><i class="fas fa-check"></i>${free[0].sign[1]}</li>
                          <li><i class="fas fa-times"></i>${free[0].sign[1]}</li>
                          <li><i class="fas fa-times"></i>${free[0].sign[1]}</li>
                          <li><i class="fas fa-times"></i>${free[0].sign[1]}</li>
                          <li><i class="fas fa-times"></i>${free[0].sign[1]}</li>
                                                    </ul>
                        <div class="plan-select"><a href="">Select Plan</a></div>
                      </div>
`;

        document.querySelector(".snip1214").innerHTML+=`
<div class="plan">
                        <h3 class="plan-title">${free[0].title[2]}</h3>
                        <div class="plan-cost"><span class="plan-price">${free[0].cost[1]}</span></div>
                        <ul class="plan-features">
                          <li><i class="fas fa-check"></i>${free[0].sign[0]}</li>
                          <li><i class="fas fa-check"></i>${free[0].sign[0]}</li>
                          <li><i class="fas fa-check"></i>${free[0].sign[0]}</li>
                          <li><i class="fas fa-times"></i>${free[0].sign[1]}</li>
                          <li><i class="fas fa-times"></i>${free[0].sign[1]}</li>
                          <li><i class="fas fa-times"></i>${free[0].sign[1]}</li>
                          <li><i class="fas fa-times"></i>${free[0].sign[1]}</li>
                                                    </ul>
                        <div class="plan-select"><a href="">Select Plan</a></div>
                      </div>
`;
   document.querySelector(".snip1214").innerHTML+=`
<div class="plan">
                        <h3 class="plan-title">${free[0].title[3]}</h3>
                        <div class="plan-cost"><span class="plan-price"></span></div>
                        <ul class="plan-features">
                          <li><i class="fas fa-check"></i>${free[0].sign[0]}</li>
                          <li><i class="fas fa-check"></i>${free[0].sign[0]}</li>
                          <li><i class="fas fa-check"></i>${free[0].sign[0]}</li>
                          <li><i class="fas fa-times"></i>${free[0].sign[0]}</li>
                          <li><i class="fas fa-times"></i>${free[0].sign[0]}</li>
                          <li><i class="fas fa-times"></i>${free[0].sign[0]}</li>
                          <li><i class="fas fa-times"></i>${free[0].sign[0]}</li>
                                                    </ul>
                        <div class="plan-select"><a href="">Select Plan</a></div>
                      </div>
`;




    }


    let subCategory = [
        
        {img:"whatdo.jpg"}
        
        
        ];

    function init()
{

for(let i = 0 ;i<=10;i++)
{
     document.querySelector(".container1").innerHTML += `<div class="first">
    <div class=" serviceimg-right shadow" style="background-image:url(${subCategory[0].img})"></div>
 
                                        <div class=" service-text shadow">
                                            <h2>Restaurants</h2>
                                            <p>Order Online </p>
                                            <p>Book Table</p>
                                            <p>Trending</p>
                                            <p>more...</p>
                                        </div>          
     
     </div>`;

     
}

    


}