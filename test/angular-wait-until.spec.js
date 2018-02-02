describe('Angular Wait Until', () => {
  beforeEach(module('angular.wait-until'));

  let WaitUntil;
  let $rootScope;
  let $q;

  beforeEach(inject((_$rootScope_, _$q_, _WaitUntil_) => {
    WaitUntil = _WaitUntil_;
    $rootScope = _$rootScope_.$new();
    $q = _$q_;
  }));

  it('Wait until promise to be resolved', (done) => {
    var myPromise = new WaitUntil();

    myPromise
      .stopAfter(100)
      .tryEvery(200)
      .stopOnFailure(false) // Ignore errors
      .execute(() => {
        return $q((resolve) => {
          return resolve(true); // some truthy value
        });
      })
      .then((value) => {
        expect(value).toEqual(true);
        done();
      });
    $rootScope.$apply();
  });
});
