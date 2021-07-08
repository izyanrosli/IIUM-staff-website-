
                var i=0;
                var images=[];
                var time=3000;
                    
                    
                    images[0]= "../images/home.jpg";
                    images[1]= "../images/KOED_Panorama.jpg";
                    images[2]= "../images/home.jpg";
                    
                       var x =document.getElementById('home');
                      
                    
                    function changeImg(){
                        
                    
                       x.style.backgroundImage="url("  + images[i] + ")";
                        
                        if(i <images.length -1)
                            {
                                i++;
                            }
                        
                        else{
                            i=0;
                        }
                                
                                setTimeout("changeImg()",time);
                            }
                        
                    
                    window.onload=changeImg;
                    