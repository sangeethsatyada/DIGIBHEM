function addbackimg()
      {
        let img1=""
      }
      let addbtn1=document.querySelectorAll(".addbtn");
      addbtn1.forEach((btn)=>{
        btn.innerHTML="<b>AddToCart</b><i class='bi bi-cart4'></i>";
      })
      function getiphone()
      {
        window.alert("Added to cart successfully");
        let image=document.getElementById("play").src;
        let ttl="IPHONE 14 PRO MAX";
        let price=98000;
        addtocarteachitem(image,ttl,price);
      }
      function s23()
      {
        window.alert("Added to cart successfully");
        let image=document.getElementById("s23").src;
        let ttl="SAMSUNG S23 ULTRA";
        let price=124999;
        addtocarteachitem(image,ttl,price);
      }
      function giveaway()
      {
        let name=document.getElementById("giveawayname").value;
        let mobile=document.getElementById("giveawaymobile").value;
        let email=document.getElementById("giveawayemail").value;
        if(name=="" || mobile=="" || email=="")
        {
        document.getElementById("giveawaymsg").innerHTML="Enter Details";
        document.getElementById("giveawaymsg").style.color="red";
        }
        else
        document.getElementById("giveawaymsg").innerHTML="Succesfully Entered Into to the giveaway";
      }
      let addbtn=document.querySelectorAll(".addbtn");
      let producttitle=document.getElementById("producttitle");   //producttitle
      let stars=document.getElementById("stars");    //rating stars
      let mrp=document.getElementById("original");
      let price=document.getElementById("price");
           function map()
           {
            let body=document.querySelector("body");
            let map=document.getElementById("mapshow");
            if(map.hidden==true)
            {
              map.hidden=false;
            }
            else
            {
              map.hidden=true;
            }
           }
           let log=document.getElementById("log");
            let sig=document.getElementById("sig");
            let signform=document.getElementById("ss");
            let loginform=document.getElementById("login");
           function sangee2()
           {
            log.style.backgroundColor="blue";
            sig.style.backgroundColor="white";
            if(signform.hidden==false)
            {
              signform.hidden=true;
            }
            if(loginform.hidden==true)
            {
              loginform.hidden=false;
            }
           }
           function sangee()
           {
             sig.style.backgroundColor="blue";
            log.style.backgroundColor="white";
            if(signform.hidden==true)
            {
              signform.hidden=false;
            }
            if(loginform.hidden==false)
              {
                loginform.hidden=true;
              }
           }
           let sangee3=document.getElementById("signup");
           function user()
           {
            if(sangee3.hidden==true)
            {
            sangee3.hidden=false;
            }
            else
            sangee3.hidden=true;
            if(signform.hidden==true)
            {
              signform.hidden=false;
            }
           }
           function show()
           {
            let pass=document.getElementById("pass");
            let pass1=document.getElementById("pass1");
            let eyeclose=document.getElementById("eyeopen");
            if(pass.type=="password")
            {
              pass.type="text";
              pass1.type="text";
              eyeclose.innerHTML='<i class="bi bi-eye"></i>';
            }
           
            else
            {
              pass.type="password";
              pass1.type="password";
              eyeclose.innerHTML='<i class="bi bi-eye-slash"></i>';
            }
           }
           function showl()
           {
            let passl=document.getElementById("lpass");
            let eyeclose=document.getElementById("eyeopenl");
            if(passl.type=="password")
            {
              passl.type="text";
              eyeclose.innerHTML='<i class="bi bi-eye"></i>';
            }
            else
            {
              passl.type="password";
              eyeclose.innerHTML='<i class="bi bi-eye-slash"></i>';
            }
           }
           function exit()
           {
            if(sangee3.hidden==false)
            sangee3.hidden=true;
           }
           let err=document.getElementById("err");
           function showtoast()
           {
            let pass=document.getElementById("pass").value;
            let pass1=document.getElementById("pass1").value;
            if(pass!=pass1)
            {
              err.innerHTML="Password doesn't match";
              err.style.color="red";
            }
            else if(pass=="" || pass1=="")
            {
              err.style.color="red";
              err.innerHTML="Enter required fields";
            }
            else if(name.value=="" && email.value=="" && pass.value=="" && pass1.value=="")
            {
              err.style.color="red";
              err.innerHTML="Enter required fields";
            }
            else
            {
            
              err.innerHTML="Registration succesfull";
              err.style.color="green";
              let place=document.getElementById("user");
            let name=document.getElementById("firstname").value;
            place.innerHTML=`Hi, Welcome ${name}`;
            place.style.top="30px";
            place.style.height="30px";
            place.style.width="200px";
            place.style.fontSize="20px";
            place.style.color="green";
            place.style.backgroundColor="black";
            }
           }
           let frequentitems=document.querySelectorAll(".product1");
           console.log(frequentitems);
           let detailsindividual=document.getElementById("details-individual");
           let placeimage=document.getElementById("placeimage")
           frequentitems.forEach(frequent => {
            frequent.addEventListener('click', function handleClick() {
              console.log("clicked");
              placeimage.src=frequent.src;
              if(frequent.src=="https://m.media-amazon.com/images/I/519bfX0ISVL._SX355_.jpg")
              {
                producttitle.innerHTML="Pigeon Aster Gas Stove 2 Burner with High Powered Brass Burner, Gas Cooktop with Glass Top and Powder Coated Body, black, standard (14266)";
                stars.innerHTML='<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>';
                mrp.innerHTML=5000;
                price.innerHTML=1999;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/510sqsUwdRL._SX522_.jpg")
              {
                producttitle.innerHTML="Yale YDME 50 NxT, Smart Door Lock with Biometric, Pincode, RFID Card & Mechanical Keys, Color- Black, for Home & Office (Free Installation)…";
                stars.innerHTML='<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>';
                mrp.innerHTML=15999;
                price.innerHTML=10748;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/31UISB90sYL._SX679_.jpg")
              {
                producttitle.innerHTML="Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White, GLS18I3FWAMC)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=58990;
                  price.innerHTML=32499;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/31OD2Jq6VYL._SX300_SY300_QL70_FMwebp_.jpg")
              {
                producttitle.innerHTML="Usha Bloom Daffodil Goodbye Dust Ceiling Fan 1250mm, Sparkle Golden and Brown";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=3775;
                  price.innerHTML=2999;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/51cv-A-cfYS._SY355_.jpg")
              {
                producttitle.innerHTML="Urban Furnishing Engineered Wooden Wenge Finish 3 Door Wardrobe";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=20099;
                  price.innerHTML=16099;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/41EcYoIZhIL._SY355_.jpg")
              {
                producttitle.innerHTML="V Guard Mixer Grinder, 750W, 3 Jars (Black Orange)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=5999;
                  price.innerHTML=5780;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/61D30mfoejL._SX355_.jpg")
              {
                producttitle.innerHTML="KIRFIZ Stainless Steel 2 Slice Auto Pop-up Toaster ,Sandwich Butter Bread Breakfast Machine Baking Cooking Toaster - 930W";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=8999;
                  price.innerHTML=4100;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/31rXtyHzxyL.jpg")
              {
                producttitle.innerHTML="Sunset Vista Designs Circle Bamboo Wind Chime, 26";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=6999;
                  price.innerHTML=4539;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/61TtV638UAL._SX355_.jpg")
              {
                producttitle.innerHTML="Gala E-Popular Spin Mop with Bucket,Blue,Extra Large,170380";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=1999;
                  price.innerHTML=1499;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/71I7-M6kcDL._SY355_.jpg")
              {
                producttitle.innerHTML="Polyresine Little Monk Budha Suitable for Home Décor, Gifting, Car Dashboard, Livng Room, Office";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=3999;
                  price.innerHTML=2500;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/21ki7Z1ZUrS._SX300_SY300_QL70_FMwebp_.jpg")
              {
                producttitle.innerHTML="SOHAM Wheel Base Store Display Dummy Female Mannequin (Large, Size 12)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=7999;
                  price.innerHTML=6489;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/51LvKiH5txL._SY355_.jpg")
              {
                producttitle.innerHTML="nal 2469 Pillar Tap Faucet  (Built-in Installation Type)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=2500;
                  price.innerHTML=2400;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/61BzwtmQptL._SY450_.jpg")
              {
                producttitle.innerHTML="beatXP Bolt Deep Tissue Massage Gun |  Pain Relief of Neck, Shoulder, Back, Foot for Men & Women Up to 1 Year Warranty (Black)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=4999;
                  price.innerHTML=1499;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/51hInlCq2IL._SY355_.jpg")
              {
                producttitle.innerHTML="Cello KleenoTelescopic Hardtile Brush, Pack of 1pc, Red";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=799;
                  price.innerHTML=459;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/513w75K0ffL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Lenovo IdeaPad 3 11th Gen Intel Core i3 15.6 FHD Thin & Light Laptop(8GB/512GB SSD/Windows 11/";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=36990;
                  price.innerHTML=59890;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/51ZmQLDGVOL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Dell Inspiron 7420 2in1 Touch Laptop,12th Gen Intel Core i3-1215U, 8GB/256GB SSD/14.0 (35.56Cms) FHD+";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=53990;
                  price.innerHTML=71740;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/711QykIMR4L._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="HP Laptop 15s, 12th Gen Intel Core i3-1215U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=56261;
                  price.innerHTML=40990;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/61xzutxSl8L._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen (16 GB/512 GB SSD/Win11 Home/4GB Graphics/RTX 2050)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=82999;
                  price.innerHTML=56990;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/71DBkrxqBDL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="ASUS Vivobook S15 OLED 2022, 15.6 39.62 cm FHD OLED, Intel Core Evo i5-12500H 12th Gen, Thin and";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=92990;
                  price.innerHTML=74990;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/61LNGJEMh0L._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Apple 2023 MacBook Pro Laptop M2 Pro chip with 10‑core CPU and 16‑core GPU: 33.74 cm (14.2-inch)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=210000;
                  price.innerHTML=199900;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/61Ph34V0YAL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 33.74 cm (16.2-inch)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=229990;
                  price.innerHTML=249900;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/51u9Q4IEnsL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Dell Vostro 3420 Laptop,Intel i5-1135G7/16GB/512GB SSD/14.0 (35.54cm)FHD, TÜV Rheinland Certified";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=75550;
                  price.innerHTML=52990;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/71Q6o3tg9dL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="HP Laptop 15, 13th Gen Intel Core i5-1335U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xᵉ";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=78477;
                  price.innerHTML=68480;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/7181raNEn1L._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="HP Victus [Smart Choice }Gaming Laptop 12th Gen Intel Core i5-12450H 15.6 FHD IPS (Windows 11 Home/16GB";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=88646;
                  price.innerHTML=68990;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/71tHNTGasKL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Honor MagicBook 14, AMD Ryzen 5 5500U 14-inch (35.56 cm) FHD IPS Anti-Glare Thin and Light Laptop";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=75999;
                  price.innerHTML=41990;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/71czGb00k5L._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Acer Aspire Lite 11th Gen Intel Core i3 Premium Metal Laptop (8GB RAM/512GB SSD/Windows 11 Home) AL15-";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=30990;
                  price.innerHTML=44990;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/41o-KkXEkSL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Lenovo IdeaPad Slim 3 Intel Core i3-1115G4 11th Gen 15.6 (39.62cm) FHD Laptop (8GB/256GB SSD/Win";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=49190;
                  price.innerHTML=33990;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/51u9Q4IEnsL._AC_UY327_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML=" Dell 14, Intel 12th Gen i5-1235U Laptop/8GB/512GB SSD/14.0 (35.56cm) FHD TÜV Rheinland Certified";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=83100;
                  price.innerHTML=52990;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/71tHNTGasKL._AC_UY327_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Honor MagicBook 14, AMD Ryzen 5 5500U 14-inch (35.56 cm) FHD IPS Anti-Glare Thin and Light Laptop";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=65999;
                  price.innerHTML=37990;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/71PFY+4vWrL._AC_UY327_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="HP Laptop 15s, 11th Gen Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=50697;
                  price.innerHTML=37990;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/71R-AObyPFL._AC_UY327_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="HP 255 G8 Notebook PC,AMD Ryzen 3 3250U, 15.6 inch(39.6cm) Anti-Glare HD Laptop/8GB RAM/512GB";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=37188;
                  price.innerHTML=29490;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/61amb0CfMGL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="OnePlus 11 5G (Eternal Green, 16GB RAM, 256GB Storage)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=71999;
                  price.innerHTML=61999;
              }

              else if(frequent.src=="https://m.media-amazon.com/images/I/610cjhPdq3L._AC_UY327_FMwebp_QL65_.jpg")
              {
                2
                alert("scrolldown");
                producttitle.innerHTML="Vivo Y100 5G (Pacific Blue, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=29999;
                  price.innerHTML=23999;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/61RZDb2mQxL._AC_UY327_FMwebp_QL65_.jpg")
              {
                3
                alert("scrolldown");
                producttitle.innerHTML="Samsung Galaxy S23 5G (Green, 8GB, 128GB Storage)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=89999;
                  price.innerHTML=74998;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/81WPIz1l5wL._AC_UY327_FMwebp_QL65_.jpg")
              {
                4
                alert("scrolldown");
                producttitle.innerHTML="realme narzo 50i Prime (Dark Blue 4GB RAM+64GB Storage) Octa-core Processor | 5000 mAh Battery";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=9999;
                  price.innerHTML=7599;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/81-JH9qHdfL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Nokia C12 Android 12 (Go Edition) Smartphone, All-Day Battery, 4GB RAM (2GB RAM + 2GB Virtual RAM) + 64GB";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=7499;
                  price.innerHTML=5699;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/61RBrScYUSL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Nokia 2660 Flip 4G Volte keypad Phone with Dual SIM, Dual Screen, inbuilt MP3 Player & Wireless FM Radio";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=5899;
                  price.innerHTML=4449;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/81LrmorQeQL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Oppo A78 5G (Glowing Black, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger|";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=21999;
                  price.innerHTML=18999;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/6175SlKKECL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="OnePlus Nord CE 3 5G (Aqua Surge, 8GB RAM, 128GB Storage)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=33450;
                  price.innerHTML=26998;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/61amb0CfMGL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="OnePlus 11 5G (Eternal Green, 16GB RAM, 256GB Storage)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=79999;
                  price.innerHTML=61999;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/61gdyDHr9ZL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Vivo Y27 (Burgundy Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=18999;
                  price.innerHTML=14999;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/810fCELNzvL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Itel P40+ (4GB RAM+128GB ROM, 8GB* RAM with Memory Fusion | 13MP AI Rear Camera | 7000mAh";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=9999;
                  price.innerHTML=7998;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/418AkvIGS8L._AC_UY327_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="(Renewed) Vivo Y67 (Gold,4GB RAM, 64GB Storage)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=17999;
                  price.innerHTML=6999;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/31rx3zPdZ1L._AC_UY327_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Vivo V23 Pro 5G(Sunshine Gold, 12GB RAM, 256GB Storage)";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=45990;
                  price.innerHTML=36990;
              }
             else if(frequent.src=="https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Apple iPhone 14 Pro Max (256 GB) - Deep Purple";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=159990;
                  price.innerHTML=149900;
              }
              else if(frequent.src=="https://m.media-amazon.com/images/I/61WAINtWPPL._AC_UY327_FMwebp_QL65_.jpg")
              {
                alert("scrolldown");
                producttitle.innerHTML="Apple iPhone 14 (256 GB) - Yellow";
                stars.innerHTML='<i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill"><i class="bi bi-star-fill">';
                  mrp.innerHTML=909999;
                  price.innerHTML=178999;
              }
              if(detailsindividual.hidden==true)
              {
              detailsindividual.hidden=false;
              }
              else
              detailsindividual.hidden=true;
              //when clicking on anyitem in the website from any point it will come to the green page for details
              
  });
});
function exitdetailsindividual()
{
  if(detailsindividual.hidden==false)
  detailsindividual.hidden=true;
}
  function sendtobuy()
  {
    let image=document.getElementById("placeimage").src;
    localStorage.setItem("image",image);
    let t=document.getElementById("producttitle").innerText;
    localStorage.setItem("title",t);
    let p=document.getElementById("price").innerText;
    localStorage.setItem("price",p);
  }
  let hrs=document.getElementById("hrs");
        let mn=document.getElementById("minutes");
        let sec=document.getElementById("seconds");
        let btn=document.querySelector("#btn");
        addEventListener("load",function(){
            setInterval(timer,10);
        })
        let msec=100,s=60,m=59,h=23;
        function timer()
        {
            msec--;
            if(msec==0)
            {
                msec=100;
                s--;
                if(s==0)
                {
                    s=59;
                    m--;
                    if(m==0)
                    {
                        m=59;
                        h--;
                    }
                }
            }
            if(s<=9)
            {
                sec.innerHTML=`0${s}`;
            }
            else
            sec.innerHTML=s;
            if(m<=9)
            {
                mn.innerHTML=`0${m}`;
            }
            else
            mn.innerHTML=m;
            if(h<=9)
            {
                hrs.innerHTML=`0${h}`;
            }
            else
            hrs.innerHTML=h;
        }
        let cartitems=document.getElementById("insidecart");
        function closecartitems()
        {
          
          if(cartitems.hidden==false)
          cartitems.hidden=true;
        }

        function cartitemsad()
        {
          let searchcontentitem=document.getElementById("searchcontentitem");
          if(searchcontentitem.hidden==false)
          searchcontentitem.hidden=true;
          if(cartitems.hidden==true)
          cartitems.hidden=false;
        }
        let divsan,buynow,imag;
        function addtocarteachitem(image,ttl,price)
        {
          divsan=document.createElement("div");
          imag=document.createElement("img");
          divsan.setAttribute("id","divsan");
          imag.src=image;
          imag.setAttribute("id","imgtocart");
          let p=document.createElement("p");
          console.log(p);
          p.innerHTML=ttl
          p.setAttribute("id","ttltocart")
          let h=document.createElement("h6");
          h.innerHTML=price;
          h.setAttribute("id","pricetocart");
          divsan.appendChild(imag);
          divsan.appendChild(p);
          divsan.appendChild(h);
          buynow=document.createElement("button");
          let btntxtbuy=document.createTextNode("buyNow");
          let remnow=document.createElement("button");
          let btntxtrm=document.createTextNode("Remove");
          let a=document.createElement("a");
          a.appendChild(btntxtbuy);
          a.href="payment2.html";
          console.log(a);
          remnow.appendChild(btntxtrm);
          remnow.setAttribute("id","rmbtn");
          buynow.appendChild(a);
          buynow.setAttribute("id","buybtn");
          //rmbtn inka le
          buynow.setAttribute("onclick","sendtobuy1()");
          remnow.setAttribute("onclick","removeitem()");
          remnow.setAttribute("id","removebutton");
          divsan.appendChild(buynow);
          divsan.appendChild(remnow);
          console.log(buynow);

          document.getElementById("insidecart").appendChild(divsan);
        }
        function remove(image,ttl,price)
        {
          //image.removeAttribute("id")
          document.getElementById("divsan").removeChild(image);
          document.getElementById("divsan").removeChild(ttl);
          document.getElementById("divsan").removeChild(price);
          //document.getElementById("divsan").removeChild(buynow);
          document.getElementById("insidecart").removeChild(divsan);
        }
        function addimg1s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg1is").src;
          let ttl=document.getElementById("addimg1ts").innerText;
          let price=document.getElementById("addimgps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg2s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg2is").src;
          let ttl=document.getElementById("addimg2ts").innerText;
          let price=document.getElementById("addimg2ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg100s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg100is").src;
          let ttl=document.getElementById("addimg100ts").innerText;
          let price=document.getElementById("addimg100ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }

        function addimg3s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg3is").src;
          let ttl=document.getElementById("addimg3ts").innerText;
          let price=document.getElementById("addimg3ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg4s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg4is").src;
          let ttl=document.getElementById("addimg4ts").innerText;
          let price=document.getElementById("addimg4ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg5s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg5is").src;
          let ttl=document.getElementById("addimg5ts").innerText;
          let price=document.getElementById("addimg5ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg6s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg6is").src;
          let ttl=document.getElementById("addimg6ts").innerText;
          let price=document.getElementById("addimg6ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg7s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg7is").src;
          let ttl=document.getElementById("addimg7ts").innerText;
          let price=document.getElementById("addimg7ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg8s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg8is").src;
          let ttl=document.getElementById("addimg8ts").innerText;
          let price=document.getElementById("addimg8ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg9s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg9is").src;
          let ttl=document.getElementById("addimg9ts").innerText;
          let price=document.getElementById("addimg9ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg10s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg10is").src;
          let ttl=document.getElementById("addimg10ts").innerText;
          let price=document.getElementById("addimg10ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg11s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg11is").src;
          let ttl=document.getElementById("addimg11ts").innerText;
          let price=document.getElementById("addimg11ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg12s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg12is").src;
          let ttl=document.getElementById("addimg12ts").innerText;
          let price=document.getElementById("addimg12ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg13s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg13is").src;
          let ttl=document.getElementById("addimg13ts").innerText;
          let price=document.getElementById("addimg13ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg1()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg1i").src;
          let ttl=document.getElementById("addimg1t").innerText;
          let price=document.getElementById("addimg1p").innerText;
          addtocarteachitem(image,ttl,price);
        }
        function addimg2()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg2i").src;
          let ttl=document.getElementById("addimg2t").innerText;
          let price=document.getElementById("addimg2p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg3()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg3i").src;
          let ttl=document.getElementById("addimg3t").innerText;
          let price=document.getElementById("addimg3p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg4()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg4i").src;
          let ttl=document.getElementById("addimg4t").innerText;
          let price=document.getElementById("addimg4p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg5()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg5i").src;
          let ttl=document.getElementById("addimg5t").innerText;
          let price=document.getElementById("addimg5p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg6()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg6i").src;
          let ttl=document.getElementById("addimg6t").innerText;
          let price=document.getElementById("addimg6p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg7()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg7i").src;
          let ttl=document.getElementById("addimg7t").innerText;
          let price=document.getElementById("addimg7p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg8()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg8i").src;
          let ttl=document.getElementById("addimg8t").innerText;
          let price=document.getElementById("addimg8p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg9()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg9i").src;
          let ttl=document.getElementById("addimg9t").innerText;
          let price=document.getElementById("addimg9p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg10()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg10i").src;
          let ttl=document.getElementById("addimg10t").innerText;
          let price=document.getElementById("addimg10p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg11()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg11i").src;
          let ttl=document.getElementById("addimg11t").innerText;
          let price=document.getElementById("addimg11p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg12()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg12i").src;
          let ttl=document.getElementById("addimg12t").innerText;
          let price=document.getElementById("addimg12p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg13()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg13i").src;
          let ttl=document.getElementById("addimg13t").innerText;
          let price=document.getElementById("addimg13p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg14()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg14i").src;
          let ttl=document.getElementById("addimg14t").innerText;
          let price=document.getElementById("addimg14p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg15()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg15i").src;
          let ttl=document.getElementById("addimg15t").innerText;
          let price=document.getElementById("addimg15p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
       function addtocart100()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("placeimage").src;
          let ttl=document.getElementById("producttitle").innerText;
          let price=document.getElementById("original").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg16()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg16i").src;
          let ttl=document.getElementById("addimg16t").innerText;
          let price=document.getElementById("addimg16p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg17()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg17i").src;
          let ttl=document.getElementById("addimg17t").innerText;
          let price=document.getElementById("addimg17p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg18()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg18i").src;
          let ttl=document.getElementById("addimg18t").innerText;
          let price=document.getElementById("addimg18p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg19()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg19i").src;
          let ttl=document.getElementById("addimg19t").innerText;
          let price=document.getElementById("addimg19p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg20()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg20i").src;
          let ttl=document.getElementById("addimg20t").innerText;
          let price=document.getElementById("addimg20p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg21()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg21i").src;
          let ttl=document.getElementById("addimg21t").innerText;
          let price=document.getElementById("addimg21p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg22()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg22i").src;
          let ttl=document.getElementById("addimg22t").innerText;
          let price=document.getElementById("addimg22p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg23()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg23i").src;
          let ttl=document.getElementById("addimg23t").innerText;
          let price=document.getElementById("addimg23p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg24()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg24i").src;
          let ttl=document.getElementById("addimg24t").innerText;
          let price=document.getElementById("addimg24p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg25()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg25i").src;
          let ttl=document.getElementById("addimg25t").innerText;
          let price=document.getElementById("addimg25p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg26()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg26i").src;
          let ttl=document.getElementById("addimg26t").innerText;
          let price=document.getElementById("addimg26p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg27()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg27i").src;
          let ttl=document.getElementById("addimg27t").innerText;
          let price=document.getElementById("addimg27p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg28()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg28i").src;
          let ttl=document.getElementById("addimg28t").innerText;
          let price=document.getElementById("addimg28p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg29()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg29i").src;
          let ttl=document.getElementById("addimg29t").innerText;
          let price=document.getElementById("addimg29p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg30()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg30i").src;
          let ttl=document.getElementById("addimg30t").innerText;
          let price=document.getElementById("addimg30p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg31()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg31i").src;
          let ttl=document.getElementById("addimg31t").innerText;
          let price=document.getElementById("addimg31p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg32()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg32i").src;
          let ttl=document.getElementById("addimg32t").innerText;
          let price=document.getElementById("addimg32p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg33()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg33i").src;
          let ttl=document.getElementById("addimg33t").innerText;
          let price=document.getElementById("addimg33p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg34()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg34i").src;
          let ttl=document.getElementById("addimg34t").innerText;
          let price=document.getElementById("addimg34p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg35()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg35i").src;
          let ttl=document.getElementById("addimg35t").innerText;
          let price=document.getElementById("addimg35p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg36()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg36i").src;
          let ttl=document.getElementById("addimg36t").innerText;
          let price=document.getElementById("addimg36p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg37()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg37i").src;
          let ttl=document.getElementById("addimg37t").innerText;
          let price=document.getElementById("addimg37p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg38()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg38i").src;
          let ttl=document.getElementById("addimg38t").innerText;
          let price=document.getElementById("addimg38p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg39()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg39i").src;
          let ttl=document.getElementById("addimg39t").innerText;
          let price=document.getElementById("addimg39p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg40()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg40i").src;
          let ttl=document.getElementById("addimg40t").innerText;
          let price=document.getElementById("addimg40p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg41()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg41i").src;
          let ttl=document.getElementById("addimg41t").innerText;
          let price=document.getElementById("addimg41p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg42()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg42i").src;
          let ttl=document.getElementById("addimg42t").innerText;
          let price=document.getElementById("addimg42p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg43()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg43i").src;
          let ttl=document.getElementById("addimg43t").innerText;
          let price=document.getElementById("addimg43p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg44()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg44i").src;
          let ttl=document.getElementById("addimg44t").innerText;
          let price=document.getElementById("addimg44p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg45()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg45i").src;
          let ttl=document.getElementById("addimg45t").innerText;
          let price=document.getElementById("addimg45p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg46()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg46i").src;
          let ttl=document.getElementById("addimg46t").innerText;
          let price=document.getElementById("addimg46p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg47()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg47i").src;
          let ttl=document.getElementById("addimg47t").innerText;
          let price=document.getElementById("addimg47p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg48()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg48i").src;
          let ttl=document.getElementById("addimg48t").innerText;
          let price=document.getElementById("addimg48p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg49()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg49i").src;
          let ttl=document.getElementById("addimg49t").innerText;
          let price=document.getElementById("addimg49p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg50()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg50i").src;
          let ttl=document.getElementById("addimg50t").innerText;
          let price=document.getElementById("addimg50p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg51()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg51i").src;
          let ttl=document.getElementById("addimg51t").innerText;
          let price=document.getElementById("addimg51p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg52()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg52i").src;
          let ttl=document.getElementById("addimg52t").innerText;
          let price=document.getElementById("addimg52p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg53()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg53i").src;
          let ttl=document.getElementById("addimg53t").innerText;
          let price=document.getElementById("addimg53p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg54()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg54i").src;
          let ttl=document.getElementById("addimg54t").innerText;
          let price=document.getElementById("addimg54p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg55()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg55i").src;
          let ttl=document.getElementById("addimg55t").innerText;
          let price=document.getElementById("addimg55p").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg1x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg1ix").src;
          let ttl=document.getElementById("addimg1tx").innerText;
          let price=document.getElementById("addimg1px").innerText;
          addtocarteachitem(image,ttl,price);
        }
        function addimg22x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg2ix").src;
          let ttl=document.getElementById("addimg2tx").innerText;
          let price=document.getElementById("addimg2px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg3x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg3ix").src;
          let ttl=document.getElementById("addimg3tx").innerText;
          let price=document.getElementById("addimg3px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg4x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg4ix").src;
          let ttl=document.getElementById("addimg4tx").innerText;
          let price=document.getElementById("addimg4px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg5x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg5ix").src;
          let ttl=document.getElementById("addimg5tx").innerText;
          let price=document.getElementById("addimg5px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg6x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg6ix").src;
          let ttl=document.getElementById("addimg6tx").innerText;
          let price=document.getElementById("addimg6px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg7x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg7ix").src;
          let ttl=document.getElementById("addimg7tx").innerText;
          let price=document.getElementById("addimg7px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg8x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg8ix").src;
          let ttl=document.getElementById("addimg8tx").innerText;
          let price=document.getElementById("addimg8px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg9()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg9ix").src;
          let ttl=document.getElementById("addimg9tx").innerText;
          let price=document.getElementById("addimg9px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg10x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg10ix").src;
          let ttl=document.getElementById("addimg10tx").innerText;
          let price=document.getElementById("addimg10px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg11x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg11ix").src;
          let ttl=document.getElementById("addimg11tx").innerText;
          let price=document.getElementById("addimg11px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg12x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg12ix").src;
          let ttl=document.getElementById("addimg12tx").innerText;
          let price=document.getElementById("addimg12px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg13x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg13ix").src;
          let ttl=document.getElementById("addimg13tx").innerText;
          let price=document.getElementById("addimg13px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg14x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg14ix").src;
          let ttl=document.getElementById("addimg14tx").innerText;
          let price=document.getElementById("addimg14px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg15x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg15ix").src;
          let ttl=document.getElementById("addimg15tx").innerText;
          let price=document.getElementById("addimg15px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg16x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg16ix").src;
          let ttl=document.getElementById("addimg16tx").innerText;
          let price=document.getElementById("addimg16px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg17x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg17ix").src;
          let ttl=document.getElementById("addimg17tx").innerText;
          let price=document.getElementById("addimg17px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg18x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg18ix").src;
          let ttl=document.getElementById("addimg18tx").innerText;
          let price=document.getElementById("addimg18px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg19x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg19ix").src;
          let ttl=document.getElementById("addimg19tx").innerText;
          let price=document.getElementById("addimg19px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg20x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg20ix").src;
          let ttl=document.getElementById("addimg20tx").innerText;
          let price=document.getElementById("addimg20px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg21x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg21ix").src;
          let ttl=document.getElementById("addimg21tx").innerText;
          let price=document.getElementById("addimg21px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg22x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg22ix").src;
          let ttl=document.getElementById("addimg22tx").innerText;
          let price=document.getElementById("addimg22px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg23x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg23ix").src;
          let ttl=document.getElementById("addimg23tx").innerText;
          let price=document.getElementById("addimg23px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg24x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg24ix").src;
          let ttl=document.getElementById("addimg24tx").innerText;
          let price=document.getElementById("addimg24px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg25x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg25ix").src;
          let ttl=document.getElementById("addimg25tx").innerText;
          let price=document.getElementById("addimg25px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg26x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg26ix").src;
          let ttl=document.getElementById("addimg26tx").innerText;
          let price=document.getElementById("addimg26px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg27x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg27ix").src;
          let ttl=document.getElementById("addimg27tx").innerText;
          let price=document.getElementById("addimg27px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg28x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg28ix").src;
          let ttl=document.getElementById("addimg28tx").innerText;
          let price=document.getElementById("addimg28px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg29x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg29ix").src;
          let ttl=document.getElementById("addimg29tx").innerText;
          let price=document.getElementById("addimg29px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg30x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg30ix").src;
          let ttl=document.getElementById("addimg30tx").innerText;
          let price=document.getElementById("addimg30px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg31x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg31ix").src;
          let ttl=document.getElementById("addimg31tx").innerText;
          let price=document.getElementById("addimg31px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg32x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg32ix").src;
          let ttl=document.getElementById("addimg32tx").innerText;
          let price=document.getElementById("addimg32px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg33x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg33ix").src;
          let ttl=document.getElementById("addimg33tx").innerText;
          let price=document.getElementById("addimg33px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg34x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg34ix").src;
          let ttl=document.getElementById("addimg34tx").innerText;
          let price=document.getElementById("addimg34px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg35x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg35ix").src;
          let ttl=document.getElementById("addimg35tx").innerText;
          let price=document.getElementById("addimg35px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg36x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg36ix").src;
          let ttl=document.getElementById("addimg36tx").innerText;
          let price=document.getElementById("addimg36px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg37x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg37ix").src;
          let ttl=document.getElementById("addimg37tx").innerText;
          let price=document.getElementById("addimg37px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg38x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg38ix").src;
          let ttl=document.getElementById("addimg38tx").innerText;
          let price=document.getElementById("addimg38px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg39x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg39ix").src;
          let ttl=document.getElementById("addimg39tx").innerText;
          let price=document.getElementById("addimg39px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg40x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg40ix").src;
          let ttl=document.getElementById("addimg40tx").innerText;
          let price=document.getElementById("addimg40px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg41x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg41ix").src;
          let ttl=document.getElementById("addimg41tx").innerText;
          let price=document.getElementById("addimg41px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg42x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg42ix").src;
          let ttl=document.getElementById("addimg42tx").innerText;
          let price=document.getElementById("addimg42px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg43x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg43ix").src;
          let ttl=document.getElementById("addimg43tx").innerText;
          let price=document.getElementById("addimg43px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg44x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg44ix").src;
          let ttl=document.getElementById("addimg44tx").innerText;
          let price=document.getElementById("addimg44px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg45x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg45ix").src;
          let ttl=document.getElementById("addimg45tx").innerText;
          let price=document.getElementById("addimg45px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg46x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg46ix").src;
          let ttl=document.getElementById("addimg46tx").innerText;
          let price=document.getElementById("addimg46px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg47x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg47ix").src;
          let ttl=document.getElementById("addimg47tx").innerText;
          let price=document.getElementById("addimg47px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg48x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg48ix").src;
          let ttl=document.getElementById("addimg48tx").innerText;
          let price=document.getElementById("addimg48px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg49x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg49ix").src;
          let ttl=document.getElementById("addimg49tx").innerText;
          let price=document.getElementById("addimg49px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg50x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg50ix").src;
          let ttl=document.getElementById("addimg50tx").innerText;
          let price=document.getElementById("addimg50px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg51x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg51ix").src;
          let ttl=document.getElementById("addimg51tx").innerText;
          let price=document.getElementById("addimg51px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg52x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg52ix").src;
          let ttl=document.getElementById("addimg52tx").innerText;
          let price=document.getElementById("addimg52px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg53x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg53ix").src;
          let ttl=document.getElementById("addimg53tx").innerText;
          let price=document.getElementById("addimg53px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg54x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg54ix").src;
          let ttl=document.getElementById("addimg54tx").innerText;
          let price=document.getElementById("addimg54px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg55x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg55ix").src;
          let ttl=document.getElementById("addimg55tx").innerText;
          let price=document.getElementById("addimg55px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function addimg60x()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg60ix").src;
          let ttl=document.getElementById("addimg60tx").innerText;
          let price=document.getElementById("addimg60px").innerText;
          console.log(ttl);
          console.log(image);
          addtocarteachitem(image,ttl,price);
        }
        function sendtobuy1()
        {
          let image2=document.getElementById("imgtocart").src;
          localStorage.setItem("image2",image2);
          let ttl2=document.getElementById("ttltocart").innerText;
          console.log(ttl2);
          localStorage.setItem("ttl2",ttl2);
          let price2=document.getElementById("pricetocart").innerText;
          localStorage.setItem("price2",price2);
        }
        function removeitem()
        {
          let image2=document.getElementById("imgtocart").src;
          let ttl2=document.getElementById("ttltocart").innerText;
          let price2=document.getElementById("pricetocart").innerText;
          console.log(image2,ttl2,price2);
          remove(image2,ttl2,price2);
        }
        let details=document.getElementById("details");
        function view()
        {
          if(details.hidden==true)
          details.hidden=false;
        }
        function dhidden()
        {
          if(details.hidden==false)
          details.hidden=true;
        }
        let detailslappy=document.getElementById("detailslappy");
        function view1()
        {
          console.log(detailslappy);
          console.log("bjsd");
          if(detailslappy.hidden==true)
          detailslappy.hidden=false;
        }
        function lhidden()
        {
          if(detailslappy.hidden==false)
          detailslappy.hidden=true;
        }
        let incr=document.getElementById("incr").innerText;
        let cl=document.querySelectorAll(".addbtn");
        let count=0;
          cl.forEach(clbtn=>{
            clbtn.addEventListener('click',function increaseno(){
              count++;
              console.log(count);
              incr=count;
              document.getElementById("incr").innerHTML=incr;
              console.log(incr);
            })
            let searchcontentitem=document.getElementById("searchcontentitem");
          let addbtn=searchcontentitem.querySelectorAll(".addbtn");
          addbtn.forEach(clbtn1=>{
            clbtn1.addEventListener('click',function increaseno(){
              count++;
              console.log(count);
              incr=count;
              document.getElementById("incr").innerHTML=incr;
              console.log(incr);
            })
          })
          });
          function searchitem()
          {
          let dis=document.getElementById("searchcontentitem");
          console.log("sraech is clicked");
          let usha=document.getElementById("usha");
          if(dis.hidden==true)
          {
            console.log("opeb");
          dis.hidden=false;
          }
          if(usha.hidden==true)
          {
            usha.hidden=false;
          }
         let product=document.createElement("div");
        product.setAttribute("class","product");
        product.setAttribute("id","productlist");
         dis.appendChild(product);
         let pro=document.querySelectorAll(".pro");
         let product1=document.querySelectorAll(".product1")
         
         pro.forEach((p)=>{
          let clone=p.cloneNode(true);
         product.appendChild(clone);
         })

         //
         }
         function usha()
         {
          let dis=document.getElementById("searchcontentitem");
          console.log("sraech is clicked");
          let usha=document.getElementById("usha");
          let addbtn=document.querySelectorAll(".addbtn")
          addbtn.forEach((btn)=>{
            btn.addEventListener('click',usha);
          })
          if(dis.hidden==false)
          {
            console.log("opeb");
          dis.hidden=true;

          }
          if(usha.hidden==false)
          {
            dis.innerHTML='';
            usha.hidden=true;
          }
         }
         //addbtn
         function searchsearch()
         {
          const searchbox=document.getElementById("search-item").value.toUpperCase();
         const storeitems=document.getElementById("productlist");
         const productsearch=document.querySelectorAll(".pro");
         const pname=storeitems.getElementsByTagName("p");

         for(var i=0;i<pname.length;i++){
          let match=productsearch[i].getElementsByTagName("p")[0];
          console.log(match);
          if(match){
            let textvalue=match.textContent || match.innerHTML;
            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
              productsearch[i].style.display="";
              console.log("if codnif");
            }
            else
            {
              productsearch[i].style.display="none";
              console.log("else cond");
            }
          }
         }
         }
         let searchcontentitem=document.getElementById("searchcontentitem");
         console.log(searchcontentitem);
         console.log(document.getElementById("details-individual"));

         function addimg301s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg301is").src;
          let ttl=document.getElementById("addimg301ts").innerText;
          let price=document.getElementById("addimg301ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg302s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg302is").src;
          let ttl=document.getElementById("addimg302ts").innerText;
          let price=document.getElementById("addimg302ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg303s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg303is").src;
          let ttl=document.getElementById("addimg303ts").innerText;
          let price=document.getElementById("addimg303ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg304s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg304is").src;
          let ttl=document.getElementById("addimg304ts").innerText;
          let price=document.getElementById("addimg304ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg305s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg305is").src;
          let ttl=document.getElementById("addimg305ts").innerText;
          let price=document.getElementById("addimg305ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg306s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg306is").src;
          let ttl=document.getElementById("addimg306ts").innerText;
          let price=document.getElementById("addimg306ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg307s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg307is").src;
          let ttl=document.getElementById("addimg307ts").innerText;
          let price=document.getElementById("addimg307ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg308s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg308is").src;
          let ttl=document.getElementById("addimg308ts").innerText;
          let price=document.getElementById("addimg308ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg309s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg309is").src;
          let ttl=document.getElementById("addimg309ts").innerText;
          let price=document.getElementById("addimg309ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg310s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg310is").src;
          let ttl=document.getElementById("addimg310ts").innerText;
          let price=document.getElementById("addimg310ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg311s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg311is").src;
          let ttl=document.getElementById("addimg311ts").innerText;
          let price=document.getElementById("addimg311ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg312s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg312is").src;
          let ttl=document.getElementById("addimg312ts").innerText;
          let price=document.getElementById("addimg312ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg313s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg313is").src;
          let ttl=document.getElementById("addimg313ts").innerText;
          let price=document.getElementById("addimg313ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg314s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg314is").src;
          let ttl=document.getElementById("addimg314ts").innerText;
          let price=document.getElementById("addimg314ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg315s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg315is").src;
          let ttl=document.getElementById("addimg315ts").innerText;
          let price=document.getElementById("addimg315ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg316s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg316is").src;
          let ttl=document.getElementById("addimg316ts").innerText;
          let price=document.getElementById("addimg316ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg317s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg317is").src;
          let ttl=document.getElementById("addimg317ts").innerText;
          let price=document.getElementById("addimg317ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg318s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg318is").src;
          let ttl=document.getElementById("addimg318ts").innerText;
          let price=document.getElementById("addimg318ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg319s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg319is").src;
          let ttl=document.getElementById("addimg319ts").innerText;
          let price=document.getElementById("addimg319ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg320s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg320is").src;
          let ttl=document.getElementById("addimg320ts").innerText;
          let price=document.getElementById("addimg320ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg321s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg321is").src;
          let ttl=document.getElementById("addimg321ts").innerText;
          let price=document.getElementById("addimg321ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg322s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg322is").src;
          let ttl=document.getElementById("addimg322ts").innerText;
          let price=document.getElementById("addimg322ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg323s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg323is").src;
          let ttl=document.getElementById("addimg323ts").innerText;
          let price=document.getElementById("addimg323ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg324s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg324is").src;
          let ttl=document.getElementById("addimg324ts").innerText;
          let price=document.getElementById("addimg324ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg325s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg325is").src;
          let ttl=document.getElementById("addimg325ts").innerText;
          let price=document.getElementById("addimg325ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg326s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg326is").src;
          let ttl=document.getElementById("addimg326ts").innerText;
          let price=document.getElementById("addimg326ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg327s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg327is").src;
          let ttl=document.getElementById("addimg327ts").innerText;
          let price=document.getElementById("addimg327ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg328s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg328is").src;
          let ttl=document.getElementById("addimg328ts").innerText;
          let price=document.getElementById("addimg328ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg329s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg329is").src;
          let ttl=document.getElementById("addimg329ts").innerText;
          let price=document.getElementById("addimg329ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg330s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg330is").src;
          let ttl=document.getElementById("addimg330ts").innerText;
          let price=document.getElementById("addimg330ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg331s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg331is").src;
          let ttl=document.getElementById("addimg331ts").innerText;
          let price=document.getElementById("addimg331ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg332s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg332is").src;
          let ttl=document.getElementById("addimg332ts").innerText;
          let price=document.getElementById("addimg332ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg333s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg333is").src;
          let ttl=document.getElementById("addimg333ts").innerText;
          let price=document.getElementById("addimg333ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg334s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg334is").src;
          let ttl=document.getElementById("addimg334ts").innerText;
          let price=document.getElementById("addimg334ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg335s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg335is").src;
          let ttl=document.getElementById("addimg335ts").innerText;
          let price=document.getElementById("addimg355ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg336s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg336is").src;
          let ttl=document.getElementById("addimg336ts").innerText;
          let price=document.getElementById("addimg336ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg337s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg337is").src;
          let ttl=document.getElementById("addimg337ts").innerText;
          let price=document.getElementById("addimg337ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg338s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg338is").src;
          let ttl=document.getElementById("addimg338ts").innerText;
          let price=document.getElementById("addimg338ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg339s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg339is").src;
          let ttl=document.getElementById("addimg339ts").innerText;
          let price=document.getElementById("addimg339ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg340s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg340is").src;
          let ttl=document.getElementById("addimg340ts").innerText;
          let price=document.getElementById("addimg340ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg341s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg341is").src;
          let ttl=document.getElementById("addimg341ts").innerText;
          let price=document.getElementById("addimg341ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg342s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg342is").src;
          let ttl=document.getElementById("addimg342ts").innerText;
          let price=document.getElementById("addimg342ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg343s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg343is").src;
          let ttl=document.getElementById("addimg343ts").innerText;
          let price=document.getElementById("addimg343ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg344s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg344is").src;
          let ttl=document.getElementById("addimg344ts").innerText;
          let price=document.getElementById("addimg344ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg345s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg345is").src;
          let ttl=document.getElementById("addimg345ts").innerText;
          let price=document.getElementById("addimg345ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg346s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg346is").src;
          let ttl=document.getElementById("addimg346ts").innerText;
          let price=document.getElementById("addimg346ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg347s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg347is").src;
          let ttl=document.getElementById("addimg347ts").innerText;
          let price=document.getElementById("addimg347ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg348s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg348is").src;
          let ttl=document.getElementById("addimg348ts").innerText;
          let price=document.getElementById("addimg348ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg81s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg81is").src;
          let ttl=document.getElementById("addimg81ts").innerText;
          let price=document.getElementById("addimg81ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg82s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg82is").src;
          let ttl=document.getElementById("addimg82ts").innerText;
          let price=document.getElementById("addimg82ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg83s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg83is").src;
          let ttl=document.getElementById("addimg83ts").innerText;
          let price=document.getElementById("addimg83ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg84s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg84is").src;
          let ttl=document.getElementById("addimg84ts").innerText;
          let price=document.getElementById("addimg84ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg85s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg85is").src;
          let ttl=document.getElementById("addimg85ts").innerText;
          let price=document.getElementById("addimg85ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg86s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg86is").src;
          let ttl=document.getElementById("addimg86ts").innerText;
          let price=document.getElementById("addimg86ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg87s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg87is").src;
          let ttl=document.getElementById("addimg87ts").innerText;
          let price=document.getElementById("addimg87ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg88s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg88is").src;
          let ttl=document.getElementById("addimg88ts").innerText;
          let price=document.getElementById("addimg88ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg89s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg89is").src;
          let ttl=document.getElementById("addimg89ts").innerText;
          let price=document.getElementById("addimg89ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg90s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg90is").src;
          let ttl=document.getElementById("addimg90ts").innerText;
          let price=document.getElementById("addimg90ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg91s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg91is").src;
          let ttl=document.getElementById("addimg91ts").innerText;
          let price=document.getElementById("addimg91ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg92s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg92is").src;
          let ttl=document.getElementById("addimg92ts").innerText;
          let price=document.getElementById("addimg92ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg93s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg93is").src;
          let ttl=document.getElementById("addimg93ts").innerText;
          let price=document.getElementById("addimg93ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg94s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg94is").src;
          let ttl=document.getElementById("addimg94ts").innerText;
          let price=document.getElementById("addimg94ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }

        function addimg201s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg201is").src;
          let ttl=document.getElementById("addimg201ts").innerText;
          let price=document.getElementById("addimg201ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg202s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg202is").src;
          let ttl=document.getElementById("addimg202ts").innerText;
          let price=document.getElementById("addimg202ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg203s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg203is").src;
          let ttl=document.getElementById("addimg203ts").innerText;
          let price=document.getElementById("addimg203ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg204s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg204is").src;
          let ttl=document.getElementById("addimg204ts").innerText;
          let price=document.getElementById("addimg204ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg205s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg205is").src;
          let ttl=document.getElementById("addimg205ts").innerText;
          let price=document.getElementById("addimg205ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg206s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg206is").src;
          let ttl=document.getElementById("addimg206ts").innerText;
          let price=document.getElementById("addimg206ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg207s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg207is").src;
          let ttl=document.getElementById("addimg207ts").innerText;
          let price=document.getElementById("addimg207ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg208s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg208is").src;
          let ttl=document.getElementById("addimg208ts").innerText;
          let price=document.getElementById("addimg208ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg209s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg209is").src;
          let ttl=document.getElementById("addimg209ts").innerText;
          let price=document.getElementById("addimg209ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg210s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg210is").src;
          let ttl=document.getElementById("addimg210ts").innerText;
          let price=document.getElementById("addimg210ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg211s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg211is").src;
          let ttl=document.getElementById("addimg211ts").innerText;
          let price=document.getElementById("addimg211ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg212s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg212is").src;
          let ttl=document.getElementById("addimg212ts").innerText;
          let price=document.getElementById("addimg212ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg213s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg213is").src;
          let ttl=document.getElementById("addimg213ts").innerText;
          let price=document.getElementById("addimg213ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function addimg214s()
        {
          window.alert("Added to cart sucessfully");
          let image=document.getElementById("addimg214is").src;
          let ttl=document.getElementById("addimg214ts").innerText;
          let price=document.getElementById("addimg214ps").innerText;
          console.log(ttl,price);
          addtocarteachitem(image,ttl,price);
        }
        function bacimg1()
        {
          window.alert("added to cart (Cart items number should not be increases)");
          let image="https://m.media-amazon.com/images/I/71GPouxzlcL._AC_UL600_FMwebp_QL65_.jpg";
          let ttl="Huesland by Ahmedabad Cotton 144 TC Cotton Bedsheet for Double Bed with 2 Pillow Covers - Grey and Yellow";
          let price=589;
          addtocarteachitem(image,ttl,price);
        }
        function bacimg2()
        {
          window.alert("added to cart (Cart items number should not be increases)");
          let image="https://m.media-amazon.com/images/I/71-ouhzbHsL._AC_UY327_FMwebp_QL65_.jpg";
          let ttl="Itel A60 (6.6 inch HD+ IPS Waterdrop Display | 5000mAh Battery | Fingerprint Sensor) - Dawn Blue";
          let price=5999;
          addtocarteachitem(image,ttl,price);
        }
        function not()
        {
          window.alert("No notifications yet...");
        }
        function bacimg3()
        {
          window.alert("added to cart (Cart items number should not be increases)");
          let image="https://m.media-amazon.com/images/I/71GBe-SiroL._AC_UL600_FMwebp_QL65_.jpg";
          let ttl="Tide Naturals Lemon and Chandan Detergent Washing Powder, 1kg";
          let price=66;
          addtocarteachitem(image,ttl,price);
        }
        function yes()
        {
          let select=document.getElementById("lan").value;
          if(select=="हिन्दी - HI")
          {
        let html=document.querySelector("html");
        html.setAttribute("lang","hi");
          }
          if(select=="తెలుగు - TE")
          {
        let html=document.querySelector("html");
        html.setAttribute("lang","te");
          }
          if(select=="English - EN")
          {
        let html=document.querySelector("html");
        html.setAttribute("lang","en");
          }
        }