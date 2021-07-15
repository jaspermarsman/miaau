import getReturnedParamsFromSpotifyAuth from "../helpers/getReturnedParamsFromSpotifyAuth";

test('Just for testing purpose', () => {
  console.log("Valid")
});

test("Split a url after # and create an object with 3 variables", () => {
  //Arrange
  const url = "#access_token=TeSTiNgPuRPosE&token_type=Bearer&expires_in=3600";
  //Act
  const resultObject = getReturnedParamsFromSpotifyAuth(url);
  //Assert
  expect(resultObject).toHaveProperty("access_token");
  expect(resultObject).toHaveProperty("token_type");
  expect(resultObject).toHaveProperty("expires_in");
});
