/**
 * 
 */
/**
 * 
 */
















































function displayItems(filter_id) {
    let cvalue = getCookie("username")
    if (cvalue !== null && cvalue !== "") {
        if (localStorage.getItem("finalHTML") ===null) {
            document.getElementById("flexOutput").innerHTML = localStorage.getItem("finalHTML")

            let qtyArray = localStorage.getItem("qty").split(",")
            let prodArray = localStorage.getItem("productsArray").split(",")

            for (let i = 0; i < prodArray.length; i++) {
                document.getElementById(`i${prodArray[i]}`).value=qtyArray[i]
            }
        }
    }

    
    fetch("Data/Myproducts.json")
        .then((response) => response.json())
        .then((myobject) => {
            for (let k in myobject) {
                if (myobject[k].filter_id === filter_id) {  
                    let arr = myobject[k].products;
                    let productHTML = "";

                    for (let j in arr) {
                        productHTML += displayProduct(arr[j])
                    }

                    let myRows = document.querySelectorAll(".myRow");
					
					for (let o in myRows){
						myRows[o].innerHTML=""
					}
					document.querySelectorAll(".myRow")[0].innerHTML=productHTML
							
										var x=window.matchMedia("(max-width:400px)")
										
										
										myMediaOutput(x)
										
										function myMediaOutput(x)
										{
										
										if(x.matches)
										{
											
											document.querySelectorAll(".myRow")[0].style.height="1880px"	
										}
										else
										{
											
											x=window.matchMedia("(max-width:700px)")
											
											if(x.matches)
											{
											
											document.querySelectorAll(".myRow")[0].style.height="960px"
												
											}
											else
											{					
											
											x=window.matchMedia("(max-width:940px)")
											
												if(x.matches)
												{
													
													document.querySelectorAll(".myRow")[0].style.height="630px"		
												}
												
											}
											
										}
										
										
										
										}
										
										
										
										x.addEventListener("change",function(){
											                        
																	myMediaOutput(x)
														})
															
																
										
										

                    
                    
					
										
										
										
															
																
										
										
										
										document.querySelectorAll(".myRow")[0].style.display="flex"
										document.querySelectorAll(".myRow")[0].style.flexDirection="row"
										document.querySelectorAll(".myRow")[0].style.justifyContent="space-around"
										document.querySelectorAll(".myRow")[0].style.alignContent="space-around"
										document.querySelectorAll(".myRow")[0].style.flexWrap="wrap"
										document.querySelectorAll(".myRow")[0].style.padding="5px"
										document.querySelectorAll(".myRow")[0].style.paddingTop="0px"
										document.querySelectorAll(".myRow")[0].style.height="auto"
										
										
										
										
										let myBlocks=document.querySelectorAll(".myRow div")
										
										for(let i in myBlocks)
										{
											
											if(!(String(myBlocks[i].innerHTML)==="undefined")&&!(String(myBlocks[i].innerHTML)===""))
											{
											
											myBlocks[i].style.width="200px"
											myBlocks[i].style.height="300px"
											myBlocks[i].style.textAlign="center"
											myBlocks[i].style.borderRadius="3%"
											myBlocks[i].style.border="2px solid black"
											myBlocks[i].style.marginTop="10px"
											}						
										}
										
                                       let myTitle=document.querySelectorAll(".myRow H2")
									   
									   for(let k in myTitle){
										
										if(!(String(myTitle[k].innerHTML)==="undefined")&&!(String(myTitle[k].innerHTML)==="")){
											myTitle[k].style.fontSize="18px";
											myTitle[k].style.fontWeight="bold";
											myTitle[k].style.marginBottom="5px";
										}
									   }
										
										let myImages=document.querySelectorAll(".myRow img")
										
									
										
										for(let m in myImages)
										{
											
											if(!(String(myImages[m].innerHTML)==="undefined")&&(typeof(myImages[m])==="object"))
											{
											
										    
											myImages[m].style.width="150px"	
											myImages[m].style.height="150px"
											myImages[m].style.objectFit="cover"
											}
										}
										
										let mySpan=document.querySelectorAll(".myRow span")
										
										for(let n in mySpan)
										{
											
										if(!(String(mySpan[n].innerHTML)==="undefined")&&(typeof(mySpan[n])==="object"))
										{
										
										mySpan[n].style.float="left"
										mySpan[n].style.color="red"
										mySpan[n].style.margin="auto auto auto 10px"
										}
										}
										
										
										let myCartButton=document.querySelectorAll(".myRow button")
										
										for(let j in myCartButton)
										{
										if(!(String(myCartButton[j].innerHTML)==="undefined")&&(typeof(myCartButton[j])==="object"))
											{
											myCartButton[j].style.float="right"	
											myCartButton[j].style.margin="auto 10px auto auto"
											
											}
										}
										
										
								}	
							}
						})
						
				}		
						



		function displayProduct(product) {
		    return `<div id="p${product.product_id}" class="product-card">
		                <h2>${product.product_name}</h2>
		                <img src="${product.imgSrc}" class="img-responsive" alt="${product.product_name}">
		                <br>
		                <hr>
		                <span>₹${product.price}</span>
		                <button onclick="addToCart(${product.product_id}, '${product.product_name}', '${product.imgSrc}', ${product.price})">Add-to-cart</button>
		            </div>`;
		}

		function addToCart(product_id,product_name,imgSrc,price)
		{
			
			
			let cookieValue=getCookie("username")
			
			
			if(!(cookieValue==="")&&!(cookieValue===null))
			{
				
			let productsString=localStorage.getItem("productsArray")
				
			let prodArr=productsString.split(",")
			
			if(prodArr.indexOf(String(product_id))!=-1)
			{
				
				alert("Product already in cart")
			}
			else
			{
				
			productsString+=","+product_id
			
			let myContainer=document.getElementById("flexContainer")
			
			let newDiv=document.createElement("div")
			
			newDiv.id=product_id
			
			let productNameLabel=document.createElement("label")
			let productLabelText=document.createTextNode("Product Name:")
			productNameLabel.appendChild(productLabelText)
			
			newDiv.appendChild(productNameLabel)
			
			let nameSpan=document.createElement("span")
			let nameText=document.createTextNode(product_name)
			nameSpan.appendChild(nameText)
			nameSpan.style.marginLeft="20px"
			newDiv.appendChild(nameSpan)
			
			let myBr=document.createElement("br")
			newDiv.appendChild(myBr)
			
			let quantityLabel=document.createElement("label")
			let quanLabelText=document.createTextNode("Quantity:")
			quantityLabel.appendChild(quanLabelText)
			newDiv.appendChild(quantityLabel)
			
			
			localStorage.setItem("productsArray",productsString)
			
			let currentHTML=newDiv.innerHTML
			
			let inputHTML=`<input style="margin-left:10px;text-align:center;" type="number"  id="i${product_id}" value="1" onchange="populateQuantity()">`
			
			currentHTML+=inputHTML
			
			newDiv.innerHTML=currentHTML
			
			let myBr2=document.createElement("br")
			newDiv.appendChild(myBr2)
			
			let priceLabel=document.createElement("label")
			let priceText=document.createTextNode("Price:")
			priceLabel.appendChild(priceText)
			
			newDiv.appendChild(priceLabel)
			let priceSpan=document.createElement("span")
			let priceSpanText=document.createTextNode(`₹${price}`)
			priceSpan.style.marginLeft="90px"
			
			priceSpan.appendChild(priceSpanText)
			newDiv.appendChild(priceSpan)
			
			let myBr3=document.createElement("br")
			
			newDiv.appendChild(myBr3)
			
			let myHr=document.createElement("hr")
			
			newDiv.appendChild(myHr)
			
			
			
			let newDivInnerHTML=newDiv.innerHTML
			
			let myDelButton=`<button class="badge badge-pill badge-danger" style="padding:10px;" onclick="removeItem(${product_id})"><i class="bi bi-trash3-fill"></i></button>`
			
			newDivInnerHTML+=myDelButton
			
			newDiv.innerHTML=newDivInnerHTML

			let myButtons=document.getElementById("buttons")
			
			myContainer.insertBefore(newDiv,myButtons)
			
			
			
			let flexOutput=document.getElementById("flexOutput")
			
			flexOutput.replaceChild(myContainer,document.getElementById("flexContainer"))
			
			
			localStorage.setItem("finalHTML",flexOutput.innerHTML)
			

			populateQuantity()
			
			let newImgArr=localStorage.getItem("imgSrcs").split(",")
			newImgArr.push(imgSrc)
			localStorage.setItem("imgSrcs",newImgArr)
			
			let newPriceArr=localStorage.getItem("prices").split(",")
			newPriceArr.push(price)
			localStorage.setItem("prices",newPriceArr)
			
			
			}	
			
			
			}
			else
			{
				
			let uname=prompt("Introduce Yourself")
			if(!(uname===null)&&!(uname===""))
			{
			setCookie("username",uname)	
			
			localStorage.setItem("finalHTML","")	
			let productsArray=""
			localStorage.setItem("qty","")
						
			let cookieValue=getCookie("username")	
			productsArray=product_id
				
			localStorage.setItem("productsArray",productsArray)
			
			returnDiv=`<div id="flexContainer">
			           <H2>Welcome,${cookieValue}</H2>
					   <div id="${product_id}">
					   <label>Product Name:</label><span style="margin-left:20px;">${product_name}</span><br>
					   <label>Quantity:</label><input style="margin-left:10px;text-align:center;" type="number"  id="i${product_id}" value="1" onchange="populateQuantity()"><br>
					   <label>Price:</label><span style="margin-left:90px;">₹${price}</span><br>
					   <hr><button class="badge badge-pill badge-danger" style="padding:10px;" onclick="removeItem(${product_id})"><i class="bi bi-trash3-fill"></i></button></div><div id="buttons" style="background-color:none;background-image:none;border:none;"><button class="btn btn-danger" onclick="clearCart()" style="float:left;margin:auto auto auto 10px;">Clear Cart</button>
					   <button class="btn btn-success" style="float:right;margin:auto 10px auto auto;" onclick="checkOut()" >Check-Out</button></div></div>`
		    
			localStorage.setItem("finalHTML",returnDiv)
			
			let myPriceArray=new Array()
			myPriceArray.push(price)
			
			
			localStorage.setItem("prices",myPriceArray)
			
			let myImageSrcs=new Array()
			myImageSrcs.push(imgSrc)
			
			localStorage.setItem("imgSrcs",myImageSrcs)
			
			
			document.getElementById("flexOutput").innerHTML=returnDiv
			
			populateQuantity()
				
			
			}
			
			
			}

			}
			
			
			function checkOut() {
			    // Retrieve and parse data from localStorage
			    let myImgArr = localStorage.getItem("imgSrcs").split(",");
			    let qtyArr = localStorage.getItem("qty").split(",");
			    let priceArr = localStorage.getItem("prices").split(",");

			    // Initialize the table with headers
			    let myTable = `<table>
			        <tr>
			            <th class="table-product-heading">Product</th>
			            <th class="table-items-heading">Quantity</th>
			            <th class="table-items-heading">Price</th>
			            <th class="table-total-heading">Total</th>
			        </tr>`;
			    let grandTotal = 0;

			    // Loop through the arrays to populate the table rows
			    for (let i = 0; i < myImgArr.length; i++) {
			        let tot = Number(qtyArr[i]) * Number(priceArr[i]);
			        grandTotal += tot;
			        myTable += `<tr>
			            <td class="table-content-product">
			                <img src="${myImgArr[i]}" style="width:100px;height:100px;object-fit:cover;border:1px solid white;">
			            </td>
			            <td class="table-product-items">${qtyArr[i]}</td>
			            <td class="table-product-items">₹${priceArr[i]}</td>
			            <td class="table-product-total">₹${tot}</td>
			        </tr>`;
			    }

			    // Add the grand total row
			    myTable += `<tr>
			        <td colspan="3" style="text-align:center;">Grand Total</td>
			        <td class="total-total-heading">₹${grandTotal}</td>
			    </tr></table>`;

			    // Create the billing section with buttons
			    let billDiv = `<div id="billTable">
			        <h2>Your Final Bill:</h2>
			        ${myTable}
			    </div>
			    <div id="buttons2">
			        <button id="backToCart" class="btn btn-danger" onclick="goBack()">Back</button>
			        <button class="btn btn-success" id="pay" onclick="proceedPayment(${grandTotal})">Proceed To Pay</button>
			    </div>
			    <div id="bankInfo" class="bg-info"></div>`;

			    // Display the final bill
			    document.getElementById("finalBill").style.display = "block";
			    document.getElementById("finalBill").innerHTML = billDiv;
			}

			function goBack() {
			    document.getElementById("finalBill").innerHTML = "";
			    document.getElementById("finalBill").style.display = "none";
			}

			function proceedPayment(total) {
			    let cardDiv = `<img src="images/Visa.png">
			    <img src="images/MasterCard-Logo-1979-1990.png">
			    <img src="images/amex.svg">
			    <img src="images/Discover-Logo.png">`;
			    cardDiv += `<h4 style="margin:10px 10px auto auto">Amount Payable: ₹${total}</h4>`;

			    cardDiv += `<div style="width:510px;margin:auto">
			        <div style="float:left;margin:10px auto auto auto;">
			            <label>Card Number:</label>
			            <input type="text" style="width:50px;text-align:center;" maxlength="4">-
			            <input type="text" style="width:50px;text-align:center;" maxlength="4">-
			            <input type="text" style="width:50px;text-align:center;" maxlength="4">-
			            <input type="text" style="width:50px;text-align:center;" maxlength="4">
			        </div>`;
			    cardDiv += `<div style="margin:10px 10px auto auto;float:right;">
			        CVV/CVV2:
			        <input type="password" style="appearance:none;padding-left:15px;width:70px;background-image:url('images/lock-fill.svg');background-size:15px auto;background-position:1px 5px;background-repeat:no-repeat;" maxlength="3">
			    </div></div>`;
			    cardDiv += `<div style="margin:10px auto auto auto;clear:left;">
			        <label>Valid thru:</label>
			        <input type="text" style="width:40px;text-align:center;margin-top:10px;" maxlength="2">/
			        <input type="text" style="width:40px;text-align:center;margin-top:10px;" maxlength="2">
			    </div><hr style="margin:0px;padding:0px;">`;
			    cardDiv += `<button class="btn btn-success" onclick="paymentSuccessful()" style="float:right;margin-right:15px;">Confirm Payment</button>`;

			    document.getElementById("bankInfo").innerHTML = cardDiv;
			    $("#bankInfo").slideDown(3000);
			}

			function paymentSuccessful() {
			    alert("Thank you for shopping with us. Your order will be delivered shortly.");
			    clearCart();
			    document.getElementById("finalBill").innerHTML = "";
			    document.getElementById("finalBill").style.display = "none";
			}

			function clearCart() {
			    let d = new Date();
			    d.setMonth(d.getMonth() - 1);
			    document.cookie = "username=;expires=" + d.toUTCString() + ";path=/";
			    localStorage.setItem("productsArray", "");
			    document.getElementById("flexOutput").innerHTML = "";
			    localStorage.setItem("finalHTML", "");
			    localStorage.setItem("qty", "");
			    localStorage.setItem("prices", "");
			    localStorage.setItem("imgSrcs", "");
			}

			function populateQuantity() {
			    let prodArray = localStorage.getItem("productsArray").split(",");
			    let len = prodArray.length;
			    let qtyArr = new Array();

			    for (let k = 0; k < len; k++) {
			        let qtyInput = document.getElementById(`i${prodArray[k]}`);
			        if (qtyInput && qtyInput.value !== "") {
			            qtyArr[k] = qtyInput.value;
			        } else {
			            qtyArr[k] = 1;
			        }
			    }

			    localStorage.setItem("qty", qtyArr);
			}
			
			function removeItem(product_id)
{
	let productsString=localStorage.getItem("productsArray")
	let qty=localStorage.getItem("qty").split(",")
	
	let productsArray=productsString.split(",")
	
	let imgSrcArr=localStorage.getItem("imgSrcs").split(",")
	let priceArr=localStorage.getItem("prices").split(",")
	
	let removePosition=productsArray.indexOf(`${product_id}`)
	
	
	productsArray.splice(removePosition,1)
	qty.splice(removePosition,1)
	imgSrcArr.splice(removePosition,1)
	priceArr.splice(removePosition,1)
	
	
	localStorage.setItem("productsArray",productsArray)
	localStorage.setItem("qty",qty)
	localStorage.setItem("imgSrcs",imgSrcArr)
	localStorage.setItem("prices",priceArr)
	
	
	
	if(productsArray.length===0)
	{
		
		
		d=new Date()
		d.setMonth(d.getMonth()-1)
		document.cookie="username=;expires="+d.toUTCString()+";path=/"
		localStorage.setItem("productsArray","")
		document.getElementById("flexOutput").innerHTML=""
		localStorage.setItem("finalHTML","")
		localStorage.setItem("qty","")
		localStorage.setItem("imgSrcs","")
		localStorage.setItem("prices","")
	}
	else
	{
		let finalOutput=document.getElementById("flexOutput")
		let container=document.getElementById("flexContainer")
		
		let child=document.getElementById(`${product_id}`)
		container.removeChild(child)
		
		finalOutput.replaceChild(container,document.getElementById("flexContainer"))
		
		let finalHTML=finalOutput.innerHTML
		
	    document.getElementById("flexOutput").innerHTML=finalHTML
		localStorage.setItem("finalHTML",finalHTML)
		
		let qtyArray=localStorage.getItem("qty").split(",")
		
		let prodArray=localStorage.getItem("prodArray").split(",")
		
		for(let i=0;i<prodArray.length;i++)
			{
			document.getElementById(`i${prodArray[i]}`).value=qtyArray[i]
		}
		
	}
	
	}
function setCookie(cname,cvalue){
	let myCookie=cname+"="+cvalue
	
	let d=new Date()
	
	d.setMinutes(d.getMinutes()+3)
	
	document.cookie=myCookie+";expires="+d.toUTCString()+";path=/"
}

function getCookie(cname){
	let myCookie=cname+"="
	
	let allCookies=decodeURIComponent(document.cookie)
	
	let cookieArray=allCookies.split(";")
	
	for(let k=0;k<cookieArray.length;k++){
		if(cookieArray[k].indexOf(myCookie)!=-1){
			let cvalue=cookieArray[k].substring(cookieArray[k].indexOf("=")+1)
			
			if(cvalue===""){
				continue
			}
			
			else{
				return cvalue
			}
		}
		
		return ""
	}
}
