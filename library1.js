function istouching(fixrect,movingrect){
    if(fixrect.x-movingrect.x<=fixrect.width/2+movingrect.width/2&&
      movingrect.x-fixrect.x<=fixrect.width/2+movingrect.width/2&&
      movingrect.y-fixrect.y<=fixrect.height/2+movingrect.height/2&&
      fixrect.y-movingrect.y<=fixrect.height/2+movingrect.height/2){
   return true;   
    }
    else{
    return false;
    }
  }