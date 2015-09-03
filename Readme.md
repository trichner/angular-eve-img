Angular module to create Eve Online image urls.
All images reference `https://image.eveonline.com/`

## Install

```
bower install angular-eve-img --save
```

## Usage

```
app = angular.module('app', ['trichner.angular-eve-img']);

...

app.controller('MyController', function(EveIMG){

	// should result in 'Character Portrait URL: https://image.eveonline.com/Character/3003981_256.jpg'
    console.log('Character Portrait URL: ' + EveIMG.imgUrlCharacter(3003981,512));

});
```

