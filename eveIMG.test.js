describe('EveIMG', function () {
    beforeEach(module('trichner.angular-eve-img'));

    var service;
    beforeEach(inject(function (_EveIMG_) {
        service = _EveIMG_;
    }));

    it('should link characters', function () {
        expect(service.imgUrlCharacter(3003981,256)).toEqual("https://image.eveonline.com/Character/3003981_256.jpg");
    });

    it('should link corporation', function () {
        expect(service.imgUrlCorporation(1000107,32)).toEqual("https://image.eveonline.com/Corporation/1000107_32.png");
    });

    it('should link alliance', function () {
        expect(service.imgUrlAlliance(632866070,128)).toEqual("https://image.eveonline.com/Alliance/632866070_128.png");
    });

    it('should link items', function () {
        expect(service.imgUrlType(17765,32)).toEqual("https://image.eveonline.com/Type/17765_32.png");
    });

    it('should link renders', function () {
        expect(service.imgUrlRender(23059,128)).toEqual("https://image.eveonline.com/Render/23059_128.png");
    });
});